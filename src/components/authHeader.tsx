"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation"; // Correct import for App Router

export default function AuthHeader() {
  const router = useRouter(); // App Router's useRouter

  return (
    <div>
      <button
        onClick={() => router.back()}
        className="flex size-9 !rounded-100 bg-background-200 justify-center items-center mx-4"
      >
        <ArrowLeft className="size-3 text-icons-800" />
      </button>
    </div>
  );
}
