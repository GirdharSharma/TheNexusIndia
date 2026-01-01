"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";

import AdOne from "@/components/AdsWidget/AdOne";
import Footer from "@/components/Layout/Footer/Footer";
import FooterCopyright from "@/components/Layout/Footer/FooterCopyright";
import Header from "@/components/Layout/Header/Header";
import Drawer from "@/components/Layout/Drawer/Drawer";
import Layout from "@/components/Layout/Layout";

import NewsTabs from "@/components/Sidebar/NewsTabs";
import TrendingSingleCarousel from "@/components/TrendingNews/TrendingSingleCarousel";
import TrendingNewsWidget from "@/components/NewsWidgets/TrendNewsWidget";
import MostShare from "@/components/Sidebar/MostShare";
import BreadCrumb from "@/components/Others/BreadCrumb";
import LatestNews from "@/components/Others/LatestNews";

import useToggle from "@/Hooks/useToggle";

export default function BlogDetailsPage() {
  const { id } = useParams();
  const [drawer, drawerAction] = useToggle(false);

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const parsedTags = blog?.hashtags ? JSON.parse(blog.hashtags) : [];

  // ⭐ Load blog details by filtering all blogs (your API style)
  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      try {
        const res = await fetch(
          "https://coral-rail-888634.hostingersite.com/blog"
        );
        const data = await res.json();

        if (data.status) {
          const found = data.data.find((item) => item.id == id);
          setBlog(found || null);
        }
      } catch (err) {
        console.error("Error loading blog:", err);
      }
      setLoading(false);
    };

    fetchBlog();
  }, [id]);

  return (
    <Layout>
      <div className="home-1-bg">
        <Drawer drawer={drawer} action={drawerAction.toggle} />
        <Header action={drawerAction.toggle} />

        <section className="post-layout-1-area post-layout-3-area pb-80">
          <div className="container">
            <div className="row">
              {/* Breadcrumb */}
              <div className="col-lg-12">
                <BreadCrumb CategoryName={blog?.category || "Loading..."} />
              </div>

              {/* LEFT CONTENT */}
              <div className="col-lg-8">
                <div className="post-layout-top-content post-layout-top-content-3">
                  {/* TITLE */}
                  <div className="post-content">
                    {loading ? (
                      <h3 className="title">Loading...</h3>
                    ) : (
                      <h3 className="title">{blog?.title}</h3>
                    )}

                    {/* AUTHOR & DATE */}
                    <div className="post-author">
                      <div
                        className="author-info"
                        style={{ paddingLeft: "40px" }}
                      >
                        <div className="thumb">
                          {/* <img src="/images/author.png" alt="" /> */}
                          <i class="fal fa-user"></i>
                        </div>
                        <h5 className="title">{blog?.author}</h5>
                        <ul>
                          <li>
                            {blog
                              ? new Date(blog.created_at).toDateString()
                              : ""}
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* IMAGE */}
                    <div className="thumb">
                      {loading ? (
                        <div
                          style={{
                            width: "100%",
                            height: "400px",
                            background: "#eee",
                            borderRadius: "10px",
                            animation: "pulse 1.4s infinite",
                          }}
                        ></div>
                      ) : (
                        <img
                          src={blog?.img || "/images/no-image.jpg"}
                          alt={blog?.title}
                        />
                      )}
                    </div>
                  </div>

                  {/* DESCRIPTION */}
                  <div className="post-text mt-30">
                    {loading ? (
                      <p>Loading description...</p>
                    ) : (
                      //   <p>{blog?.description}</p>
                      // <ReactMarkdown>{blog?.description || ""}</ReactMarkdown>
                      <div
                        className="blog-description"
                        dangerouslySetInnerHTML={{
                          __html: blog?.description || "",
                        }}
                      />
                    )}
                  </div>

                  {/* TAGS */}
                  {!loading && (
                    <div className="post-tags">
                      <ul>
                        <li>
                          <i className="fas fa-tag"></i>
                        </li>
                        {/* <li>
                          <a>{blog?.category}</a>
                        </li>
                        <li>
                          <a>{blog?.sub_category}</a>
                        </li> */}
                        {parsedTags.length > 0 ? (
                          parsedTags.map((tag, i) => (
                            <li key={i}>
                              <a>{tag}</a>
                            </li>
                          ))
                        ) : (
                          <li>No Tags</li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* RIGHT SIDEBAR */}
              <div className="col-lg-4">
                <div className="post_gallery_sidebar mt-20">
                  <NewsTabs />
                  <TrendingSingleCarousel />
                  <TrendingNewsWidget />
                  {/* <AdOne /> */}
                  <MostShare customClass="mt-40" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <LatestNews />
        <Footer />
        <FooterCopyright />
      </div>

      <style>{`
        @keyframes pulse {
          0% { opacity: 1 }
          50% { opacity: 0.5 }
          100% { opacity: 1 }
        }
      `}</style>
    </Layout>
  );
}
