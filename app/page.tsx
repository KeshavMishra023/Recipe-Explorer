"use client";

import { useEffect, useState } from "react";
import { getRecipes, searchRecipes } from "@/lib/api";
import RecipeCard from "@/components/recipe/RecipeCard";
import { RecipeCardSkeleton } from "@/components/ui/RecipeCardSkeleton";
import Pagination from "@/components/recipe/Pagination";
import { useDebounce } from "@/hooks/useDebounce";
import { Search } from "lucide-react";

export default function Home() {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const limit = 20;

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        if (debouncedSearch) {
          const data = await searchRecipes(debouncedSearch);
          setRecipes(data.recipes);
          setTotal(data.total || data.recipes.length);
        } else {
          const skip = (page - 1) * limit;
          const data = await getRecipes(limit, skip);
          setRecipes(data.recipes);
          setTotal(data.total);
        }
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, debouncedSearch]);

  return (
    <div className="bg-gray-50">
      <div className="max-w-375 mx-auto p-4">
        <div className="relative mb-6 w-full mx-auto">
          <input
            type="text"
            placeholder="Search recipes..."
            className="w-full rounded-lg px-4 py-2 pr-12 shadow-sm border-gray-200 border outline-0"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={() => setPage(1)}
            className="absolute right-0 cursor-pointer top-1/2 -translate-y-1/2 bg-emerald-600 text-white px-3.5 py-2.25 rounded-lg hover:bg-emerald-700 transition"
          >
            <Search />
          </button>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading
            ? Array.from({ length: 8 }).map((_, index) => (
                <RecipeCardSkeleton key={index} />
              ))
            : recipes.map((recipe: any) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
        </div>

        {!search && (
          <Pagination
            page={page}
            setPage={setPage}
            total={total}
            limit={limit}
          />
        )}
      </div>
    </div>
  );
}
