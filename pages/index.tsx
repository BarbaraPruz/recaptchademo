import Image from "next/image";
import Navbar from "../components/Navbar";
import AboutDemo from "@/components/AboutDemo";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center p-24">
        <AboutDemo />
      </main>
    </>
  );
}
