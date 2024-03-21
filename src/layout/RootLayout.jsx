import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <section className="bg-defaultBgc">
        <Outlet />
      </section>
    </>
  );
};

export default RootLayout;
