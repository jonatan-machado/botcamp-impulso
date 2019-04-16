import React from "react";
import styled from "styled-components";

import logout from "../../img/logout.svg";

const Logout = styled.button.attrs({
  src: logout,
  alt: "Icone para sair"
})``;

const LogoutBtnBotcamp = () => {
  return <Logout />;
};

export default LogoutBtnBotcamp;
