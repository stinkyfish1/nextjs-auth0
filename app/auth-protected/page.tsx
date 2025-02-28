import { NextPage } from "next";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import React from "react";

const AuthProtected: NextPage = withPageAuthRequired(
  async () => {
    const session = await getSession();
    const user: any = session?.user;

    const displayName = user.name !== user.email ? user.name : user.nickname;
    return (
      <div className="px-10 py-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 min-h-screen text-white flex flex-col items-center">
        <div className="text-center bg-white bg-opacity-20 p-6 rounded-lg shadow-lg w-full max-w-lg">
          <img src={user.picture} alt={displayName} className="rounded-full w-32 h-32 mx-auto border-4 border-white shadow-md" />
          <h2 className="text-3xl font-extrabold mt-4 drop-shadow-md">Welcome, {displayName}!</h2>
          <p className="text-lg text-gray-200">{user.email}</p>
        </div>
        <div className="mt-8 bg-white bg-opacity-20 p-6 rounded-lg shadow-lg w-full max-w-lg">
          <h3 className="text-xl font-semibold text-center">🚀 Welcome to the Auth Protected Page 🚀</h3>
          <p className="mt-4 text-center">
            This is a protected area of the application. Only authenticated users can access this page.
          </p>
          <p className="mt-2 text-center">
            Feel free to explore the features and functionalities available to you as a logged-in user.
          </p>
        </div>
      </div>
    );
  },
  { returnTo: "/auth-protected" }
);

export default AuthProtected;
