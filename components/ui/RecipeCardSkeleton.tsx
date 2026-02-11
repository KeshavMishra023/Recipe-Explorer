export const RecipeCardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 animate-pulse">
      <div className="w-full h-48 bg-gray-200 rounded-lg" />

      <div className="mt-4 h-4 bg-gray-200 rounded w-3/4" />

      <div className="mt-4 flex justify-between items-center">
        <div className="h-4 w-6 bg-gray-200 rounded" />
        <div className="h-8 w-20 bg-gray-200 rounded-lg" />
      </div>
    </div>
  );
}

export const  RecipeDetailsSkeleton = () => {
  return (
    <div className="bg-gray-50 p-6 animate-pulse">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-sm flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2 h-72 bg-gray-300 rounded-lg"></div>
        <div className="flex-1 flex flex-col gap-4">
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          <div className="flex flex-wrap gap-2 mt-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-5 w-16 bg-gray-200 rounded-full"></div>
            ))}
          </div>
          <div className="h-4 bg-gray-300 rounded w-full mt-4"></div>
          <div className="flex gap-4 mt-6">
            <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
            <div className="h-10 w-32 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
