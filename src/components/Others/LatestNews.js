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

export default function LatestNews() {
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadLatestBlogs = async () => {
      try {
        const res = await axios.get(
          "https://coral-rail-888634.hostingersite.com/blog"
        );

        if (res.data.status) {
          const allBlogs = res.data.data;

          // ⭐ Sort by latest uploaded (created_at)
          const sorted = allBlogs
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .slice(0, 3); // ⭐ Top 3

          setLatestBlogs(sorted);
        }
      } catch (error) {
        console.error("Error loading latest news:", error);
      }

      setLoading(false);
    };

    loadLatestBlogs();
  }, []);

  function htmlToText(html) {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  }

  return (
    <section className="latest-news-area">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h3 className="title">Our latest news</h3>
            </div>
          </div>
        </div>

        <div className="row">
          {/* ⭐ Skeleton loader */}
          {loading &&
            [1, 2, 3].map((i) => (
              <div className="col-lg-4" key={i}>
                <div className="trending-news-item mb-30">
                  <div className="trending-news-thumb">
                    <div
                      style={{
                        width: "100%",
                        height: "200px",
                        background: "#e0e0e0",
                        borderRadius: "8px",
                      }}
                    ></div>
                  </div>
                  <div className="trending-news-content mt-2">
                    <div
                      style={{
                        width: "50%",
                        height: "15px",
                        background: "#e0e0e0",
                        marginBottom: "8px",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "80%",
                        height: "14px",
                        background: "#e0e0e0",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}

          {/* ⭐ Latest 3 News */}
          {!loading &&
            latestBlogs.map((blog) => (
              <div className="col-lg-4" key={blog.id}>
                <div className="trending-news-item mb-30">
                  <div className="trending-news-thumb">
                    <img
                      src={blog.img || "/images/no-image.jpg"}
                      alt={blog.title}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  </div>

                  <div className="trending-news-content">
                    <div className="post-meta">
                      <div className="meta-categories">
                        <a>{blog.category}</a>
                      </div>
                      <div className="meta-date">
                        <span>{new Date(blog.created_at).toDateString()}</span>
                      </div>
                    </div>

                    <h3 className="title">
                      <Link href={`/blogs/${blog.id}/${makeSlug(blog.title)}`}>
                        {blog.title}
                      </Link>
                    </h3>

                    {/* <p className="text">{blog.description.slice(0, 120)}...</p> */}
                    <p className="text">
                      {htmlToText(blog.description).slice(0, 120)}...
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
