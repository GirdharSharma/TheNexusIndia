import { Inter } from "next/font/google";
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/font-awesome.min.css";
import "@/assets/css/slick.css";
import "@/assets/css/navbar.css";
import "@/assets/css/default.css";
import "@/assets/scss/style.scss";
import "react-modal-video/scss/modal-video.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "The Nexus India: TNI - Breaking News in India | Latest Sports, Business, Entertainment, Blogs & Expert Opinions",
  description:
    "Get the latest breaking news in India covering sports, business, entertainment, lifestyle, blogs and expert opinions. Stay updated with top headlines from trusted columnists and leading news sources.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
