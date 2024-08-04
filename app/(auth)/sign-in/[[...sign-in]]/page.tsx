import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const SignInPage = () => {
  return (
    <main className="auth-page py-20">
      <div className="min-h-screen bg-gray-100">
        {/* Hero Section */}
        <header className="bg-dark-300 text-white py-20">
          <div className="container lg:max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-bold">Welcome to LiveDocs</h1>
            <p className="mt-4 text-xl">
              Real-Time Collaborative Document Editing
            </p>
            <p className="mt-2 text-lg">
              Experience seamless and real-time collaboration with our Google
              Docs clone, powered by Next.js, Liveblocks, and TailwindCSS.
            </p>
            <div className="container mx-auto  mt-8 justify-center text-center flex">
              <SignIn />
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-20 bg-dark-200">
          <div className="container lg:max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Real-Time Collaboration
                </h3>
                <p>
                  Multiple users can edit documents simultaneously with changes
                  reflected instantly.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  User-Friendly Interface
                </h3>
                <p>
                  Experience simplicity and ease of use with Next.js and
                  TailwindCSS.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Secure and Reliable
                </h3>
                <p>
                  We prioritize your datas security and provide a reliable
                  editing platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-dark-200 py-20">
          <div className="containe lg:max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Create a Document
                </h3>
                <p>Easily create a new document to start working on.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Invite Collaborators
                </h3>
                <p>Share the document with others to start collaborating.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Edit and Save</h3>
                <p>Edit in real-time with auto-save functionality.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Export and Share</h3>
                <p>
                  Export documents in various formats and share them easily.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Screenshots or Demo Video Section */}
        <section className="py-20">
          <div className="container lg:max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10">Screenshots/Demo</h2>
            <div className="flex justify-center">
              {/* Replace with actual screenshots or demo video */}
              <Image
                width={400}
                height={200}
                src="/Liveddocs.png"
                alt="App Screenshot"
                className=" rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-20 bg-dark-500">
          <div className="container lg:max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10">About Us</h2>
            <p>
              LiveDocs was developed by a team of passionate developers with a
              vision to create a powerful, real-time collaborative document
              editing tool. Built with Next.js, Liveblocks, and TailwindCSS,
              LiveDocs offers a seamless and secure platform for all your
              document editing needs.
            </p>
          </div>
        </section>

        {/* Sign In Section */}
      </div>
    </main>
  );
};

export default SignInPage;
