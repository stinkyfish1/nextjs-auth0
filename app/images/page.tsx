"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import Link from "next/link";

const Profile = () => {
    const { user, error, isLoading } = useUser();

    if (isLoading) {
        return <div className="min-h-screen flex items-center justify-center text-gray-700">Laster inn...</div>;
    }

    if (!user) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center p-8">
                <h1 className="text-2xl font-bold text-red-500">Du må være logget inn</h1>
                <p className="text-lg text-gray-600 mt-2">For å se denne siden, vennligst logg inn.</p>
                <Link href="/api/auth/login">
                    <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition">
                        Logg inn
                    </button>
                </Link>
            </div>
        );
    }

    const displayName = user.name !== user.email ? user.name : user.nickname;

    return (
        <div className="content-layout px-44 py-8">
            <div className="text-center">
                <img src={user.picture} alt={displayName} className="rounded-full w-24 h-24 mx-auto" />
                <h1 className="text-2xl font-bold mt-4">Welcome, {displayName}!</h1>
                <p className="text-lg text-gray-600">{user.email}</p>
            </div>
            <div className="mt-8">
                <h2 className="text-xl font-semibold">Profile Information</h2>
                <div className="mt-4">
                    <p className="text-lg"><strong>Nickname:</strong> {user.nickname}</p>
                    <p className="text-lg"><strong>Email Verified:</strong> {user.email_verified ? "Yes" : "No"}</p>
                    <p className="text-lg"><strong>Sub:</strong> {user.sub}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
