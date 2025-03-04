"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

const Home: React.FC = () => {
  const { user, isLoading } = useUser();
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!isLoading && !user) {
      setMessage("You're not logged in!");
    } else {
      setMessage("");
    }
  }, [user, isLoading]);

  const handleProfileClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!user) {
      e.preventDefault();
      alert("You're not logged in!");
    }
  };

  return (
    <div className="content-layout px-44 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mt-4">Velkommen til min</h1>
        <h1 className="text-4xl font-bold mt-4">Auth0 og Supabase NextJs</h1>
        <h1 className="text-4xl font-bold mt-4 mb-8">Nettside</h1>
        <Link href="/auth-protected" className="text-blue-500 mb-6">
          Din authSide
        </Link>
        
      </div>
    </div>
  );
};

export default Home;