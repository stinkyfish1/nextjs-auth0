"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { uploadImage } from "../supabase/storage/client";
import { ChangeEvent, useRef, useState, useTransition } from "react";
import { convertBlobUrlToFile } from "../lib/utils";
import Image from "next/image";
import Link from "next/link";

function HomePage() {
    const { user, error, isLoading } = useUser();
    const [imageUrls, setImageUrls] = useState<string[]>([]);
    const imageInputRef = useRef<HTMLInputElement>(null);
    const [isPending, startTransition] = useTransition();

    if (isLoading) {
        return <div className="min-h-screen flex items-center justify-center text-white">Laster inn...</div>;
    }

    if (!user) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-white">
                <h1 className="text-3xl font-bold">Du må være logget inn</h1>
                <Link href="/api/auth/login">
                    <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg">
                        Logg inn
                    </button>
                </Link>
            </div>
        );
    }

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const filesArray = Array.from(e.target.files);
            const newImageUrls = filesArray.map((file) => URL.createObjectURL(file));
            setImageUrls([...imageUrls, ...newImageUrls]);
        }
    };

    const handleClickUploadImagesButton = async () => {
        startTransition(async () => {
            let urls = [];
            for (const url of imageUrls) {
                const imageFile = await convertBlobUrlToFile(url);
                const { imageUrl, error } = await uploadImage({
                    file: imageFile,
                    bucket: "nextjs-images",
                });

                if (error) {
                    console.error(error);
                    return;
                }

                urls.push(imageUrl);
            }

            console.log(urls);
            setImageUrls([]);
        });
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-white p-8">
            <h1 className="text-3xl font-bold mb-4">Bildeopplastingstjeneste</h1>
            <p className="text-lg mb-6 text-center max-w-lg">
                Last opp bilder til skyen og lagre dem sikkert med Supabase. Velg flere bilder og se dem før opplasting.
            </p>

            <input
                type="file"
                hidden
                multiple
                ref={imageInputRef}
                onChange={handleImageChange}
                disabled={isPending}
            />

            <button
                className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition disabled:opacity-50"
                onClick={() => imageInputRef.current?.click()}
                disabled={isPending}
            >
                Velg bilder
            </button>

            <div className="flex flex-wrap gap-4 justify-center mt-6">
                {imageUrls.map((url, index) => (
                    <div key={url} className="relative w-40 h-40 border-2 border-white rounded-lg overflow-hidden shadow-md">
                        <Image src={url} layout="fill" objectFit="cover" alt={`Bilde ${index}`} />
                    </div>
                ))}
            </div>

            <button
                onClick={handleClickUploadImagesButton}
                className="mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition disabled:opacity-50"
                disabled={isPending}
            >
                {isPending ? "Laster opp..." : "Last opp til skyen"}
            </button>
        </div>
    );
}

export default HomePage;
