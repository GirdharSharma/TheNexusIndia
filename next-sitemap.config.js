const axios = require("axios");
module.exports = {
  siteUrl: "https://thenexusindia.in",
  generateRobotsTxt: true,

  additionalPaths: async () => {
    const res = await axios.get(
      "https://coral-rail-888634.hostingersite.com/blog"
    );

    return res.data.data.map((blog) => ({
      loc: `/blogs/${blog.id}/${blog.title.toLowerCase().replace(/ /g, "-")}`,
      lastmod: new Date(blog.updated_at || blog.created_at).toISOString(),
    }));
  },
};
