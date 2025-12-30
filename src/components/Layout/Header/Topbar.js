"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Slider from "react-slick";

function PrevArrow({ onClick }) {
  return (
    <span className="prev slick-arrow" onClick={onClick}>
      <i className="fal fa-angle-left"></i>
    </span>
  );
}

function NextArrow({ onClick }) {
  return (
    <span className="next slick-arrow" onClick={onClick}>
      <i className="fal fa-angle-right"></i>
    </span>
  );
}
export default function Topbar() {
  const [loading, setLoading] = useState(true);
  const [trendingNews, setTrendingNews] = useState([]);

  const settings = {
    slidesToShow: 1,

    slidesToScroll: 1,

    dots: false,
    infinite: trendingNews.length > 1,
    autoplay: trendingNews.length > 1,

    // infinite: true,

    // autoplay: true,

    autoplaySpeed: 3000,

    arrows: true,

    prevArrow: <PrevArrow />,

    nextArrow: <NextArrow />,

    speed: 500,

    responsive: [
      {
        breakpoint: 768,

        settings: { arrows: false },
      },
    ],
  };

  // FETCH TRENDING NEWS FROM API

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const res = await fetch(
          "https://coral-rail-888634.hostingersite.com/blog"
        );

        const data = await res.json();

        if (data.status) {
          const filtered = data.data

            .filter(
              (b) =>
                b.sub_category && b.sub_category.toLowerCase() === "trending"
            )

            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); // latest first

          setTrendingNews(filtered);
        }
      } catch (err) {
        console.error("Error fetching trending news:", err);
      }
      setLoading(false);
    };

    fetchTrending();
  }, []);

  // Get today's date in a readable format
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="header-topbar">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="topbar-trending">
              <span>Trending</span>
              <Slider {...settings} className="trending-slider">
                {/* SHOW ONLY ONE LOADING MESSAGE */}
                {loading && (
                  <div className="trending-item">
                    <p style={{ opacity: 0.6 }}>Loading trending news...</p>
                  </div>
                )}

                {/* SHOW TRENDING NEWS */}
                {!loading &&
                  trendingNews.map((item) => {
                    const slug = item.title
                      .toLowerCase()
                      .replace(/ /g, "-")
                      .replace(/[^a-z0-9-]/g, "");

                    return (
                      <div className="trending-item" key={item.id}>
                        <p>
                          <Link href={`/blogs/${item.id}/${slug}`}>
                            {item.title}
                          </Link>
                        </p>
                      </div>
                    );
                  })}
              </Slider>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="topbar-social d-flex align-items-center">
              {/* Display dynamic date */}
              <p>{formattedDate}</p>
              {/* <div className="social">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
