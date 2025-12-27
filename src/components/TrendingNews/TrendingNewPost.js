"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";

function makeSlug(title = "") {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // replace spaces & symbols with -
    .replace(/^-+|-+$/g, ""); // trim starting/ending -
}

export default function TrendingNewPost({ dark }) {
  const [techPosts, setTechPosts] = useState([]);

  useEffect(() => {
    const fetchTechPosts = async () => {
      try {
        const res = await axios.get(
          "https://coral-rail-888634.hostingersite.com/blog"
        );

        if (res.data.status) {
          const allBlogs = res.data.data;

          // ⭐ FILTER ONLY TECHNOLOGY POSTS
          let tech = allBlogs.filter(
            (b) => b.category?.toLowerCase() === "technology"
          );

          // ⭐ SORT BY LATEST DATE
          tech = tech.sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at)
          );

          // ⭐ TAKE ONLY FIRST 6
          tech = tech.slice(0, 6);

          setTechPosts(tech);
        }
      } catch (err) {
        console.error("Error loading Technology blogs:", err);
      }
    };

    fetchTechPosts();
  }, []);

  // Split into left 3 + right 3
  const leftPosts = techPosts.slice(0, 3);
  const rightPosts = techPosts.slice(3, 6);

  return (
    <div className="row">
      {/* LEFT COLUMN */}
      <div className="col-lg-6 col-md-6">
        <div
          className={`trending-news-post-items ${
            dark ? "trending-news-post-items-dark" : ""
          }`}
        >
          {leftPosts.map((item, i) => (
            <div
              className={`gallery_item ${dark ? "gallery_item_dark" : ""}`}
              key={i}
            >
              {/* THUMBNAIL 100x77 WITH SKELETON */}
              <div className="gallery_item_thumb">
                {item.img ? (
                  <img
                    src={item.img}
                    alt={item.title}
                    width={100}
                    height={77}
                    style={{
                      width: "100px",
                      height: "77px",
                      objectFit: "cover",
                      borderRadius: "5px",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: "100px",
                      height: "77px",
                      background: "#e0e0e0",
                      borderRadius: "5px",
                      animation: "pulse 1.3s ease-in-out infinite",
                    }}
                  />
                )}

                <div className="icon">
                  <i className="fas fa-bolt"></i>
                </div>
              </div>

              {/* CONTENT */}
              <div className="gallery_item_content">
                <div className="post-meta">
                  <div className="meta-categories">
                    <Link href={`/blogs/${item.id}/${makeSlug(item.title)}`}>
                      {item.category}
                    </Link>
                  </div>
                  <div className="meta-date">
                    <span>{new Date(item.created_at).toDateString()}</span>
                  </div>
                </div>

                <h4 className="title">
                  <Link href={`/blogs/${item.id}/${makeSlug(item.title)}`}>
                    {item.title}
                  </Link>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="col-lg-6 col-md-6">
        <div
          className={`trending-news-post-items ${
            dark ? "trending-news-post-items-dark" : ""
          }`}
        >
          {rightPosts.map((item, i) => (
            <div
              className={`gallery_item ${dark ? "gallery_item_dark" : ""}`}
              key={i}
            >
              {/* THUMBNAIL 100x77 WITH SKELETON */}
              <div className="gallery_item_thumb">
                {item.img ? (
                  <img
                    src={item.img}
                    alt={item.title}
                    width={100}
                    height={77}
                    style={{
                      width: "100px",
                      height: "77px",
                      objectFit: "cover",
                      borderRadius: "5px",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: "100px",
                      height: "77px",
                      background: "#e0e0e0",
                      borderRadius: "5px",
                      animation: "pulse 1.3s ease-in-out infinite",
                    }}
                  />
                )}

                <div className="icon">
                  <i className="fas fa-bolt"></i>
                </div>
              </div>

              {/* CONTENT */}
              <div className="gallery_item_content">
                <div className="post-meta">
                  <div className="meta-categories">
                    <Link href={`/blogs/${item.id}/${makeSlug(item.title)}`}>
                      {item.category}
                    </Link>
                  </div>
                  <div className="meta-date">
                    <span>{new Date(item.created_at).toDateString()}</span>
                  </div>
                </div>

                <h4 className="title">
                  <Link href={`/blogs/${item.id}/${makeSlug(item.title)}`}>
                    {item.title}
                  </Link>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SKELETON ANIMATION */}
      <style>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.6; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
