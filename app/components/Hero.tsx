import React from "react";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="
        relative w-full overflow-hidden
        text-white
      "
    >
     
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80')",
        }}
      />

     
      <div className="absolute inset-0 bg-black/60" />

     
      <div className="absolute inset-0 bg-gradient-to-br from-black-700/60 via-white-700/50 to-white-700/60" />

      
      <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
       
        <h1
          id="hero-heading"
          className="
            text-4xl sm:text-5xl lg:text-6xl
            font-extrabold tracking-tight
            mb-6
          "
        >
          Fast, Searchable Tech Blogs
          <span className="block text-yellow-300">
            Built with Next.js & TypeScript
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white/90 mb-10">
          Browse 10 curated tech articles fetched from a live API.
          Instantly search by title, description, or content, filter by
          category, and read full articles in a distraction-free modal
          experience.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#articles"
            className="
              inline-flex items-center justify-center
              rounded-lg bg-white text-indigo-700
              px-6 py-3 font-semibold
              hover:bg-gray-100 transition
              focus:outline-none focus:ring-2 focus:ring-white
            "
          >
            View All Articles
          </a>

          <span
            className="
              inline-flex items-center justify-center
              rounded-lg border border-white/30
              px-6 py-3 font-semibold
              text-white/90
            "
          >
            API-Driven · SEO-Optimized
          </span>
        </div>
      </div>
    </section>
  );
}
