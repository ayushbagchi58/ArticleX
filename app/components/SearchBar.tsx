export default function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative w-full">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        🔍
      </span>

      <input
        type="text"
        placeholder="Search articles by title, content, or description..."
        className="
          w-full
          rounded-xl
          border
          border-gray-300
          bg-white
          py-3
          pl-11
          pr-4
          text-sm
          text-gray-800
          shadow-sm
          outline-none
          transition
          focus:border-indigo-600
          focus:ring-2
          focus:ring-indigo-200
        "
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search articles"
      />
    </div>
  );
}
