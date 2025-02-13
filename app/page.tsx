import { NextPage } from "next";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import React from "react";

const AuthProtected: NextPage = withPageAuthRequired(
  async () => {
    const session = await getSession();
    const user: any = session?.user;
    return (
      <div className="content-layout px-44 py-8">
        <div className="text-center">
          <img src={user.picture} alt={user.name} className="rounded-full w-24 h-24 mx-auto" />
          <h2 className="text-2xl font-bold mt-4">Welcome, {user.name}!</h2>
          <p className="text-lg">{user.email}</p>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold">Welcome to the Auth Protected Page</h3>
          <p className="mt-4">
            This is a protected area of the application. Only authenticated users can access this page.
          </p>
          <p className="mt-2">
            Feel free to explore the features and functionalities available to you as a logged-in user.
          </p>
        </div>
      </div>
    );
  },
  { returnTo: "/auth-protected" }
);

export default AuthProtected;