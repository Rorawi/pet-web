import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Order from "./components/Order";
import Search from "./components/Search";
import SeeHomeSearch from "./pages/SeeHomeSearch";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "../src/components/ProtectedRoute";
import MoreSection from "./components/MoreSection";
import AddToCart from "./components/AddToCart";
import MoreOfSameItem from "./components/MoreOfSameItem";

const Routers = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/seehomesearch"
            element={
              // <ProtectedRoute>
                <SeeHomeSearch />
              // </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
                <Login />
            }
          />
          <Route path="/register" element={
          <Register />
          } />
          <Route path="/order" element={
            // <ProtectedRoute>
          <Order />
          // </ProtectedRoute>
          } />
          <Route path="/search" element={
            // <ProtectedRoute>
          <Search />
          // </ProtectedRoute>
          } />
          <Route path="/more" element={
            // <ProtectedRoute>
          <MoreSection />
          // </ProtectedRoute>
          } />
          <Route path="/moreofsameitem" element={
            // <ProtectedRoute>
          <MoreOfSameItem />
          // </ProtectedRoute>
          } />
          <Route path="/addtocart" element={
            // <ProtectedRoute>
          <AddToCart />
          // </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routers;
