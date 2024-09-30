import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";

const RootLayout = () => {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  );
};
export default RootLayout;
