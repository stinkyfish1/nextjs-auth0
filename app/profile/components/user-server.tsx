import { getSession } from "@auth0/nextjs-auth0";

const ProfileServer = async () => {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    return null;
  }
  return user ? (
    <div className="text-center">
      <img src={user.picture} alt={user.name} className="rounded-full w-24 h-24 mx-auto" />
      <h2 className="text-2xl font-bold mt-4">{user.name}</h2>
      <p className="text-lg">{user.email}</p>
    </div>
  ) : (
    <div>No user logged in</div>
  );
};

export default ProfileServer;