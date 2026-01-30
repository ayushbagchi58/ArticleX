export default function CategoryFilter({
  categories,
  active,
  onChange,
}: {
  categories: string[];
  active: string;
  onChange: (c: string) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      
      {categories.map((cat) => {
        const isActive = cat === active;

        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`
              px-4 py-2 rounded-full text-sm font-medium
              transition
              ${
                isActive
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }
              focus:outline-none focus:ring-2 focus:ring-indigo-300
            `}
            aria-pressed={isActive}
          >
            {cat}
          </button>
        );
      })}

      {active !== "All" && (
        <button
          onClick={() => onChange("All")}
          className="
            ml-2 text-sm text-red-500 hover:text-red-600 underline
          "
        >
          Clear
        </button>
      )}
    </div>
  );
}
