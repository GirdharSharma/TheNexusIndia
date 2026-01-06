"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Link from "next/link";

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

function htmlToText(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
}

export default function TrendingSingleCarousel() {
  const [entertainment, setEntertainment] = useState([]);
  const [loading, setLoading] = useState(true);

  // ⭐ Fetch Entertainment blogs
  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const res = await fetch(
          "https://coral-rail-888634.hostingersite.com/blog"
        );
        const data = await res.json();

        if (data.status) {
          const all = data.data;

          const filtered = all.filter(
            (b) =>
              b.category?.toLowerCase() === "entertainment" ||
              b.sub_category?.toLowerCase() === "entertainment"
          );

          setEntertainment(filtered);
        }
      } catch (err) {
        console.error("Error fetching entertainment blogs:", err);
      }

      setLoading(false);
    };

    loadBlogs();
  }, []);

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: entertainment.length > 1,
    autoplay: entertainment.length > 1,
    autoplaySpeed: 3000,
    arrows: entertainment.length > 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    speed: 1000,
    responsive: [
      { breakpoint: 768, settings: { arrows: false } },
      { breakpoint: 576, settings: { arrows: false } },
    ],
  };

  return (
    <div className="trending-sidebar mt-40">
      <div className="section-title">
        <h3 className="title">Entertainment News</h3>
      </div>

      <Slider {...settings} className="trending-sidebar-slider">
        {/* ⭐ Loading Skeleton */}
        {loading &&
          [1, 2, 3].map((i) => (
            <div className="trending-news-item" key={i}>
              <div
                style={{
                  width: "100%",
                  height: "180px",
                  borderRadius: "10px",
                  background: "#e0e0e0",
                }}
              ></div>
              <div className="mt-2">
                <div
                  style={{
                    width: "60%",
                    height: "18px",
                    background: "#e0e0e0",
                    borderRadius: "5px",
                  }}
                ></div>
              </div>
            </div>
          ))}

        {/* ⭐ Show Entertainment Blogs */}
        {!loading &&
          entertainment.map((item) => (
            <div className="trending-news-item" key={item.id}>
              <div className="trending-news-thumb">
                <img
                  src={item.img || "/images/no-image.jpg"}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />

                <div className="icon">
                  <Link href={`/blogs/${item.id}/${makeSlug(item.title)}`}>
                    <i className="fas fa-bolt"></i>
                  </Link>
                </div>
              </div>

              <div className="trending-news-content">
                <div className="post-meta">
                  <div className="meta-categories">
                    <Link href={`/blogs/${item.id}/${makeSlug(item.title)}`}>
                      {item.category || "Entertainment"}
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

                {/* <p className="text">{item.description?.slice(0, 100)}...</p> */}
                <p className="text">
                  {htmlToText(item.description).slice(0, 100)}...
                </p>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
}
