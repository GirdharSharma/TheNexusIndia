"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import axios from "axios";

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <span className="prev slick-arrow" onClick={onClick}>
      <i className="fal fa-angle-left"></i>
    </span>
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <span className="next slick-arrow" onClick={onClick}>
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

// LIMIT WORDS HELPER
function limitWords(html, limit = 20) {
  if (!html) return "";

  // Convert HTML to plain text
  const div = document.createElement("div");
  div.innerHTML = html;
  const text = div.textContent || div.innerText || "";

  // Limit words
  const words = text.trim().split(/\s+/);

  return words.length > limit ? words.slice(0, limit).join(" ") + "..." : text;
}

export default function TrendingCarousel({ dark }) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          "https://coral-rail-888634.hostingersite.com/blog"
        );

        if (res.data.status) {
          const allBlogs = res.data.data;
          const now = new Date();
          const twoDaysAgo = new Date();
          twoDaysAgo.setDate(now.getDate() - 2);

          // Filter only trending blogs
          const trending = allBlogs
            .filter(
              (b) =>
                b.category?.toLowerCase() === "trending" ||
                (b.sub_category?.toLowerCase() === "trending" &&
                  b.created_at &&
                  new Date(b.created_at) >= twoDaysAgo)
            )
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

          setBlogs(trending);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const settings = {
    slidesToShow: blogs.length > 1 ? 2 : 1,
    slidesToScroll: 1,
    dots: false,
    infinite: blogs.length > 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: blogs.length > 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1140,
        settings: { slidesToShow: blogs.length > 1 ? 2 : 1 },
      },
      { breakpoint: 992, settings: { slidesToShow: blogs.length > 1 ? 2 : 1 } },
      { breakpoint: 768, settings: { arrows: false, slidesToShow: 1 } },
      { breakpoint: 576, settings: { arrows: false, slidesToShow: 1 } },
    ],
  };

  return (
    <Slider {...settings} className="row trending-news-slider">
      {/* LOADING SKELETON */}
      {loading && (
        <>
          {[1, 2].map((i) => (
            <div className="col" key={i}>
              <div className="trending-news-item skeleton">
                <div className="trending-news-thumb">
                  <div
                    style={{
                      width: "100%",
                      height: "180px",
                      background: "#e0e0e0",
                      borderRadius: "8px",
                    }}
                  ></div>
                </div>
                <div className="trending-news-content">
                  <div
                    style={{
                      width: "70%",
                      height: "20px",
                      background: "#e0e0e0",
                      margin: "10px 0",
                    }}
                  ></div>
                  <div
                    style={{
                      width: "100%",
                      height: "14px",
                      background: "#e0e0e0",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}

      {!loading &&
        blogs.length > 0 &&
        blogs.map((blog) => (
          <div className="col" key={blog.id}>
            <div
              className={`trending-news-item ${
                dark ? "trending-news-item-dark" : ""
              }`}
            >
              {/* IMAGE OR SKELETON */}
              <div className="trending-news-thumb">
                {blog.img ? (
                  <div
                    style={{
                      width: "100%",
                      height: "180px",
                      overflow: "hidden",
                      borderRadius: "10px",
                    }}
                  >
                    <img
                      src={blog.img}
                      alt={blog.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover", // ⭐ KEEP IMAGE PERFECTLY CONTAINED
                      }}
                    />
                  </div>
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: "180px",
                      background: "#e0e0e0",
                      borderRadius: "8px",
                    }}
                  ></div>
                )}
                <div className="icon">
                  <Link href={`/blogs/${blog.id}/${makeSlug(blog.title)}`}>
                    <i className="fas fa-bolt"></i>
                  </Link>
                </div>
              </div>

              <div className="trending-news-content">
                <div className="post-meta">
                  <div className="meta-categories">
                    <Link href={`/blogs/${blog.id}/${makeSlug(blog.title)}`}>
                      {blog.category || "Trending"}
                    </Link>
                  </div>
                  <div className="meta-date">
                    <span>
                      {blog.created_at
                        ? new Date(blog.created_at).toDateString()
                        : ""}
                    </span>
                  </div>
                </div>

                <h3 className="title">
                  <Link href={`/blogs/${blog.id}/${makeSlug(blog.title)}`}>
                    {blog.title}
                  </Link>
                </h3>

                <p className="text">{limitWords(blog.description, 20)}</p>

                <div className="author">
                  <small>By {blog.author}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
    </Slider>
  );
}

// import Link from "next/link";
// import React from "react";
// import Slider from "react-slick";
// function PrevArrow(props) {
//   const { onClick } = props;
//   return (
//     <span className="prev slick-arrow" onClick={onClick}>
//       <i className="fal fa-angle-left"></i>
//     </span>
//   );
// }
// function NextArrow(props) {
//   const { onClick } = props;
//   return (
//     <span className="next slick-arrow" onClick={onClick}>
//       <i className="fal fa-angle-right"></i>
//     </span>
//   );
// }

// export default function TrendingCarousel({ dark }) {
//   const settings = {
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     dots: false,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: true,
//     prevArrow: <PrevArrow />,
//     nextArrow: <NextArrow />,
//     speed: 1000,
//     responsive: [
//       {
//         breakpoint: 1140,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 992,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//           slidesToShow: 1,
//         },
//       },
//       {
//         breakpoint: 576,
//         settings: {
//           arrows: false,
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };
//   return (
//     <Slider {...settings} className="row trending-news-slider">
//       <div className="col">
//         <div
//           className={`trending-news-item ${
//             dark ? "trending-news-item-dark" : ""
//           }`}
//         >
//           <div className="trending-news-thumb">
//             <img src="/images/trending-news-1.jpg" alt="trending" />
//             <div className="icon">
//               <Link href="/post-details-three">
//                 <i className="fas fa-bolt"></i>
//               </Link>
//             </div>
//           </div>
//           <div className="trending-news-content">
//             <div className="post-meta">
//               <div className="meta-categories">
//                 <Link href="/post-details-three">TECHNOLOGY</Link>
//               </div>
//               <div className="meta-date">
//                 <span>March 26, 2020</span>
//               </div>
//             </div>
//             <h3 className="title">
//               <Link href="/post-details-three">
//                 There may be no consoles in the future ea exec says
//               </Link>
//             </h3>
//             <p className="text">
//               The property, complete with 30-seat screening from room, a
//               100-seat amphitheater and a swimming pond with sandy shower…
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="col">
//         <div
//           className={`trending-news-item ${
//             dark ? "trending-news-item-dark" : ""
//           }`}
//         >
//           <div className="trending-news-thumb">
//             <img src="/images/trending-news-2.jpg" alt="trending" />
//             <div className="icon">
//               <Link href="/post-details-three">
//                 <i className="fas fa-bolt"></i>
//               </Link>
//             </div>
//           </div>
//           <div className="trending-news-content">
//             <div className="post-meta">
//               <div className="meta-categories">
//                 <Link href="/post-details-three">TECHNOLOGY</Link>
//               </div>
//               <div className="meta-date">
//                 <span>March 26, 2020</span>
//               </div>
//             </div>
//             <h3 className="title">
//               <Link href="/post-details-one">
//                 Japan’s virus success has puzzled the world. Is its luck running
//                 out?
//               </Link>
//             </h3>
//             <p className="text">
//               The property, complete with 30-seat screening from room, a
//               100-seat amphitheater and a swimming pond with sandy shower…
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="col">
//         <div
//           className={`trending-news-item ${
//             dark ? "trending-news-item-dark" : ""
//           }`}
//         >
//           <div className="trending-news-thumb">
//             <img src="/images/trending-news-3.jpg" alt="trending" />
//             <div className="icon">
//               <Link href="/post-details-three">
//                 <i className="fas fa-bolt"></i>
//               </Link>
//             </div>
//           </div>
//           <div className="trending-news-content">
//             <div className="post-meta">
//               <div className="meta-categories">
//                 <Link href="/post-details-three">TECHNOLOGY</Link>
//               </div>
//               <div className="meta-date">
//                 <span>March 26, 2020</span>
//               </div>
//             </div>
//             <h3 className="title">
//               <Link href="/post-details-one">
//                 Japan’s virus success has puzzled the world. Is its luck running
//                 out?
//               </Link>
//             </h3>
//             <p className="text">
//               The property, complete with 30-seat screening from room, a
//               100-seat amphitheater and a swimming pond with sandy shower…
//             </p>
//           </div>
//         </div>
//       </div>
//     </Slider>
//   );
// }
