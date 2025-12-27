"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

import Drawer from "@/components/Layout/Drawer/Drawer";
import Header from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer/Footer";
import FooterCopyright from "@/components/Layout/Footer/FooterCopyright";
import Layout from "@/components/Layout/Layout";
import BreadCrumb from "@/components/Others/BreadCrumb";
import Pagination from "@/components/Others/Pagination";
import NewsTabs from "@/components/Sidebar/NewsTabs";
import TrendingSingleCarousel from "@/components/TrendingNews/TrendingSingleCarousel";
import TrendingNewsWidget from "@/components/NewsWidgets/TrendNewsWidget";
import AdWidgetTwo from "@/components/AdsWidget/AdWidgetTwo";
import NewsLetter from "@/components/Newsletter/NewsLetter";
import useToggle from "@/Hooks/useToggle";

export default function CategoryPage({ params }) {
  const { category } = params; // dynamic param from URL
  const [drawer, drawerAction] = useToggle(false);

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch blogs by category
  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const res = await axios.get("https://coral-rail-888634.hostingersite.com/blog");

        if (res.data.status) {
          const all = res.data.data;

          // Filter blogs where category matches URL
          const filtered = all.filter(
            (b) => b.category?.toLowerCase() === category.toLowerCase()
          );

          setBlogs(filtered);
        }
      } catch (err) {
        console.error("Error fetching blogs", err);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, [category]);

  return (
    <Layout>
      <div className="home-1-bg">
        <Drawer drawer={drawer} action={drawerAction.toggle} />
        <Header action={drawerAction.toggle} />

        <section className="about-item-area">
          <div className="container">
            {/* BREADCRUMB */}
            <div className="row">
              <div className="col-lg-12">
                <BreadCrumb CategoryName={category.toUpperCase()} />
              </div>

              {/* LEFT SIDE MAIN CONTENT */}
              <div className="col-lg-8">
                <div className="about-tab-btn mt-40">
                  {/* Category Label */}
                  <div className="archive-btn">
                    <ul>
                      <li>
                        <span>
                          Category: <span>{category.toUpperCase()}</span>
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="about-post-items">
                    <div className="row">
                      {/* ⭐⭐⭐ SKELETON VIEW WHILE LOADING ⭐⭐⭐ */}
                      {loading &&
                        [...Array(8)].map((_, i) => (
                          <div key={i} className="col-lg-6 col-md-6">
                            <div className="trending-image-post feature-item mt-30">
                              {/* Image skeleton */}
                              <div
                                style={{
                                  width: "100%",
                                  height: "240px",
                                  background: "#e0e0e0",
                                  borderRadius: "8px",
                                  animation: "pulse 1.4s infinite",
                                }}
                              ></div>

                              <div className="trending-image-content">
                                {/* Category skeleton */}
                                <div
                                  style={{
                                    width: "40%",
                                    height: "14px",
                                    background: "#e0e0e0",
                                    marginTop: "15px",
                                    borderRadius: "4px",
                                    animation: "pulse 1.4s infinite",
                                  }}
                                ></div>

                                {/* Date skeleton */}
                                <div
                                  style={{
                                    width: "25%",
                                    height: "12px",
                                    background: "#e0e0e0",
                                    marginTop: "8px",
                                    borderRadius: "4px",
                                    animation: "pulse 1.4s infinite",
                                  }}
                                ></div>

                                {/* Title skeleton */}
                                <div
                                  style={{
                                    width: "100%",
                                    height: "18px",
                                    background: "#e0e0e0",
                                    marginTop: "12px",
                                    borderRadius: "4px",
                                    animation: "pulse 1.4s infinite",
                                  }}
                                ></div>
                                <div
                                  style={{
                                    width: "80%",
                                    height: "18px",
                                    background: "#e0e0e0",
                                    marginTop: "8px",
                                    borderRadius: "4px",
                                    animation: "pulse 1.4s infinite",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        ))}

                      {/* ⭐⭐⭐ SHOW BLOGS AFTER LOADING ⭐⭐⭐ */}
                      {!loading &&
                        blogs.map((blog) => (
                          <div key={blog.id} className="col-lg-6 col-md-6">
                            <div className="trending-image-post feature-item mt-30">
                              <img
                                src={blog.img}
                                alt={blog.title}
                                style={{
                                  width: "100%",
                                  height: "240px",
                                  objectFit: "cover",
                                  borderRadius: "8px",
                                }}
                              />

                              <div className="trending-image-content">
                                <div className="post-meta">
                                  <div className="meta-categories">
                                    <a>{blog.category}</a>
                                  </div>
                                  <div className="meta-date">
                                    <span>
                                      {new Date(blog.created_at).toDateString()}
                                    </span>
                                  </div>
                                </div>

                                <h3 className="title">
                                  <Link
                                    href={`/blogs/${blog.id}/${blog.title
                                      .toLowerCase()
                                      .replace(/ /g, "-")}`}
                                  >
                                    {blog.title}
                                  </Link>
                                </h3>
                              </div>
                            </div>
                          </div>
                        ))}

                      {/* Pagination (visible only when data loaded) */}
                      {!loading && (
                        <div className="col-lg-12">
                          <Pagination customClass="pt-40" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDEBAR */}
              <div className="col-lg-4">
                <div className="post_gallery_sidebar mt-40">
                  <NewsTabs />
                  <NewsLetter />
                  <TrendingSingleCarousel />
                  <TrendingNewsWidget />
                  <AdWidgetTwo />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <FooterCopyright />
      </div>

      {/* Skeleton animation */}
      <style>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.4; }
          100% { opacity: 1; }
        }
      `}</style>
    </Layout>
  );
}
