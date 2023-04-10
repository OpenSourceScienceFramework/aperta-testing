import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { SignIn, SignOut, useUser } from "@clerk/nextjs";
import { api } from "~/utils/api";
import { useState } from "react";

const Splash: NextPage = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <Head>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#020617] to-[#0f172a]">
        <div
          className="relative flex flex-col items-center justify-center h-60 w-80 text-white font-bold text-5xl"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <h1>WELCOME TO</h1>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 transition-colors hover: ease-out -out">
            APERTA
          </h1>
          <div
            className={`absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 transition duration-2000 ease-out hover:-translate-y-1 ${
              hovered ? "opacity-0" : "opacity-0"
            }`}
          />
          {hovered && <SignIn />}
        </div>
      </main>
    </>
  );
};

export default Splash;
