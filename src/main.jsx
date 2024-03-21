import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import RootLayout from "./layout/RootLayout";
import ErrorPage from "./layout/pages/errorPage";

import "./index.css";
import Home from "./layout/pages/Home";
import Detail from "./layout/pages/Detail";
import Post from "./layout/pages/Post";
import { About } from "./layout/pages/About";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="eventry/:id" element={<Detail />} />
      <Route path="post" element={<Post />} />
      <Route path="/about" element={<About />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
