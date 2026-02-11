import { JSX } from "react";
import Image from "next/image";

export default function NotFound(): JSX.Element {
  return (
    <div className="flex items-center justify-center md:mt-8 mt-4 lg:mt-10">
      <div className="text-center p-6 bg-white rounded-2xl shadow-2xl max-w-md">
        <div className="mb-6">
          <Image
            src="/404_page_cover.jpg"
            alt="Page not found"
            width={350}
            height={300}
            className="mx-auto"
          />
        </div>

        <h1 className="text-4xl font-bold text-gray-800 mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-6">
          Oops! The recipe you are looking for does not exist.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-2 bg-linear-to-r from-emerald-600 to-emerald-400 text-white font-semibold rounded-lg shadow-md hover:shadow-xl transition"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}
