"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import classnames from "classnames";

function makeSlug(title = "") {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // replace spaces & symbols with -
    .replace(/^-+|-+$/g, ""); // trim starting/ending -
}

export default function NewsTabs({ dark }) {
  const [activeTab, setActiveTab] = useState("trendy");
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const res = await fetch("https://thenexusindia.in/blogs/blog");
        const data = await res.json();

        if (data.status) {
          setBlogs(data.data);
        }
      } catch (err) {
        console.error("Error loading blogs:", err);
      }

      setLoading(false);
    };

    loadBlogs();
  }, []);

  // FILTERING 🔥
  const trendyBlogs = blogs
    .filter((b) => b.sub_category?.toLowerCase() === "trending")
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 5);

  const latestBlogs = blogs
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 5);

  const popularBlogs = blogs
    .filter((b) => b.sub_category?.toLowerCase() === "most view")
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 5);

  const loadingArray = Array(5).fill(null);

  // FIXED IMAGE SIZE STYLE
  const imgBox = {
    width: "100px",
    height: "75px",
    overflow: "hidden",
    borderRadius: "6px",
    background: "#ddd",
  };

  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <>
      {/* TABS */}
      <ul className="nav nav-pills" id="pills-tab" role="tablist">
        {["trendy", "latest", "contact"].map((tab, index) => {
          const labels = ["TRENDY", "LATEST", "POPULAR"];
          return (
            <li className="nav-item" key={tab}>
              <a
                className={classnames("nav-link", {
                  active: activeTab === tab,
                })}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleTab(tab);
                }}
              >
                {labels[index]}
              </a>
            </li>
          );
        })}
      </ul>

      {/* TAB CONTENT */}
      <div className="tab-content" id="pills-tabContent">
        {/* TRENDY TAB */}
        <div
          className={classnames("tab-pane", "fade", "show", {
            active: activeTab === "trendy",
          })}
        >
          <div className="post_gallery_items">
            {(loading ? loadingArray : trendyBlogs).map((item, i) => (
              <div
                key={i}
                className={`gallery_item ${dark ? "gallery_item_dark" : ""}`}
              >
                <div className="gallery_item_thumb" style={imgBox}>
                  {item ? (
                    <img src={item.img} alt={item.title} style={imgStyle} />
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        background: "#eee",
                      }}
                    ></div>
                  )}
                </div>

                <div className="gallery_item_content">
                  {item ? (
                    <>
                      <div className="post-meta">
                        <div className="meta-categories">
                          <a>{item.category}</a>
                        </div>
                        <div className="meta-date">
                          <span>
                            {new Date(item.created_at).toDateString()}
                          </span>
                        </div>
                      </div>

                      <h4 className="title">
                        <Link
                          href={`/blogs/${item.id}/${makeSlug(item.title)}`}
                        >
                          {item.title}
                        </Link>
                      </h4>
                    </>
                  ) : (
                    <div
                      style={{
                        width: "80%",
                        height: "10px",
                        background: "#eee",
                        borderRadius: "4px",
                      }}
                    ></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LATEST TAB */}
        <div
          className={classnames("tab-pane", "fade", "show", {
            active: activeTab === "latest",
          })}
        >
          <div className="post_gallery_items">
            {(loading ? loadingArray : latestBlogs).map((item, i) => (
              <div
                key={i}
                className={`gallery_item ${dark ? "gallery_item_dark" : ""}`}
              >
                <div className="gallery_item_thumb" style={imgBox}>
                  {item ? (
                    <img src={item.img} alt={item.title} style={imgStyle} />
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        background: "#eee",
                      }}
                    ></div>
                  )}
                </div>

                <div className="gallery_item_content">
                  {item ? (
                    <>
                      <div className="post-meta">
                        <div className="meta-categories">
                          <a>{item.category}</a>
                        </div>
                        <div className="meta-date">
                          <span>
                            {new Date(item.created_at).toDateString()}
                          </span>
                        </div>
                      </div>

                      <h4 className="title">
                        <Link href={`/blogs/${item.id}`}>{item.title}</Link>
                      </h4>
                    </>
                  ) : (
                    <div
                      style={{
                        width: "80%",
                        height: "10px",
                        background: "#eee",
                        borderRadius: "4px",
                      }}
                    ></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* POPULAR TAB */}
        <div
          className={classnames("tab-pane", "fade", "show", {
            active: activeTab === "contact",
          })}
        >
          <div className="post_gallery_items">
            {(loading ? loadingArray : popularBlogs).map((item, i) => (
              <div
                key={i}
                className={`gallery_item ${dark ? "gallery_item_dark" : ""}`}
              >
                <div className="gallery_item_thumb" style={imgBox}>
                  {item ? (
                    <img src={item.img} alt={item.title} style={imgStyle} />
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        background: "#eee",
                      }}
                    ></div>
                  )}
                </div>

                <div className="gallery_item_content">
                  {item ? (
                    <>
                      <div className="post-meta">
                        <div className="meta-categories">
                          <a>{item.category}</a>
                        </div>
                        <div className="meta-date">
                          <span>
                            {new Date(item.created_at).toDateString()}
                          </span>
                        </div>
                      </div>

                      <h4 className="title">
                        <Link href={`/blogs/${item.id}`}>{item.title}</Link>
                      </h4>
                    </>
                  ) : (
                    <div
                      style={{
                        width: "80%",
                        height: "10px",
                        background: "#eee",
                        borderRadius: "4px",
                      }}
                    ></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
