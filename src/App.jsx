import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import Contact from "./pages/Contact";
import ProductPage from "./pages/ProductPage";


export default function App() {
  const [isUserAnAdmin, setUserAnAdmin]= useState(true);
  return (
    <BrowserRouter>
{/*The Navbar stays outside of the Routes so it is visible on every single page*/}
      <Navbar />

      <main className="content-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/admin" element={isUserAnAdmin ?(
            <AdminPage/>):(<Navigate to="/" replace />)} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}