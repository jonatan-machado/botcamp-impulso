import React from "react";

import HeaderWrapper from "../../components/wrapper/HeaderWrapper";
import LogoBotcamp from "../../components/LogoBotcamp";
import LogoutBtnBotcamp from "../../components/LogoutBtnBotcamp";
import InputMessage from "../../components/InputMessage";

const Chat = () => {
  return (
    <>
      <HeaderWrapper>
        <LogoBotcamp small />
        <LogoutBtnBotcamp />
      </HeaderWrapper>
      <InputMessage />
    </>
  );
};

export default Chat;
