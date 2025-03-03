import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import React from "react";

const Profile = async () => {
  const session = await getSession();
  const user = session?.user;
  if (!user) {
    redirect("/");
  }
  const displayName = user.name !== user.email ? user.name : user.nickname;

  return (
    <div className="content-layout px-44 py-8">
      <div className="text-center">
        <img src={user.picture} alt={displayName + "this is your profile name"} className="rounded-full w-24 h-24 mx-auto" />
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
      <div className="mt-8">
        <h3 className="text-xl font-semibold">About This Page</h3>
        <p className="mt-4">
          This is a protected area of the application. Only authenticated users can access this page.
        </p>
        <p className="mt-2">
          Feel free to explore the features and functionalities available to you as a logged-in user.
        </p>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold">Additional Resources</h3>
        <ul className="list-disc list-inside mt-4">
          <li><a href="https://auth0.com/docs" className="text-blue-500">Auth0 Documentation</a></li>
          <li><a href="https://nextjs.org/docs" className="text-blue-500">Next.js Documentation</a></li>
          <li><a href="https://tailwindcss.com/docs" className="text-blue-500">Tailwind CSS Documentation</a></li>
        </ul>
      </div>
      <div className="mt-8">
        <img src="/full_stack_web_developer_salary-1.jpg" alt="man" className="rounded-lg shadow-lg mx-auto" />
      </div>
    </div>
  );
};

export default Profile;