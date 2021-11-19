import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SiteLink } from ".";

/**
 *
 * Animated logo using local state to manage animation class on hover and initial page load.
 *
 * @returns {HTMLElement} An HTML logo which animates on load & hover.
 */
const Brand = () => {
  const [brandAnimated, setBrandAnimated] = useState(false);

  useEffect(() => {
    handleAnimate();
  }, []);

  const handleAnimate = () => {
    setBrandAnimated(true);

    setTimeout(() => {
      setBrandAnimated(false);
    }, 2000);
  };

  return (
    <Name
      onMouseOver={() => handleAnimate()}
      className={`${brandAnimated ? "animating" : ""}`}
    >
      <SiteLink to="/" title="Jeff Cagle - Web Developer">
        jeffcagle <Dot></Dot>
        <Dev>dev</Dev>
      </SiteLink>
    </Name>
  );
};

const Dev = styled.div`
  margin-left: 14px;
`;

const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: ${(props) => props.theme.js};

  position: absolute;
  bottom: 6px;
  left: 67%;
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 1.6rem;

  a {
    position: relative;
    display: flex;
    color: ${(props) => props.theme.white};

    &:hover {
      color: ${(props) => props.theme.white};
    }
  }

  &.animating ${Dev} {
    animation: twirl 1s;
    animation-iteration-count: 2;

    @keyframes twirl {
      0% {
        color: ${(props) => props.theme.white};
        transform: rotate3d(0, 0, 0, 0);
      }
      50% {
        color: ${(props) => props.theme.whiteDark};
      }
      100% {
        color: ${(props) => props.theme.white};
        transform: rotate3d(0, 1, 0, 360deg);
      }
    }
  }

  &.animating ${Dot} {
    animation: bounce 2s;
    animation-iteration-count: forwards;

    @keyframes bounce {
      0% {
        bottom: 6px;
        -webkit-animation-timing-function: ease-in;
      }
      10% {
        bottom: -20px;
        height: 10px;
        -webkit-animation-timing-function: ease-out;
      }
      15% {
        bottom: -28px;
        height: 5px;
        -webkit-animation-timing-function: ease-in;
      }
      20% {
        bottom: -10px;
        height: 10px;
        -webkit-animation-timing-function: ease-out;
      }
      45% {
        bottom: 26px;
        -webkit-animation-timing-function: ease-in;
      }
      55% {
        bottom: 20px;
        -webkit-animation-timing-function: ease-in;
      }
      70% {
        bottom: -20px;
        height: 10px;
        -webkit-animation-timing-function: ease-out;
      }
      75% {
        bottom: -28px;
        height: 5px;
        -webkit-animation-timing-function: ease-in;
      }
      80% {
        bottom: 0;
        height: 10px;
        -webkit-animation-timing-function: ease-in;
      }
      85% {
        bottom: 6px;
        -webkit-animation-timing-function: ease-in;
      }
      100% {
        bottom: 6px;
        -webkit-animation-timing-function: ease-in;
      }
    }
  }
`;

export default Brand;
