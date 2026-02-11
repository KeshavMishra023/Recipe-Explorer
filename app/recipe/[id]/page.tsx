"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getRecipeById } from "@/lib/api";
import { useCart } from "@/context/CartContext";
import { useFavourite } from "@/context/FavouriteContext";
import { Heart, ShoppingCart, Clock, Users, Tag } from "lucide-react";
import Button from "@/components/ui/Button";
import { RecipeDetailsSkeleton } from "@/components/ui/RecipeCardSkeleton";
export default function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const { favourites, toggleFavourite } = useFavourite();
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        if (typeof id === "string") {
          const data = await getRecipeById(id);
          setRecipe(data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipe();
  }, [id]);

  if (loading) return <RecipeDetailsSkeleton />;
  if (!recipe) return <div className="p-4 text-center">Recipe not found</div>;

  const isFav = favourites.some((f: any) => f.id === recipe.id);

  return (
    <div className=" bg-gray-50 p-6">
      <div className="max-w-375 mx-auto bg-white p-4 rounded-xl shadow-sm flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-72 object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-2xl font-semibold text-gray-800">{recipe.name}</h1>
          <div className="flex gap-6 text-gray-600 mt-1">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" /> {recipe.prepTimeMinutes + recipe.cookTimeMinutes} mins
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" /> {recipe.servings} servings
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-2">
            {recipe.tags?.map((tag: string) => (
              <div key={tag} className="flex items-center gap-1 text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
                <Tag className="w-3 h-3" /> {tag}
              </div>
            ))}
          </div>
          <div className="mt-4">
            <h2 className="font-medium text-gray-800">Ingredients:</h2>
            <ul className="list-disc ml-6 text-gray-600 mt-1">
              {recipe.ingredients.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4 mt-6">
            <Heart
              className={`w-6 h-6 cursor-pointer transition-colors duration-300 ${
                isFav ? "text-red-500" : "text-gray-400 hover:text-red-500"
              }`}
              fill={isFav ? "red" : "#f5f5f5"}
              onClick={() => toggleFavourite(recipe)}
            />

            <Button
              icon={<ShoppingCart className="w-4 h-4" />}
              onClick={() => addToCart(recipe)}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
