import React from "react";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div className="content-layout px-44 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mt-4">Welcome to the Home Page</h1>
        <p className="text-lg mt-4">This is a public page accessible to everyone.</p>
        <Link href="/auth-protected" className="text-blue-500 mt-4">
          Go to Protected Page
        </Link>
        <p className="text-lg mt-4">Or</p>
        <Link href="/profile" className="text-blue-500 mt-4">
          Go to Profile Page
        </Link>
        <img src="/full_stack_web_developer_salary-1.jpg" alt="man" />
      </div>
    </div>
  );
};

export default Home;