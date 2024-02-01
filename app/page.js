import HomePage from "@/components/Homepage/HomePage";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex">
      <Navbar />

      <HomePage />
    </main>
  );
}
