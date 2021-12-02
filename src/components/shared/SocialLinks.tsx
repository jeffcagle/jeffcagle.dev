import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

interface SocialLinksProps {
  startText?: string;
}

/**
 *
 * Social links.
 *
 * @returns Social links as icons.
 */
const SocialLinks = ({ startText }: SocialLinksProps) => (
  <SocialWrap>
    {startText && <Text>{startText}</Text>}
    <SocialIcons>
      <Icon href="/" title="GitHub">
        <FontAwesomeIcon icon={faGithub} />
      </Icon>
      <Icon href="/" title="LinkedIn">
        <FontAwesomeIcon icon={faLinkedin} />
      </Icon>
      <Icon href="/" title="Facebook">
        <FontAwesomeIcon icon={faFacebook} />
      </Icon>
      <Icon href="/" title="Instagram">
        <FontAwesomeIcon icon={faInstagram} />
      </Icon>
    </SocialIcons>
  </SocialWrap>
);

const SocialWrap = styled.div`
  display: flex;
`;

const Text = styled.span`
  font-size: 1rem;
  font-weight: bold;
  font-style: italic;
  margin-right: 20px;
  display: block;
  color: ${props => props.theme.neutralLight};
`;

const SocialIcons = styled.div`
  display: flex;
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const Icon = styled.a`
  margin-right: 0.8rem;
`;

export default SocialLinks;
