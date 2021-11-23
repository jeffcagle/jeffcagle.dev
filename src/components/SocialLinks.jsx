import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { SiteLink } from './ui';

const SocialLinks = () => (
  <SocialIcons>
    <Icon to="/" title="GitHub">
      <FontAwesomeIcon icon={faGithub} />
    </Icon>
    <Icon to="/" title="LinkedIn">
      <FontAwesomeIcon icon={faLinkedin} />
    </Icon>
    <Icon to="/" title="Facebook">
      <FontAwesomeIcon icon={faFacebook} />
    </Icon>
    <Icon to="/" title="Instagram">
      <FontAwesomeIcon icon={faInstagram} />
    </Icon>
  </SocialIcons>
);

const SocialIcons = styled.div`
  display: flex;
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const Icon = styled(SiteLink)`
  margin-right: 0.8rem;
`;

export default SocialLinks;
