"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error("Error caught by boundary:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong!</h2>
      <p className="text-gray-700 mb-6">{error.message}</p>
      <button
        onClick={() => reset()}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Try Again
      </button>
    </div>
  );
}
