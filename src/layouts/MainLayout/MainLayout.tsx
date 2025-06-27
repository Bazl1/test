import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

import { Footer, Header } from "@/widgets";

import "@/shared/styles/styles.scss";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">{children}</main>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        limit={3}
        closeOnClick
        theme="dark"
      />
    </div>
  );
};

export default MainLayout;
