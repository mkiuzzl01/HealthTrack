import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-455px)]">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
