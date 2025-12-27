"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

function makeSlug(title = "") {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // replace spaces & symbols with -
    .replace(/^-+|-+$/g, ""); // trim starting/ending -
}

export default function TrendingNewsWidget() {
  const [techBlogs, setTechBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTechBlogs = async () => {
      try {
        const res = await axios.get(
          "https://coral-rail-888634.hostingersite.com/blog"
        );

        if (res.data.status) {
          const allBlogs = res.data.data;

          // ⭐ Filter Technology category
          const filtered = allBlogs
            .filter(
              (b) =>
                b.category?.toLowerCase() === "technology" ||
                b.sub_category?.toLowerCase() === "technology"
            )
            // ⭐ Sort by latest first
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .slice(0, 3); // ⭐ Top 3 latest

          setTechBlogs(filtered);
        }
      } catch (err) {
        console.error("Error fetching tech blogs:", err);
      }

      setLoading(false);
    };

    loadTechBlogs();
  }, []);

  return (
    <div className="trending-news-post-items">
      {/* ⭐ Loading Skeletons */}
      {loading &&
        [1, 2, 3].map((i) => (
          <div className="gallery_item" key={i}>
            <div className="gallery_item_thumb">
              <div
                style={{
                  width: "100%",
                  height: "80px",
                  background: "#e0e0e0",
                  borderRadius: "8px",
                }}
              ></div>
            </div>
            <div className="gallery_item_content">
              <div
                style={{
                  width: "60%",
                  height: "12px",
                  background: "#e0e0e0",
                  marginBottom: "8px",
                  borderRadius: "4px",
                }}
              ></div>
              <div
                style={{
                  width: "80%",
                  height: "12px",
                  background: "#e0e0e0",
                  borderRadius: "4px",
                }}
              ></div>
            </div>
          </div>
        ))}

      {/* ⭐ Show Technology Blogs */}
      {!loading &&
        techBlogs.map((blog) => (
          <div className="gallery_item" key={blog.id}>
            <div className="gallery_item_thumb">
              <img
                src={blog.img || "/images/no-image.jpg"}
                alt={blog.title}
                style={{
                  width: "100px",
                  height: "75px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <div className="icon">
                <i className="fas fa-bolt"></i>
              </div>
            </div>

            <div className="gallery_item_content">
              <div className="post-meta">
                <div className="meta-categories">
                  <Link href={`/blogs/${blog.id}/${makeSlug(blog.title)}`}>
                    {blog.category}
                  </Link>
                </div>
                <div className="meta-date">
                  <span>{new Date(blog.created_at).toDateString()}</span>
                </div>
              </div>

              <h4 className="title">
                <Link href={`/blogs/${blog.id}/${makeSlug(blog.title)}`}>
                  {blog.title}
                </Link>
              </h4>
            </div>
          </div>
        ))}
    </div>
  );
}
