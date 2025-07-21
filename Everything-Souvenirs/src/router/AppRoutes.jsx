import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import Loading from "../reusable/Loading.jsx";

const withSuspense = (Component, useLayout = true) => (
    <Suspense fallback={<Loading />}>
         {useLayout ? (
             <Layout>
                  <Component />
             </Layout>
         ) : (
             <Component />
         )}
    </Suspense>
);

const Home = lazy(() => import("../pages/DashBoard.jsx"));
const Shop = lazy(() => import("../pages/Shop.jsx"));
const Contact = lazy(() => import("../pages/Contact.jsx"));
const ProductDetails = lazy(() => import("../pages/ProductDetails.jsx"));
const NotFound = lazy(() => import("../reusable/NotFound.jsx"));
const Quotes = lazy(() => import("../pages/Quote.jsx"));
const Services = lazy(() => import("../pages/Services.jsx"));
const About = lazy(() => import("../pages/AboutUs.jsx"));
const SignIn = lazy(() => import("../pages/SignInPage.jsx"));
const SignUp = lazy(() => import("../pages/SignUpPage.jsx"));

const AppRoutes = createBrowserRouter([
     {
          path: "/",
          element: withSuspense(Home)
     },
     {
          path: "/shop",
          element: withSuspense(Shop)
     },
     {
          path: "/product/:id",
          element: withSuspense(ProductDetails)
     },
     {
          path: "/contact",
          element: withSuspense(Contact)
     },
     {
          path: "/quote",
          element: withSuspense(Quotes)
     },
     {
          path: "/services",
          element: withSuspense(Services)
     },
     {
          path: "/about",
          element: withSuspense(About)
     },
     {
          path: "/signin",
          element: withSuspense(SignIn, false)
     },
     {
          path: "/signup",
          element: withSuspense(SignUp, false)
     },
     {
          path: "*",
          element: withSuspense(NotFound, false)
     },
]);

export default AppRoutes;
