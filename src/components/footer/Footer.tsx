import * as React from 'react';
import styled from 'styled-components';
import breakpoint from '../../styles/breakpoints';
import ListServices from '../lists/ListServices';
import ListPosts from '../lists/ListPosts';
import SocialLinks from '../shared/SocialLinks';
import { Row, Column } from '../shared/Columns';

/**
 *
 * The website footer.
 *
 * @returns A footer element.
 */
function Footer() {
  return (
    <FooterBar>
      <FooterContainer>
        <Row>
          <Column mediumWidth={33.333} largeWidth={30}>
            <h3>Contact</h3>
            <ul>
              <li>
                <SocialLinks />
              </li>
              <li>
                <p>
                  Find me on <a href="/">GitHub</a> and social
                  <br /> media, or send me an <a href="/">email</a>.
                </p>
              </li>
            </ul>
          </Column>
          <Column mediumWidth={33.333} largeWidth={20}>
            <h3>Services</h3>
            <ListServices unstyled />
          </Column>
          <Column mediumWidth={33.333} largeWidth={50}>
            <h3>Latest Dev Blog</h3>
            <ListPosts />
          </Column>
        </Row>
      </FooterContainer>
    </FooterBar>
  );
}

const FooterBar = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.neutral700};
  border-top: 3px solid ${props => props.theme.colors.secondary};

  @media only screen and ${breakpoint.device.small} {
    padding: 0 1rem;
  }

  h3 {
    color: ${props => props.theme.colors.neutral300};
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 0.9rem;

    a {
      color: ${props => props.theme.colors.neutral400};
      transition: 0.2s ease-in-out;

      &:hover {
        color: ${props => props.theme.colors.primary};
      }
    }
  }
`;

const FooterContainer = styled.div`
  max-width: ${props => props.theme.sizes.containerWidthSmall};

  @media only screen and ${breakpoint.device.medium} {
    max-width: ${props => props.theme.sizes.containerWidthMedium};
  }

  @media only screen and ${breakpoint.device.large} {
    max-width: ${props => props.theme.sizes.containerWidth};
  }

  margin: 0 auto;
  padding: 4rem 0;
  color: ${props => props.theme.colors.neutral500};
`;

export default Footer;
