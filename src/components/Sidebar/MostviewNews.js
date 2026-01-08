"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";

function PrevArrow(props) {
  return (
    <span className="prev slick-arrow" onClick={props.onClick}>
      <i className="fal fa-angle-left"></i>
    </span>
  );
}

function NextArrow(props) {
  return (
    <span className="next slick-arrow" onClick={props.onClick}>
      <i className="fal fa-angle-right"></i>
    </span>
  );
}

function makeSlug(title = "") {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // replace spaces & symbols with -
    .replace(/^-+|-+$/g, ""); // trim starting/ending -
}

// ⭐ Utility: Chunk array into groups of 6 blogs
const chunkArray = (array, size) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};

export default function MostviewNews({ dark }) {
  const [mostViewPosts, setMostViewPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMostView = async () => {
      try {
        const res = await axios.get(
          "https://coral-rail-888634.hostingersite.com/blog"
        );

        if (res.data.status) {
          const allBlogs = res.data.data;

          // Filter only "Most View" blogs
          let filtered = allBlogs.filter(
            (b) => b.sub_category?.toLowerCase() === "most viewed"
          );

          // Sort by newest
          filtered = filtered.sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at)
          );

          setMostViewPosts(filtered);
        }
      } catch (err) {
        console.error("Most View fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    loadMostView();
  }, []);

  // ⭐ Group into slides of 5 posts
  const slides = chunkArray(mostViewPosts, 6);

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: slides.length > 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    speed: 1000,
    responsive: [
      { breakpoint: 768, settings: { arrows: false } },
      { breakpoint: 576, settings: { arrows: false } },
    ],
  };

  return (
    <>
      <div className="trending-most-view">
        <div className={`section-title ${dark ? "section-title-2" : ""}`}>
          <h3 className="title">Most View</h3>
        </div>
      </div>

      {/* ⭐ Show skeleton until loading is done */}
      {loading ? (
        <div className="post_gallery_items">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`gallery_item gallery_item-style-2 ${
                dark ? "gallery_item_dark" : ""
              }`}
            >
              <div className="gallery_item_thumb">
                <div
                  style={{
                    width: "80px",
                    height: "64px",
                    background: "#e0e0e0",
                    borderRadius: "6px",
                    animation: "pulse 1.4s infinite",
                  }}
                ></div>
              </div>

              <div className="gallery_item_content">
                <div
                  style={{
                    width: "50%",
                    height: "12px",
                    background: "#e0e0e0",
                    borderRadius: "4px",
                    marginBottom: "6px",
                    animation: "pulse 1.4s infinite",
                  }}
                ></div>

                <div
                  style={{
                    width: "90%",
                    height: "14px",
                    background: "#e0e0e0",
                    borderRadius: "4px",
                    animation: "pulse 1.4s infinite",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Slider {...settings} className="trending-sidebar-slider">
          {slides.map((group, index) => (
            <div className="post_gallery_items" key={index}>
              {group.map((item) => (
                <div
                  className={`gallery_item gallery_item-style-2 ${
                    dark ? "gallery_item_dark" : ""
                  }`}
                  key={item.id}
                >
                  <div className="gallery_item_thumb">
                    {item.img ? (
                      <img
                        src={item.img}
                        alt={item.title}
                        width={80}
                        height={64}
                        style={{
                          width: "80px",
                          height: "64px",
                          objectFit: "cover",
                          borderRadius: "6px",
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: "80px",
                          height: "64px",
                          background: "#ddd",
                          borderRadius: "6px",
                          animation: "pulse 1.4s infinite",
                        }}
                      ></div>
                    )}

                    <div className="icon">
                      <i className="fas fa-bolt"></i>
                    </div>
                  </div>

                  <div className="gallery_item_content">
                    <div className="post-meta">
                      <div className="meta-categories">
                        <Link
                          href={`/blogs/${item.id}/${makeSlug(item.title)}`}
                        >
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
          ))}
        </Slider>
      )}

      <style>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}</style>
    </>
  );
}
