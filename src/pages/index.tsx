import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { SignInButton, UserButton, useUser, SignIn} from "@clerk/nextjs";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const  user = useUser()

  return (
          <>
          <Head>
          <meta name="description" content="Generated by create-t3-app" />
          <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className="flex min-h-screen flex-col items-center justify-center bg-black">




</main>
</>
);
};

export default Home;
