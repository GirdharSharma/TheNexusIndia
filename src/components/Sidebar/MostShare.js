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

// ⭐ FUNCTION TO SPLIT ARRAY INTO GROUPS OF 5
const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

export default function MostShare({ customClass, dark }) {
  const [sharePosts, setSharePosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMostShare = async () => {
      try {
        const res = await axios.get("https://thenexusindia.in/blogs/blog");

        if (res.data.status) {
          const allBlogs = res.data.data;

          // FILTER SUBCATEGORY = MOST SHARE
          let filtered = allBlogs.filter(
            (b) => b.sub_category?.toLowerCase() === "most share"
          );

          // SORT BY NEWEST
          filtered = filtered.sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at)
          );

          setSharePosts(filtered);
        }
      } catch (err) {
        console.error("Most Share error:", err);
      } finally {
        setLoading(false);
      }
    };

    loadMostShare();
  }, []);

  // ⭐ GROUP BLOGS INTO SLIDES OF 5 BLOGS EACH
  const slides = chunkArray(sharePosts, 5);

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
    speed: 900,
    responsive: [
      { breakpoint: 768, settings: { arrows: false } },
      { breakpoint: 576, settings: { arrows: false } },
    ],
  };

  return (
    <div className={`all-post-sidebar ${customClass}`}>
      <div className="most-share-post">
        <div className={`section-title ${dark ? "section-title-2" : ""}`}>
          <h3 className="title">Most Share</h3>
        </div>
      </div>

      {/* ⭐ SKELETON UNTIL LOADING */}
      {loading ? (
        <div className="most-share-post-items">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`most-share-post-item ${
                dark ? "most-share-post-item-dark" : ""
              }`}
            >
              <div
                style={{
                  width: "60px",
                  height: "14px",
                  background: "#e0e0e0",
                  borderRadius: "4px",
                  marginBottom: "10px",
                  animation: "pulse 1.4s infinite",
                }}
              ></div>
              <div
                style={{
                  width: "100%",
                  height: "18px",
                  background: "#e0e0e0",
                  borderRadius: "4px",
                  marginBottom: "10px",
                  animation: "pulse 1.4s infinite",
                }}
              ></div>
              <ul>
                <li>
                  <i className="fab fa-twitter"></i> --
                </li>
                <li>
                  <i className="fab fa-facebook-f"></i> --
                </li>
              </ul>
              <div className="count">
                <span>--</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Slider {...settings} className="trending-sidebar-slider">
          {slides.map((group, slideIndex) => (
            <div className="most-share-post-items" key={slideIndex}>
              {group.map((item, i) => (
                <div
                  className={`most-share-post-item ${
                    dark ? "most-share-post-item-dark" : ""
                  }`}
                  key={i}
                >
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

                  <ul>
                    <li>
                      <i className="fab fa-twitter"></i> 2.2K
                    </li>
                    <li>
                      <i className="fab fa-facebook-f"></i> 3.5K
                    </li>
                  </ul>

                  <div className="count">
                    <span>{item.id}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </Slider>
      )}

      {/* Pulse Animation */}
      <style>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
