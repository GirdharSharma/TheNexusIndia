"use client";
import AdOne from "@/components/AdsWidget/AdOne";
import FeatureNewsCarousel from "@/components/FeatureNews/FeatureNewsCarousel";
import Drawer from "@/components/Layout/Drawer/Drawer";
import Footer from "@/components/Layout/Footer/Footer";
import FooterCopyright from "@/components/Layout/Footer/FooterCopyright";
import Header from "@/components/Layout/Header/Header";
import Layout from "@/components/Layout/Layout";
import BusinessNews from "@/components/News/BusinessNews";
import EntertainmentNews from "@/components/News/EntertainmentNews";
import NewsGallary from "@/components/News/NewsGallary";
import PopularNewsCarousel from "@/components/News/PopularNewsCarousel";
import SportsNewsCarousel from "@/components/News/SportsNewsCarousel";
import TrendingCarousel from "@/components/News/TrendingCarousel";
import TwoPostCarousel from "@/components/News/TwoPostCarousel";
import VideoNews from "@/components/News/VideoNews";
import NewsLetter from "@/components/Newsletter/NewsLetter";
import MostShare from "@/components/Sidebar/MostShare";
import MostviewNews from "@/components/Sidebar/MostviewNews";
import NewsTabs from "@/components/Sidebar/NewsTabs";
import SidebarCategories from "@/components/Sidebar/SidebarCategories";
import SportsFixtures from "@/components/Sidebar/SportsFixtures";
import WidgetOne from "@/components/SocialMediaWidgets/WidgetOne";
import TrendingNewPost from "@/components/TrendingNews/TrendingNewPost";
import useToggle from "@/Hooks/useToggle";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function HomeOneOne() {
  const [latestSports, setLatestSports] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSports = async () => {
      try {
        const res = await axios.get("https://thenexusindia.in/blogs/blog");

        if (res.data.status) {
          const all = res.data.data;

          // filter only sports category
          let sports = all.filter(
            (b) => b.category?.toLowerCase() === "sports"
          );

          // sort by newest
          sports = sports.sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at)
          );

          // latest 1
          setLatestSports(sports[0] || null);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    loadSports();
  }, []);

  const [drawer, drawerAction] = useToggle(false);
  return (
    <Layout>
      <div className="home-1-bg">
        <Drawer drawer={drawer} action={drawerAction.toggle} />
        <Header action={drawerAction.toggle} />
        <section className="trending-news-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="section-title">
                  <h3 className="title">Trending News</h3>
                </div>
                <TrendingCarousel />
                <TrendingNewPost />
              </div>
              <div className="col-lg-4">
                <div className="trending-right-sidebar">
                  {/* <WidgetOne /> */}
                  <MostviewNews />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <FeatureNewsCarousel customClass="" /> */}
        {/* <div className="post__gallery__area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <NewsGallary />
              </div>
              <div className="col-lg-4">
                <div className="post_gallery_sidebar">
                  <NewsTabs />
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <TwoPostCarousel /> */}
        {/* <section className="video-news-area ">
          <div className="container custom-container">
            <div className="video-news-box">
              <div className="row">
                <div className="col-lg-8">
                  <VideoNews />
                </div>
                <div className="col-lg-4">
                  <PopularNewsCarousel />
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="all-post-area" style={{ paddingTop: "50px" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <EntertainmentNews />
                {/* <div className="sports-news-area">
                  <div className="section-title">
                    <h3 className="title">Sports News</h3>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="trending-news-item mb-30">
                        <div className="trending-news-thumb">
                          <img src="/images/sports-news.jpg" alt="sports" />
                        </div>
                        <div className="trending-news-content">
                          <div className="post-meta">
                            <div className="meta-categories">
                              <Link href="/post-details-two">TECHNOLOGY</Link>
                            </div>
                            <div className="meta-date">
                              <span>March 26, 2020</span>
                            </div>
                          </div>
                          <h3 className="title">
                            <Link href="/post-details-two">
                              There may be no consoles in the future ea exec
                              says
                            </Link>
                          </h3>
                          <p className="text">
                            The property, complete with 30-seat screening from
                            room, a 100-seat amphitheater and a swimming pond
                            with sandy shower…
                          </p>
                          <Link href="/post-details-two">Read more</Link>
                        </div>
                      </div>
                    </div>
                    LEFT SIDE — ONLY LATEST ONE
                    <div className="col-lg-6 col-md-6">
                      {loading ? (
                        // simple skeleton
                        <div className="trending-news-item mb-30">
                          <div
                            style={{
                              width: "100%",
                              height: "260px",
                              background: "#e0e0e0",
                              borderRadius: "6px",
                              animation: "pulse 1.4s infinite",
                            }}
                          ></div>
                          <div
                            style={{
                              width: "70%",
                              height: "16px",
                              background: "#e0e0e0",
                              marginTop: "12px",
                              animation: "pulse 1.4s infinite",
                            }}
                          ></div>
                        </div>
                      ) : latestSports ? (
                        <div className="trending-news-item mb-30">
                          <div className="trending-news-thumb">
                            <img
                              src={
                                latestSports.img
                                  ? latestSports.img
                                  : "/images/sports-news.jpg"
                              }
                              alt={latestSports.title}
                              style={{
                                width: "100%",
                                height: "260px",
                                objectFit: "cover",
                                borderRadius: "6px",
                              }}
                            />
                          </div>

                          <div className="trending-news-content">
                            <div className="post-meta">
                              <div className="meta-categories">
                                <Link href={`/blogs/${latestSports.id}`}>
                                  {latestSports.category}
                                </Link>
                              </div>
                              <div className="meta-date">
                                <span>
                                  {new Date(
                                    latestSports.created_at
                                  ).toDateString()}
                                </span>
                              </div>
                            </div>

                            <h3 className="title">
                              <Link href={`/blogs/${latestSports.id}`}>
                                {latestSports.title}
                              </Link>
                            </h3>

                            <p className="text">
                              {latestSports.description?.slice(0, 120)}...
                            </p>

                            <Link href={`/blogs/${latestSports.id}`}>
                              Read more
                            </Link>
                          </div>
                        </div>
                      ) : (
                        <p>No sports news available.</p>
                      )}
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <SportsNewsCarousel />
                    </div>
                    <style>
                      {`
          @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
          }
        `}
                    </style>
                  </div>
                </div> */}
                {/* <div className="post-add mt-30">
                  <a href="#">
                    <img src="/images/ads/banner.png" alt="ad" />
                  </a>
                </div> */}
                <BusinessNews />
              </div>
              <div className="col-lg-4">
                <MostShare />
                {/* <SportsFixtures />
                <NewsLetter /> */}
                {/* <SidebarCategories /> */}
                {/* <AdOne /> */}
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
