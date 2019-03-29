//importação externa
import React from "react";

//importação interna
import BtnBotcamp from "./components/BtnBotcamp";
import LogoBotcamp from "./components/LogoBotcamp";
import "./style.css";
const App = () => (
  <div className="container">
    <LogoBotcamp />
    <BtnBotcamp />
  </div>
);

export default App;
