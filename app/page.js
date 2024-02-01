'use client'
import HomePage from "@/components/Homepage/HomePage";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(true)
  return (
    <main className="flex">
      <Navbar
        open={open}
        setOpen={setOpen}
      />

      <HomePage
        open={open}
      />
    </main>
  );
}
