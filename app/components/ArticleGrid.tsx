"use client";

import { useState, useEffect } from "react";

import { BlogPost } from "../lib/types";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import ArticleCard from "./ArticleCard";
import ArticleSkeleton from "./ArticleSkeleton";

export default function ArticleGrid({ blogs }: { blogs: BlogPost[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  const categories = ["All", ...new Set(blogs.map(b => b.category))];

  useEffect(() => {
     if (blogs.length > 0) {
    setTimeout(() => {
      setLoading(false);
    }, 1500); 
  }
  }, [blogs]);

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch =
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.description.toLowerCase().includes(search.toLowerCase()) ||
      blog.content_text.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || blog.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="mt-10">

      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">

        <div className="flex-1">
          <SearchBar value={search} onChange={setSearch} />
        </div>

        <CategoryFilter
          categories={categories}
          active={category}
          onChange={setCategory}
        />
      </div>

      <p className="mb-4 text-sm text-gray-600">
        {filteredBlogs.length} results found
      </p>

      {filteredBlogs.length === 0 && !loading && (
        <p>No results found.</p>
      )}

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <ArticleSkeleton key={i} />
            ))
          : filteredBlogs.map(blog => (
              <ArticleCard key={blog.id} blog={blog} />
            ))}

      </div>

    </section>
  );
}
