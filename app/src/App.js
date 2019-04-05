import React, { Component } from "react";

import BtnBotcamp from "./components/BtnBotcamp";
import LogoBotcamp from "./components/LogoBotcamp";
import LoginWraper from "./components/LoginWraper";
import logo from "./img/botcamp.svg";
class App extends Component {
  render() {
    return (
      <>
        <LoginWraper>
          <LogoBotcamp src={logo} />
          <BtnBotcamp content="Entrar" />
        </LoginWraper>
      </>
    );
  }
}
export default App;
