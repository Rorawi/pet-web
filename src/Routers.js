import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Order from "./components/Order";
import Search from "./components/Search";
import SeeHomeSearch from "./pages/SeeHomeSearch";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "../src/components/ProtectedRoute";

const Routers = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/seehomesearch"
            element={
              <ProtectedRoute>
                <SeeHomeSearch />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/order" element={<Order />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routers;
