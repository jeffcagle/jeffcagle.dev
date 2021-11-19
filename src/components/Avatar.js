import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Avatar = () => {
  return (
    <AvatarContainer>
      <FontAwesomeIcon icon={faCoffee} size="8x" />
    </AvatarContainer>
  );
};

const AvatarContainer = styled.div`
  color: ${(props) => props.theme.whiteMed};
`;

export default Avatar;
