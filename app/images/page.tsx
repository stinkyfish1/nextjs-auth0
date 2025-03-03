"use client";

import { uploadImage } from "../supabase/storage/client";
import { ChangeEvent, useRef, useState, useTransition } from "react";
import { convertBlobUrlToFile } from "../lib/utils";
import Image from "next/image";

function HomePage() {
const [imageUrls, setImageUrls] = useState<string[]>([]);

const imageInputRef = useRef<HTMLInputElement>(null);

const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
if (e.target.files) {
    const filesArray = Array.from(e.target.files);
    const newImageUrls = filesArray.map((file) => URL.createObjectURL(file));

    setImageUrls([...imageUrls, ...newImageUrls]);
    }
};  

const [isPending, startTransition] = useTransition();

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
<div className="bg-slate-500 min-h-screen flex justify-center items-center flex-col gap-8">

    <input
        type="file"
        hidden
        multiple
        ref={imageInputRef}
        onChange={handleImageChange}
        disabled={isPending}
    />

    <button
        className="bg-slate-600 py-2 w-40 rounded-lg"
        onClick={() => imageInputRef.current?.click()}
        disabled={isPending}
        >
        Velg bilder
    </button>

    <div className="flex gap-4">
        {imageUrls.map((url, index) => (
            <Image
            key={url}
            src={url}
            width={300}
            height={300}
            alt={`img-${index}`}
            />
        ))}
    </div>

    <button
        onClick={handleClickUploadImagesButton}
        className="bg-slate-600 py-2 w-40 rounded-lg"
        disabled={isPending}
        >
        {isPending ? "Laster opp....." : "Last opp til skyen"}
    </button>
</div>
);
}

export default HomePage;