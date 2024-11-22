// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import DarkModeToggle from "../common/DarkModeToggle"
import WhatsApp from "../common/WhatsApp"

const Layout = () => {
  return (
    <div className="bg-white dark:bg-darkBackground dark:text-white overflow-hidden">

      <Header />
      <main className="">
        <Outlet /> {/* This is where nested routes will render */}
      </main>
      <DarkModeToggle/>
      <WhatsApp/>
      <Footer />
    </div>
  );
};

export default Layout;
