import Image from "next/image";
import Navbar from "../components/Navbar";

export default function V3Page() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>V3 Demo</h1>
      </main>
    </>
  );
}
