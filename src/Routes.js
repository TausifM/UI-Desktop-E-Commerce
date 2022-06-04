import React from "react";
import Completed from "pages/Completed";
import Checkout from "pages/Checkout";
import Cart from "pages/Cart";
import ProductDetails from "pages/ProductDetails";
import CategorieswithSidebar from "pages/CategorieswithSidebar";
import ProductList from "pages/ProductList";
import HomepageV3 from "pages/HomepageV3";
import HomepageV2 from "pages/HomepageV2";
import HomepageV1 from "pages/HomepageV1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomepageV1 />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/homepagev2" element={<HomepageV2 />} />
        <Route path="/homepagev3" element={<HomepageV3 />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route
          path="/categorieswithsidebar"
          element={<CategorieswithSidebar />}
        />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
