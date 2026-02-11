
"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useFavourite } from "@/context/FavouriteContext";
import { Heart, ShoppingCart } from "lucide-react";

export default function Header() {
  const { cart } = useCart();
  const { favourites } = useFavourite();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-375 mx-auto flex items-center justify-between px-6 py-3">

        <Link
          href="/"
          className="text-2xl font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
        >
          Recipe Explorer
        </Link>
        <div className="flex items-center gap-6">

          {/* Favourites */}
          <Link href="/favourites" className="relative">
            <Heart
              className="w-6 h-6 cursor-pointer transition-colors duration-300"
              stroke={favourites.length > 0 ? "red" : "gray"}  
              fill={favourites.length > 0 ? "red" : "#f5f5f5"}
            />
            {favourites.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
                {favourites.length}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link href="/cart" className="relative">
            <ShoppingCart
              className="w-6 h-6 cursor-pointer transition-colors duration-300 text-gray-600 hover:text-emerald-600"
            />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>

        </div>
      </div>
    </header>
  );
}
