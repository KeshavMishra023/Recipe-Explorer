const BASE_URL = "https://dummyjson.com";

export const getRecipes = async (limit = 20, skip = 0) => {
  const res = await fetch(
    `${BASE_URL}/recipes?limit=${limit}&skip=${skip}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch recipes");
  }

  return res.json();
};

export const searchRecipes = async (query: string) => {
  const res = await fetch(
    `${BASE_URL}/recipes/search?q=${query}`
  );

  if (!res.ok) {
    throw new Error("Search failed");
  }

  return res.json();
};

export const getRecipeById = async (id: string) => {
  const res = await fetch(`${BASE_URL}/recipes/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch recipe details");
  }

  return res.json();
};
