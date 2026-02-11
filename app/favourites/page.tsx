"use client";

import { useFavourite } from "@/context/FavouriteContext";
import RecipeCard from "@/components/recipe/RecipeCard";
import InfoCard from "@/components/ui/InfoCard";

export default function FavouritePage() {
  const { favourites } = useFavourite();

  return (
    <div className=" bg-gray-50">
      {favourites.length === 0 && (
        <InfoCard
          imageSrc="/wishlist_empty_image.jpg"
          title="Your Wishlist is Empty"
          subtitle="Save your favorite recipes here"
          description="You haven't added any recipes to your wishlist yet. Browse delicious recipes and tap the ❤️ icon to save your favorites for easy access later!"
          buttonText="Explore Recipes"
          buttonHref="/"
        />
      )}

      <div className="max-w-375 mx-auto p-6 grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favourites.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
