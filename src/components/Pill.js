import React from "react";
import styled from "styled-components";

/**
 *
 * Create a pill to be used in tools.
 *
 * @param {Object} props
 * @param {string} props.name The name of the tool.
 * @param {string} props.color The color of the pill.
 * @returns {HTMLElement} An HTML pill to be used in tools.
 */
const Pill = ({ name, color, small }) => {
  return (
    <SinglePill color={color} small={small}>
      {name}
    </SinglePill>
  );
};

const SinglePill = styled.li`
  background-color: ${(props) => props.theme[props.color]};
  transition: 200ms ease;
  color: ${(props) =>
    props.color === "js" ? props.theme.yellowPillText : "white"};
  border-radius: 5px;
  padding: ${(props) => (props.small ? "0.1rem 0.7rem" : "0.05rem 0.5rem")};
  font-size: ${(props) => (props.small ? "0.9rem" : "1rem")};
  line-height: ${(props) => (props.small ? "1.6" : "")};
  margin-right: 0.2rem;
  margin-bottom: 0.2rem;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: ${(props) => props.theme.neutralLighter};
    color: white;
  }
`;

export default Pill;
