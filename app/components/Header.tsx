export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <nav
        className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between"
        aria-label="Main navigation"
      >
        
        <div className="flex items-center gap-2">
          <span className="text-xl font-extrabold tracking-tight text-indigo-600">
            ArticleX
          </span>
        </div>

       
        <ul className="flex items-center gap-6 text-sm font-medium text-gray-700">
          <li>
            <a
              href="#articles"
              className="hover:text-indigo-600 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
            >
              Articles
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ayushbagchi58"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
            >
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
