"use client";
import { styled, Container, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Footer from "./footer/page";
import { montserrat } from "src/constants/fonts";
import Aos from "aos";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Session } from "next-auth";

const MainWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%",
  fontFamily: `${montserrat.style.fontFamily}`,
}));

const PageWrapper = styled("div")(() => ({
  display: "flex",
  flexGrow: 1,
  paddingBottom: "60px",
  flexDirection: "column",
  zIndex: 1,
  backgroundColor: "transparent",
}));

interface Props {
  children: React.ReactNode;
  session: Session | null;
}

export default function Layout({ children, session }: Props) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <MainWrapper className="mainwrapper">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        isMobileSidebarOpen={isMobileSidebarOpen}
        onSidebarClose={() => setMobileSidebarOpen(false)}
      />
      <PageWrapper className="page-wrapper">
        <Header session={session} toggleMobileSidebar={() => setMobileSidebarOpen(true)} />
        <Box sx={{ minHeight: "calc(100vh - 170px)" }}>{children}</Box>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Footer />
      </PageWrapper>
    </MainWrapper>
  );
}