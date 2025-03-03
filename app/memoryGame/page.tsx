"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import MemoryGame from "@/components/MemoryGame";
import Link from "next/link";

export default function Home() {
    const { user, error, isLoading } = useUser();

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

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <MemoryGame />
        </main>
    );
}
