const Shimmer = () => {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-7 px-16 py-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array(12)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl bg-white p-3 shadow-sm"
          >
            <div className="h-44 w-full animate-pulse rounded-xl bg-gray-300"></div>

            <div className="mt-4 h-6 w-3/4 animate-pulse rounded bg-gray-300"></div>

            <div className="mt-3 h-4 w-full animate-pulse rounded bg-gray-300"></div>

            <div className="mt-2 h-4 w-2/3 animate-pulse rounded bg-gray-300"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
