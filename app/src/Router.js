import React from "react";

import Chat from "./pages/Chat";
import Login from "./pages/Login";
const Router = () => {
  if (window.location.pathname === "/chat") {
    return <Chat />;
  }
  return <Login />;
};

export default Router;
