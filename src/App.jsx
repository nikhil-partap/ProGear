import { Navigate, Route, Routes } from "react-router-dom";
import { Footer, Header, ScrollTop, WhatsAppFloat } from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Shop from "./pages/Shop";
import Gallery from "./pages/Gallery";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <>
      <ScrollTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <WhatsAppFloat />
      <Footer />
    </>
  );
}
