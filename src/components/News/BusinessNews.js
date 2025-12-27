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

export default function BusinessNews({ dark }) {
  const [businessBlogs, setBusinessBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBusinessNews = async () => {
      try {
        const res = await axios.get(
          "https://coral-rail-888634.hostingersite.com/blog"
        );

        if (res.data.status) {
          const allBlogs = res.data.data;

          // ⭐ Filter only category = "Business"
          const business = allBlogs.filter(
            (b) => b.category?.toLowerCase() === "business"
          );

          // ⭐ Sort by latest uploaded (created_at)
          const sorted = business
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .slice(0, 4); // ⭐ Take only top 4

          setBusinessBlogs(sorted);
        }
      } catch (error) {
        console.error("Error loading business news:", error);
      }

      setLoading(false);
    };

    loadBusinessNews();
  }, []);

  return (
    <div className="business-news-post pt-40">
      <div className="section-title d-flex justify-content-between align-items-center">
        <h3 className="title">Business News</h3>
      </div>

      <div className="business-post">
        {/* ⭐ Skeleton Loader */}
        {loading &&
          [1, 2, 3, 4].map((i) => (
            <div key={i} className="business-post-item mb-40">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div
                    style={{
                      width: "100%",
                      height: "200px",
                      background: "#e0e0e0",
                      borderRadius: "8px",
                    }}
                  ></div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div style={{ marginTop: "20px" }}>
                    <div
                      style={{
                        width: "60%",
                        height: "16px",
                        background: "#e0e0e0",
                        marginBottom: "10px",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "90%",
                        height: "14px",
                        background: "#e0e0e0",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        {/* ⭐ REAL BUSINESS DATA */}
        {!loading &&
          businessBlogs.map((item) => (
            <div
              key={item.id}
              className={`business-post-item mb-40 ${
                dark ? "business-post-item-dark" : ""
              }`}
            >
              <div className="row">
                {/* IMAGE */}
                <div className="col-lg-6 col-md-6">
                  <div className="business-post-thumb">
                    <img
                      src={item.img || "/images/no-image.jpg"}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "200px", // ⭐ FIXED HEIGHT
                        objectFit: "cover", // ⭐ CROPS NICELY (no UI break)
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="col-lg-6 col-md-6">
                  <div className="trending-news-item">
                    <div className="trending-news-content">
                      <div className="post-meta">
                        <div className="meta-categories">
                          <Link
                            href={`/blogs/${item.id}/${makeSlug(item.title)}`}
                          >
                            {item.category}
                          </Link>
                        </div>
                        <div className="meta-date">
                          <span>
                            {new Date(item.created_at).toDateString()}
                          </span>
                        </div>
                      </div>

                      <h3 className="title">
                        <Link
                          href={`/blogs/${item.id}/${makeSlug(item.title)}`}
                        >
                          {item.title}
                        </Link>
                      </h3>

                      <p className="text">
                        {item.description?.slice(0, 120)}...
                      </p>

                      <Link href={`/blogs/${item.id}/${makeSlug(item.title)}`}>
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
