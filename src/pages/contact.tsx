import * as React from 'react';
import styled from 'styled-components';
import breakpoint from '../styles/breakpoints';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Column, Row } from '../components/shared/Columns';
import { Box } from '../components/shared/Ui';
import Seo from '../components/shared/Seo';

function Contact() {
  return (
    <>
      <Seo
        title="Get In Touch With Me"
        description="Do you need a freelancer to design &amp; develop your website or web application? Contact me. All project consultations are free of charge."
      />
      <Box withContainer mt={3}>
        <h1>Contact</h1>
      </Box>
      <Box withContainer mt={3}>
        <Row>
          <Column mediumWidth={60}>
            <Form
              name="contact"
              method="post"
              action="/success"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <Label htmlFor="name">Name</Label>
              <TextInput
                id="name"
                name="name"
                placeholder="Your name."
                type="text"
              />
              <Label htmlFor="email">Email</Label>
              <TextInput
                id="email"
                name="email"
                placeholder="Your email address."
                type="email"
              />
              <Label htmlFor="phone">Phone</Label>
              <TextInput
                id="phone"
                name="phone"
                placeholder="Your phone number."
                type="number"
              />
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                placeholder="How can I help you?"
                rows={4}
              />
              <ButtonContainer>
                <InputButton type="submit">Submit</InputButton>
              </ButtonContainer>
            </Form>
          </Column>
          <Column mediumWidth={40}>
            <h2>Get In Touch</h2>
            <p>Project consultations are free of charge.</p>
            <ContactOptions>
              <Option>
                <Icon>
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </Icon>
                <OptionDetails>
                  <span>Email</span>
                  <a href="mailto:jeff@jeffcagle.dev">jeff@jeffcagle.dev</a>
                </OptionDetails>
              </Option>
              <Option>
                <Icon>
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </Icon>
                <OptionDetails>
                  <span>LinkedIn</span>
                  <a href="/">My LinkedIn Profile</a>
                </OptionDetails>
              </Option>
              <Option>
                <Icon>
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </Icon>
                <OptionDetails>
                  <span>GitHub</span>
                  <a href="/">My GitHub Page</a>
                </OptionDetails>
              </Option>
            </ContactOptions>
          </Column>
        </Row>
      </Box>
    </>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;

  @media only screen and ${breakpoint.device.medium} {
    padding-right: 2rem;
  }
`;

const Label = styled.label`
  color: ${props => props.theme.colors.neutral400};
  font-style: italic;
  font-weight: bold;
  margin-bottom: 0.2rem;
`;

const TextInput = styled.input`
  background-color: ${props => props.theme.colors.neutral600};
  border: 1px solid ${props => props.theme.colors.neutral600};
  font-family: ${props => props.theme.fonts.content};
  color: ${props => props.theme.colors.neutral300};
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.6;
  padding: 0.6rem;
  outline: none;

  &:focus,
  &:active {
    border: 1px solid ${props => props.theme.colors.secondary};
  }
`;

const TextArea = styled.textarea`
  background-color: ${props => props.theme.colors.neutral600};
  border: 1px solid ${props => props.theme.colors.neutral600};
  font-family: ${props => props.theme.fonts.content};
  color: ${props => props.theme.colors.neutral300};
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.6;
  padding: 0.6rem;
  outline: none;

  &:focus,
  &:active {
    border: 1px solid ${props => props.theme.colors.secondary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const InputButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-weight: bold;
  padding: 0.6rem 1.7rem;
  transition: 0.2s ease-in-out;
  border: none;
  outline: none;
  font-size: 1rem;
  line-height: 1.8;
  cursor: pointer;

  svg {
    margin-right: 0.5rem;
  }

  background-color: ${props => props.theme.buttons.primary.bgColor};
  color: ${props => props.theme.buttons.primary.color};

  &:hover {
    background-color: ${props => props.theme.buttons.primary.bgColorHover};
    color: ${props => props.theme.buttons.primary.color};
    letter-spacing: 0.03rem;
    border-radius: 5px;
  }

  ${props =>
    props.disabled &&
    `
    pointer-events: none;
    background-color:${props.theme.colors.neutral600};
    color:${props.theme.colors.neutral500};
    text-decoration: line-through;
  `}
`;

const ContactOptions = styled.div`
  display: flex;
  flex-direction: column;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.4rem;
`;

const Icon = styled.div`
  margin-right: 1rem;
`;

const OptionDetails = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-weight: bold;
    font-style: italic;
    color: ${props => props.theme.colors.neutral400};
  }

  a {
    color: ${props => props.theme.colors.secondary};
    transition: 0.2s ease-in-out;

    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

export default Contact;
