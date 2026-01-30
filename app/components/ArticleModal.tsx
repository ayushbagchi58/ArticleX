"use client";

import { useEffect } from "react";
import { BlogPost } from "../lib/types";

export default function ArticleModal({
  blog,
  onClose,
}: {
  blog: BlogPost;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <>
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="article-title"
        onClick={(e) => e.stopPropagation()}
        className="
          relative w-full max-w-4xl max-h-[92vh]
          bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.25)]
          flex flex-col overflow-hidden
          animate-in fade-in zoom-in-95 duration-200
        "
      >

        <header className="sticky top-0 z-10 bg-gray-900 px-7 py-5 flex justify-between items-start">
          <h3
            id="article-title"
            className="text-white text-xl md:text-2xl font-semibold leading-snug max-w-[90%]"
          >
            {blog.title}
          </h3>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="
              text-white/80 hover:text-white
              bg-white/10 hover:bg-white/20
              rounded-full h-9 w-9 flex items-center justify-center
              transition focus:outline-none focus:ring-2 focus:ring-white/60
            "
          >
            ✕
          </button>
        </header>

      
        <div className="px-7 py-3 text-sm text-gray-500 bg-gray-50 border-b">
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            Published on{" "}
            {new Date(blog.created_at).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>

        
        <main className="px-7 py-6 overflow-y-auto">
          <article
            className="
              prose prose-indigo max-w-none
              prose-headings:scroll-mt-24
              prose-img:rounded-xl
              prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline
            "
            dangerouslySetInnerHTML={{ __html: blog.content_html }}
          />
        </main>

      
        <footer className="border-t px-7 py-4 text-sm text-gray-500 flex justify-between items-center">
          <span>Thanks for reading ✨</span>
          <button
            onClick={onClose}
            className="
              text-indigo-600 hover:text-indigo-800
              font-medium transition
            "
          >
            Close
          </button>
        </footer>
      </div>
    </div>
    </>
  );
}
