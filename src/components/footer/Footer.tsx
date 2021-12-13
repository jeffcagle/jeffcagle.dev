import * as React from 'react';
import styled from 'styled-components';
import breakpoint from '../../styles/breakpoints';
import ListServices from '../lists/ListServices';
import ListPosts from '../lists/ListPosts';
import { Row, Column } from '../shared/Columns';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

/**
 *
 * The website footer.
 *
 * @returns A footer element.
 */
function Footer() {
  const { allDevJson } = useStaticQuery(query);
  const dev = allDevJson.nodes[0];

  return (
    <FooterBar>
      <FooterContainer>
        <Row>
          <Column mediumWidth={33.333} largeWidth={30}>
            <h3>Contact</h3>
            <ul>
              <li>
                <SocialWrap>
                  <SocialIcons>
                    <Icon
                      href={dev.social.gitHub}
                      title="GitHub"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </Icon>
                    <Icon
                      href={dev.social.linkedIn}
                      title="LinkedIn"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </Icon>
                  </SocialIcons>
                </SocialWrap>
              </li>
              <li>
                <p>
                  Find me on{' '}
                  <a href={dev.social.gitHub} target="_blank">
                    GitHub
                  </a>{' '}
                  &amp;{' '}
                  <a href={dev.social.linkedIn} target="_blank">
                    LinkedIn
                  </a>
                  , or contact me via <Link to="/contact">email</Link>.
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

const SocialWrap = styled.div`
  display: flex;
`;

const SocialIcons = styled.div`
  display: flex;
  font-size: 1.8rem;
  margin-bottom: 0.7rem;
`;

const Icon = styled.a`
  margin-right: 0.8rem;
  color: ${props => props.theme.colors.neutral400};
  transition: 0.2s color ease-in-out;

  &:hover {
    color: ${props => props.theme.colors.primary};
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

const query = graphql`
  query {
    allDevJson {
      nodes {
        social {
          gitHub
          linkedIn
        }
      }
    }
  }
`;
