"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Recipe } from "@/types/recipe";

interface FavouriteContextType {
  favourites: Recipe[];
  toggleFavourite: (recipe: Recipe) => void;
}

const FavouriteContext = createContext<FavouriteContextType | null>(null);

export const FavouriteProvider = ({ children }: { children: ReactNode }) => {
  const [favourites, setFavourites] = useState<Recipe[]>([]);

  const toggleFavourite = (recipe: Recipe) => {
    setFavourites((prev) => {
      const exists = prev.find((item) => item.id === recipe.id);
      if (exists) {
        return prev.filter((item) => item.id !== recipe.id);
      }
      return [...prev, recipe];
    });
  };

  return (
    <FavouriteContext.Provider value={{ favourites, toggleFavourite }}>
      {children}
    </FavouriteContext.Provider>
  );
};

export const useFavourite = () => {
  const context = useContext(FavouriteContext);
  if (!context)
    throw new Error("useFavourite must be used inside FavouriteProvider");
  return context;
};
