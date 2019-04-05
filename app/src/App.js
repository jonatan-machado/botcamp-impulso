import React, { Component } from "react";

import BtnBotcamp from "./components/BtnBotcamp";
import LogoBotcamp from "./components/LogoBotcamp";
import LoginWraper from "./components/LoginWraper";

class App extends Component {
  render() {
    return (
      <>
        <LoginWraper>
          <LogoBotcamp />
          <BtnBotcamp content="Entrar" />
        </LoginWraper>
      </>
    );
  }
}
export default App;
