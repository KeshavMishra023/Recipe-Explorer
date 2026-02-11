"use client";

import Link from "next/link";
import { Recipe } from "@/types/recipe";
import { useCart } from "@/context/CartContext";
import { useFavourite } from "@/context/FavouriteContext";
import { Heart, ShoppingCart, Clock, Users, Tag } from "lucide-react";
import Button from "../ui/Button";

interface Props {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: Props) {
  const { addToCart } = useCart();
  const { favourites, toggleFavourite } = useFavourite();

  const isFav = favourites.some((f) => f.id === recipe.id);

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-4 flex flex-col">
      
      <Link href={`/recipe/${recipe.id}`} className="overflow-hidden rounded-lg">
        <img
          src={recipe.image} 
          alt={recipe.name}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
      </Link>
      <Link href={`/recipe/${recipe.id}`} className="mt-3">
        <h2 className="text-lg font-semibold text-gray-800 hover:text-emerald-600 transition-colors">
          {recipe.name}
        </h2>
      </Link>
      <div className="flex flex-wrap gap-2 mt-2">
        {recipe.tags?.length ? (
          recipe.tags.map((tag: string) => (
            <div
              key={tag}
              className="flex items-center gap-1 text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </div>
          ))
        ) : (
          <span className="text-xs text-gray-400">No tags</span>
        )}
      </div>
      <div className="mt-2 flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{recipe.prepTimeMinutes + recipe.cookTimeMinutes} mins</span>
        </div>
        <div className="flex items-center gap-1">
          <Users className="w-4 h-4" />
          <span>{recipe.servings}</span>
        </div>
      </div>
      <div className="mt-4 flex flex-end items-center justify-between">
        <Heart
          className={`w-6 h-6 cursor-pointer transition-colors duration-300 ${
            isFav ? "text-red-500" : "text-gray-400 hover:text-red-500"
          }`}
          fill={isFav ? "red" : "#f5f5f5"}
          onClick={() => toggleFavourite(recipe)}
        />
        <Button
          onClick={() => addToCart(recipe)}
          icon={<ShoppingCart className="w-4 h-4" />}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
