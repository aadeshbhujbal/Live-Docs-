import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const SignInPage = () => {
  return (
    <main className="auth-page py-20">
      <div className="min-h-screen bg-gray-900 text-gray-300">
        {/* Hero Section */}
        <header className="bg-gray-800 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold">Welcome to LiveDocs</h1>
            <p className="mt-4 text-xl">
              Real-Time Collaborative Document Editing
            </p>
            <p className="mt-2 text-lg">
              Experience seamless and real-time collaboration with our Google
              Docs clone, powered by Next.js, Liveblocks, and TailwindCSS.
            </p>
            <div className="mt-8 flex justify-center">
              <SignIn />
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10 text-white">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Authentication
                </h3>
                <p>
                  User authentication using GitHub through NextAuth, ensuring
                  secure sign-in/out and session management.
                </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Collaborative Text Editor
                </h3>
                <p>
                  Multiple users can edit the same document simultaneously with
                  real-time updates.
                </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Documents Management
                </h3>
                <ul className="list-disc list-inside">
                  <li>Create, delete, and share documents</li>
                  <li>
                    Display all documents with search and sorting
                    functionalities
                  </li>
                </ul>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Comments
                </h3>
                <p>
                  Users can add inline and general comments, with threading for
                  discussions.
                </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Active Collaborators
                </h3>
                <p>
                  Show active collaborators with real-time presence indicators.
                </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Notifications
                </h3>
                <p>
                  Notify users of document shares, new comments, and
                  collaborator activities.
                </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Responsive Design
                </h3>
                <p>The application is responsive across all devices.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-gray-800 py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10 text-white">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Create a Document
                </h3>
                <p>Easily create a new document to start working on.</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Invite Collaborators
                </h3>
                <p>Share the document with others to start collaborating.</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Edit and Save
                </h3>
                <p>Edit in real-time with auto-save functionality.</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Export and Share
                </h3>
                <p>
                  Export documents in various formats and share them easily.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Screenshots or Demo Video Section */}
        <section className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10 text-white">
              Screenshots/Demo
            </h2>
            <div className="flex justify-center">
              {/* Replace with actual screenshots or demo video */}
              <Image
                width={400}
                height={200}
                src="/Liveddocs.png"
                alt="App Screenshot"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10 text-white">About Us</h2>
            <p>
              LiveDocs was developed by a team of passionate developers with a
              vision to create a powerful, real-time collaborative document
              editing tool. Built with Next.js, Liveblocks, and TailwindCSS,
              LiveDocs offers a seamless and secure platform for all your
              document editing needs.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SignInPage;
