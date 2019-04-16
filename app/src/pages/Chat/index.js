import React from "react";

import HeaderWrapper from "../../components/wrapper/HeaderWrapper";
import LogoBotcamp from "../../components/LogoBotcamp";
import LogoutBtnBotcamp from "../../components/LogoutBtnBotcamp";

const Chat = () => {
  return (
    <HeaderWrapper>
      <LogoBotcamp small />
      <LogoutBtnBotcamp />
    </HeaderWrapper>
  );
};

export default Chat;
