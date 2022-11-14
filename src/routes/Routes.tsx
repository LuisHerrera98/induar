import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoryCreate from "../admin/category/views/CategoryCreate";
import ProductCreate from "../admin/product/views/ProductCreate";
import HomeAdmin from "../admin/views/HomeAdmin";
import Home from "../app/views/Home";

export const Router = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/create" element={<CategoryCreate />} />
          <Route path="/product/create" element={<ProductCreate />} />

          //ADMIN ROUTES
          <Route path="/admin/home" element={<HomeAdmin />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};
