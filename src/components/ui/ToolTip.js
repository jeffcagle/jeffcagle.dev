import React from "react";
import styled from "styled-components";
import Pills from "../Pills";

const ToolTip = ({ type, position, delay, tools, className, children }) => {
  if (type === "text") {
    return (
      <ToolTipWrapper position={position} delay={delay} className={className}>
        {children}
        {tools && (
          <>
            <Bold>Built With:</Bold>
            <Pills unstyled items={tools} />
          </>
        )}
      </ToolTipWrapper>
    );
  }
};

const ToolTipWrapper = styled.div`
  /* width: 250px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: ${(props) => props.theme.whiteMed};
  box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  color: ${(props) => props.theme.neutralMed};
  font-size: 0.8rem;
  line-height: 1.5;
  font-weight: normal;
  position: absolute;
  padding: 0.7rem;
  border-radius: 10px;
  z-index: 999;
  visibility: hidden;
  opacity: 0;
  transition-property: opacity visibility;
  transition-timing-function: ease-in-out;
  transition-duration: 0.3s;
  transition-delay: ${(props) => props.delay}s;

  ${(props) =>
    props.position === "top" &&
    `
    bottom: 107%;
    width: 100%;
    left: 0;
    right: 0;
  `}

  ${(props) =>
    props.position === "bottom" &&
    `
    top: 107%;
  `}

  ${(props) =>
    props.position === "right" &&
    `
    left: 107%;
    top: 50%;
    transform: translateY(-50%);
  `}

  ${(props) =>
    props.position === "left" &&
    `
    right: 107%;
    top: 50%;
    transform: translateY(-50%);
  `}

  &:before {
    content: "";
    position: absolute;

    ${(props) =>
      props.position === "top" &&
      `
      left: 50%;
      transform: translateX(-50%);
      top: 99%;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 10px solid ${props.theme.whiteMed};
    `}

    ${(props) =>
      props.position === "bottom" &&
      `
      left: 50%;
      transform: translateX(-50%);
      bottom: 99%;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid ${props.theme.whiteMed};
    `}

    ${(props) =>
      props.position === "right" &&
      `
      top: 50%;
      transform: translateY(-50%);
      right: 99%;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-right: 10px solid ${props.theme.whiteMed};
    `}

    ${(props) =>
      props.position === "left" &&
      `
      top: 50%;
      transform: translateY(-50%);
      left: 99%;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-left: 10px solid ${props.theme.whiteMed};
    `}
  }
`;

const Bold = styled.span`
  margin-bottom: 0;
  margin-top: 0;
  margin-right: 5px;
  font-weight: bold;
  color: ${(props) => props.theme.neutralMed};
`;

export default ToolTip;
