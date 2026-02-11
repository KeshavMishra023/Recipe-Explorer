"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-[#006646] to-[#00cc8c] text-white">
      <div className="max-w-375 mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold">Recipe Explorer</h2>
          <p className="mt-2 text-gray-100 text-sm text-wrap lg:w-125">
            Discover delicious recipes from around the world. Favourite the ones
            you love and save them for later. Shop ingredients easily and cook
            your meals with ease.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Quick Links</h3>
            <Link href="/" className="hover:underline text-sm">
              Home
            </Link>
            <Link href="/favourites" className="hover:underline text-sm">
              Favourites
            </Link>
            <Link href="/cart" className="hover:underline text-sm">
              Cart
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">About</h3>
            <Link href="#" className="hover:underline text-sm">
              About Us
            </Link>
            <Link href="#" className="hover:underline text-sm">
              Contact
            </Link>
            <Link href="#" className="hover:underline text-sm">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">Follow Us</h3>
          <div className="flex gap-3 mt-1">
            <Link href="#" className="hover:text-gray-200">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-gray-200">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-gray-200">
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 mt-6 pt-4 text-center text-sm text-white/80">
        © {new Date().getFullYear()} Recipe Explorer. All rights reserved.
      </div>
    </footer>
  );
}
