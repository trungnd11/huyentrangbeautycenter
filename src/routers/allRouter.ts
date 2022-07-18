import { FC } from "react";
import Home from "../pages/home/Home";
import AboutPage from "../pages/about/AboutPage";
import ServicePage from "../pages/service/ServicePage";
import ExpertPage from "../pages/expert/ExpertPage";
import BlogPage from "../pages/blog/BlogPage";
import ContactPage from "../pages/contact/ContactPage";

interface TypeRouter {
  path: string,
  component: FC,
}

export const authRouter: TypeRouter[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/services",
    component: ServicePage,
  },
  {
    path: "/expert",
    component: ExpertPage,
  },
  {
    path: "/blog",
    component: BlogPage,
  },
  {
    path: "/contact",
    component: ContactPage,
  },
];