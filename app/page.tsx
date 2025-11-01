"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-b from-white to-gray-100">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Organize your tasks effortlessly
      </h1>
      <Link href="/dashboard">
        <Button className="px-6 py-3 text-lg font-medium rounded-xl shadow-md hover:shadow-lg transition">
          Dashboard
        </Button>
      </Link>
    </main>
  );
}
