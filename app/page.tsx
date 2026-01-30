import ArticleGrid from "./components/ArticleGrid";
import Hero from "./components/Hero";
import { fetchBlogs } from "./lib/api/blogApi";

export default async function Home() {
  let blogs = [];

  try {
    blogs = await fetchBlogs();
  } catch (error) {
    return (
      <main className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-semibold">Something went wrong</h1>
        <p className="text-gray-600 mt-3">
          Failed to load blog articles. Please try again later.
        </p>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4">

      <Hero />

      <section id="articles" className="py-12 text-center">
        <h2 className="text-4xl font-bold">Latest Blog Articles</h2>
        <p className="mt-3 text-gray-600">
          Search, filter and read curated blogs
        </p>
      </section>

      <ArticleGrid blogs={blogs} />
    </main>
  );
}
