"use client";

import { useState } from "react";
import Image from "next/image";

import { BlogPost } from "../lib/types";
import { formatDate } from "../lib/utils";
import ArticleModal from "./ArticleModal";

export default function ArticleCard({ blog }: { blog: BlogPost }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => e.key === "Enter" && setOpen(true)}
        className="border rounded-lg p-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <Image
          src={blog.photo_url}
          alt={`Cover image for ${blog.title}`}
          width={400}
          height={250}
          sizes="(max-width: 768px) 100vw,
         (max-width: 1024px) 50vw,
         33vw"
          loading="lazy"
          className="rounded"
        />
        <h2 className="mt-3 font-semibold">{blog.title}</h2>
        <time className="text-sm text-gray-500">
          {formatDate(blog.created_at)}
        </time>
        <p className="mt-2 text-sm">{blog.description}</p>
      </article>

      {open && <ArticleModal blog={blog} onClose={() => setOpen(false)} />}
    </>
  );
}
