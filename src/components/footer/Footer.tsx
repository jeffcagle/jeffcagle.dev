import * as React from 'react';
import styled from 'styled-components';
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
const Footer = () => (
  <FooterBar>
    <FooterContainer>
      <Row>
        <Column width={33.333}>
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
        <Column width={33.333}>
          <h3>Services</h3>
          <ListServices />
        </Column>
        <Column width={33.333}>
          <h3>Latest Dev Blog</h3>
          <ListPosts limit={4} withIcon />
        </Column>
      </Row>
    </FooterContainer>
  </FooterBar>
);

const FooterBar = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.neutralMed};
  border-top: 3px solid ${(props) => props.theme.colorD};

  h3 {
    color: ${(props) => props.theme.whiteDark};
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 0.9rem;

    a {
      color: ${(props) => props.theme.neutralLighter};

      &:hover {
        color: ${(props) => props.theme.js};
      }
    }
  }
`;

const FooterContainer = styled.div`
  max-width: ${(props) => props.theme.containerWidth};
  margin: 0 auto;
  padding: 4rem 0;
  color: ${(props) => props.theme.neutralLight};
`;

export default Footer;
