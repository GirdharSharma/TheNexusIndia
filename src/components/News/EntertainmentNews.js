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

export default function EntertainmentNews({ dark }) {
  const [entPosts, setEntPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEntertainment = async () => {
      try {
        const res = await axios.get(
          "https://coral-rail-888634.hostingersite.com/blog"
        );

        if (res.data.status) {
          const allBlogs = res.data.data;

          // ⭐ 1. Filter only category = Entertainment
          let ent = allBlogs.filter(
            (b) => b.category?.toLowerCase() === "entertainment"
          );

          // ⭐ 2. Sort newest first
          ent = ent.sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at)
          );

          // ⭐ 3. Take only first 4 posts
          ent = ent.slice(0, 4);

          setEntPosts(ent);
        }
      } catch (err) {
        console.error("Entertainment fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    loadEntertainment();
  }, []);

  return (
    <div className="post-entertainment">
      <div className={`section-title ${dark ? "section-title-2" : ""}`}>
        <h3 className="title">Entertainment News</h3>
      </div>

      {/* ⭐ FULL SECTION SKELETON WHILE LOADING */}
      {loading ? (
        <div className="row">
          {[1, 2, 3, 4].map((i) => (
            <div className="col-lg-6 col-md-6" key={i}>
              <div
                className={`trending-news-item ${
                  dark ? "trending-news-item-dark" : ""
                } mb-30`}
              >
                <div className="trending-news-thumb">
                  <div
                    style={{
                      width: "100%",
                      height: "220px",
                      background: "#e0e0e0",
                      borderRadius: "8px",
                      animation: "pulse 1.4s ease-in-out infinite",
                    }}
                  ></div>

                  <div className="circle-bar">
                    <div className="first circle">
                      <strong></strong>
                    </div>
                  </div>
                </div>

                <div className="trending-news-content">
                  <div
                    style={{
                      width: "40%",
                      height: "15px",
                      background: "#e0e0e0",
                      marginBottom: "10px",
                      animation: "pulse 1.4s ease-in-out infinite",
                    }}
                  ></div>

                  <div
                    style={{
                      width: "80%",
                      height: "18px",
                      background: "#e0e0e0",
                      marginBottom: "10px",
                      animation: "pulse 1.4s ease-in-out infinite",
                    }}
                  ></div>

                  <div
                    style={{
                      width: "100%",
                      height: "40px",
                      background: "#e0e0e0",
                      animation: "pulse 1.4s ease-in-out infinite",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // ⭐ SHOW REAL DATA WHEN LOADED
        <div className="row">
          {entPosts.map((item, i) => (
            <div className="col-lg-6 col-md-6" key={i}>
              <div
                className={`trending-news-item ${
                  dark ? "trending-news-item-dark" : ""
                } mb-30`}
              >
                <div className="trending-news-thumb">
                  {/* ⭐ IMAGE WITH TRENDING-CAROUSEL STYLE AUTO SIZE */}

                  {item.img ? (
                    <div
                      style={{
                        width: "100%",
                        height: "180px",
                        overflow: "hidden",
                        borderRadius: "10px",
                      }}
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                      />
                    </div>
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        height: "220px",
                        background: "#e0e0e0",
                        borderRadius: "8px",
                        animation: "pulse 1.4s ease-in-out infinite",
                      }}
                    ></div>
                  )}

                  <div className="circle-bar">
                    <div className="first circle">
                      <strong></strong>
                    </div>
                  </div>
                </div>

                <div className="trending-news-content">
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

                  <h3 className="title">
                    <Link href={`/blogs/${item.id}/${makeSlug(item.title)}`}>
                      {item.title}
                    </Link>
                  </h3>

                  <p className="text">
                    {item.description
                      ? item.description.slice(0, 120) + "..."
                      : ""}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ⭐ Pulse animation */}
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
