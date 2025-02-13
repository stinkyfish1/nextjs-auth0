"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

const ProfileClient = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return user ? (
    <div className="text-center">
      <img src={user.picture ?? ''} alt={user.name ?? 'User'} className="rounded-full w-24 h-24 mx-auto" />
      <h2 className="text-2xl font-bold mt-4">{user.name}</h2>
      <p className="text-lg">{user.email}</p>
    </div>
  ) : (
    <div>No user logged in</div>
  );
};

export default ProfileClient;