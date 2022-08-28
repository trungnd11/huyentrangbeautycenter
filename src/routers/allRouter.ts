import { FC } from "react";
import Home from "../pages/home/Home";
import AboutPage from "../pages/about/AboutPage";
import ServicePage from "../pages/service/ServicePage";
import ExpertPage from "../pages/expert/ExpertPage";
import BlogPage from "../pages/blog/BlogPage";
import ContactPage from "../pages/contact/ContactPage";
import GalleryPage from "../pages/gallery/GalleryPage";
import BlogDetailPage from "../pages/blog/BlogDetailPage";
import DetailServicePage from "../pages/service/DetailServicePage";
import Login from "../pages/login/Login";

interface TypeRouter {
  path: string,
  component: FC,
}

// export const url = "/huyentrangbeautycenter";

export const authRouter: TypeRouter[] = [
  {
    path: `/`,
    component: Home,
  },
  {
    path: `/home`,
    component: Home,
  },
  {
    path: `/about`,
    component: AboutPage,
  },
  {
    path: `/services`,
    component: ServicePage,
  },
  {
    path: `/services/type-:type`,
    component: ServicePage,
  },
  {
    path: `/expert`,
    component: ExpertPage,
  },
  {
    path: `/blog`,
    component: BlogPage,
  },
  {
    path: `/contact`,
    component: ContactPage,
  },
  {
    path: `/photos`,
    component: GalleryPage,
  },
  {
    path: `/blog-details`,
    component: BlogDetailPage,
  },
  {
    path: `/service-details`,
    component: DetailServicePage,
  },
];