import { createBrowserRouter } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Loading from "../reusable/Loading";

// Utility wrapper to add Suspense to lazy-loaded components
const withSuspense = (Component) => (
    <Suspense fallback={<Loading />}>
         <Component />
    </Suspense>
);

// Lazy-loaded pages
const Home = lazy(() => import("../pages/DashBoard.jsx"));
const Shop = lazy(() => import("../pages/Shop.jsx"));
const Contact = lazy(() => import("../pages/Contact.jsx"));
const ProductDetails = lazy(() => import("../pages/ProductDetails.jsx"));
const NotFound = lazy(() => import("../reusable/NotFound.jsx"));
const Quotes = lazy(() => import("../pages/Quote.jsx"));
const Services = lazy(() => import("../pages/Services.jsx"));
const About = lazy(() => import("../pages/AboutUs.jsx"));

const AppRoutes = createBrowserRouter([
     {
          path: "/",
          element: withSuspense(Home),
     },
     {
          path: "/shop",
          element: withSuspense(Shop),
     },
     {
          path: "/product/:id",
          element: withSuspense(ProductDetails),
     },
     {
          path: "/contact",
          element: withSuspense(Contact),
     },
     {
          path: "quote",
          element: withSuspense(Quotes),
     },
     {
          path: "/services",
          element: withSuspense(Services),
     },
     {
          path: "/about",
          element: withSuspense(About),
     },
     {
          path: "*",
          element: withSuspense(NotFound),
     },
]);

export default AppRoutes;
