"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { SignupButton } from "@/components/signup-button";
import { LoginButton } from "@/components/login-button";
import { LogoutButton } from "@/components/logout-button";
import React from "react";

const NavBar = () => {
  const { user, error, isLoading } = useUser();
  return (
    <div className="py-4 flex w-full justify-between bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 px-44 text-white shadow-lg">
      <div className="flex gap-8">
        <a href="/" className="hover:text-gray-200 text-lg font-semibold">Home</a>
        <a href="/profile" className="hover:text-gray-200 text-lg font-semibold">Profile</a>
        <a href="/memoryGame" className="hover:text-gray-200 text-lg font-semibold">Memorygame</a>
        <a href="/images" className="hoved:text-gray-200 text-lg font-semibold">Images</a>
      </div>
      <div className="flex gap-4">
        {!user && !isLoading && (
          <>
            <SignupButton />
            <LoginButton />
          </>
        )}
        {user && !isLoading && (
          <>
            <LogoutButton />
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;