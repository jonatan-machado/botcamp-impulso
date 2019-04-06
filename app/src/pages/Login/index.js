//importação externas
import React from "react";

//importação internas
import BtnBotcamp from "../../components/BtnBotcamp";
import LogoBotcamp from "../../components/LogoBotcamp";
import LoginWraper from "../../components/LoginWraper";

const Login = () => (
  <LoginWraper>
    <LogoBotcamp />
    <BtnBotcamp content="Entrar" />
  </LoginWraper>
);

export default Login;
