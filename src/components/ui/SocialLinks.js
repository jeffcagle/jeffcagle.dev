import React from "react";
import styled from "styled-components";
import { SiteLink } from ".";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const SocialLinks = () => {
  return (
    <SocialIcons>
      <Icon to="/">
        <FontAwesomeIcon icon={faGithub} />
      </Icon>
      <Icon to="/">
        <FontAwesomeIcon icon={faLinkedin} />
      </Icon>
      <Icon to="/">
        <FontAwesomeIcon icon={faFacebook} />
      </Icon>
      <Icon to="/">
        <FontAwesomeIcon icon={faInstagram} />
      </Icon>
    </SocialIcons>
  );
};

const SocialIcons = styled.div`
  display: flex;
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const Icon = styled(SiteLink)`
  margin-right: 0.8rem;
`;

export default SocialLinks;
