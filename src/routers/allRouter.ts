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

interface TypeRouter {
  path: string,
  component: FC,
}

export const url = "/huyentrangbeautycenter";

export const authRouter: TypeRouter[] = [
  {
    path: `${url}/`,
    component: Home,
  },
  {
    path: `${url}/home`,
    component: Home,
  },
  {
    path: `${url}/about`,
    component: AboutPage,
  },
  {
    path: `${url}/services`,
    component: ServicePage,
  },
  {
    path: `${url}/expert`,
    component: ExpertPage,
  },
  {
    path: `${url}/blog`,
    component: BlogPage,
  },
  {
    path: `${url}/contact`,
    component: ContactPage,
  },
  {
    path: `${url}/photos`,
    component: GalleryPage,
  },
  {
    path: `${url}/blog-details`,
    component: BlogDetailPage,
  },
  {
    path: `${url}/service-details`,
    component: DetailServicePage,
  },
];