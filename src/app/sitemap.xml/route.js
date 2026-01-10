import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://coral-rail-888634.hostingersite.com/blog",
      { cache: "no-store" }
    );

    const data = await res.json();
    const blogs = data.data || [];

    const baseUrl = "https://thenexusindia.in";

    const staticPages = [
      "",
      "/about",
      "/contact",
      "/terms&condition",
      "/privacy-policy",
    ];

    const staticUrls = staticPages
      .map(
        (page) => `
      <url>
        <loc>${baseUrl}${page}</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>
    `
      )
      .join("");

    const blogUrls = blogs
      .map(
        (blog) => `
      <url>
        <loc>${baseUrl}/blogs/${blog.id}/${blog.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "")}</loc>
        <lastmod>${new Date(
          blog.updated_at || blog.created_at
        ).toISOString()}</lastmod>
        <changefreq>hourly</changefreq>
        <priority>0.9</priority>
      </url>
    `
      )
      .join("");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticUrls}
  ${blogUrls}
</urlset>`;

    return new NextResponse(xml, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  } catch (error) {
    return new NextResponse("Error generating sitemap", { status: 500 });
  }
}
