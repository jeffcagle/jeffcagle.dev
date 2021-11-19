import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const ServiceLink = ({ to, linkText, linkSummary }) => {
  return (
    <Service to={to}>
      {linkText}
      <Summary>{linkSummary}</Summary>
    </Service>
  );
};

const Summary = styled.span`
  font-style: italic;
  font-weight: normal;
  font-size: 0.9rem;
  color: ${(props) => props.theme.neutralLighter};
  line-height: 1.7rem;
  margin-top: 0.2rem;
`;

const Service = styled(Link)`
  padding: 1.5rem 0;
  font-weight: bold;
  color: ${(props) => props.theme.whiteDark};
  background: ${(props) => props.theme.neutralMed};
  border: 2px solid ${(props) => props.theme.neutralMed};
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: start;
  position: relative;
  top: 0;
  width: 100%;
  height: 100%;
  margin-left: 0;
  transition: width 0.2s, height 0.2s, margin 0.2s,
    0.2s cubic-bezier(0.37, 0, 0.65, 1);

  &:hover {
    color: ${(props) => props.theme.js};
    border: 2px solid ${(props) => props.theme.colorD};
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
    margin-top: -2%;
    width: 102%;
    height: 102%;
    margin-left: -1%;
  }
`;

export default ServiceLink;
