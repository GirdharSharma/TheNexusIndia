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

export default function SubCategoryPage({ params }) {
  const { subCategory } = params; // from URL: rajasthan, bollywood etc.

  const [drawer, drawerAction] = useToggle(false);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Convert path → readable
  const categoryName = subCategory
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const res = await axios.get("https://thenexusindia.in/blogs/blog");

        if (res.data.status) {
          const allBlogs = res.data.data;

          // ⭐ MATCH API CATEGORY WITH SUBCATEGORY URL
          const filtered = allBlogs.filter(
            (b) =>
              b.category &&
              b.category.toLowerCase() === categoryName.toLowerCase()
          );

          setBlogs(filtered);
        }
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, [subCategory]);

  return (
    <Layout>
      <div className="home-1-bg">
        <Drawer drawer={drawer} action={drawerAction.toggle} />
        <Header action={drawerAction.toggle} />

        <section className="about-item-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <BreadCrumb CategoryName={categoryName} />
              </div>

              <div className="col-lg-8">
                <div className="about-tab-btn mt-40">
                  <div className="archive-btn">
                    <ul>
                      <li>
                        <span>Category: {categoryName}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="about-post-items">
                    <div className="row">
                      {/* Loading skeleton */}
                      {loading &&
                        [...Array(6)].map((_, i) => (
                          <div key={i} className="col-lg-6 col-md-6">
                            <div className="trending-image-post feature-item mt-30">
                              <div
                                style={{
                                  width: "100%",
                                  height: "240px",
                                  background: "#e0e0e0",
                                  borderRadius: "8px",
                                  animation: "pulse 1.4s infinite",
                                }}
                              ></div>
                            </div>
                          </div>
                        ))}

                      {/* Show blogs */}
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

                      {!loading && blogs.length === 0 && (
                        <div className="col-lg-12 py-5">
                          <h3>No articles found</h3>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* SIDEBAR */}
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
    </Layout>
  );
}
