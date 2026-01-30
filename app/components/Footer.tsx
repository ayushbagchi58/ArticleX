export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">

       
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

         
          <div className="text-center md:text-left">
            <p className="text-xl font-extrabold tracking-tight text-indigo-600">
             ArticleX
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Fast, SEO-optimized tech articles built with Next.js
            </p>
          </div>

        
          <nav aria-label="Footer navigation">
            <ul className="flex gap-6 text-sm font-medium text-gray-600">
              <li>
                <a
                  href="#articles"
                  className="hover:text-indigo-600 transition"
                >
                  Articles
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ayushbagchi58"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-600 transition"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-600 transition"
                >
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>

       
        <div className="my-8 h-px bg-gray-200" />

     
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">

          <span>
            © {new Date().getFullYear()} ArticleX. All rights reserved.
          </span>

          <span>
            Built with Next.js • TypeScript • Tailwind CSS
          </span>

        </div>
      </div>
    </footer>
  );
}
