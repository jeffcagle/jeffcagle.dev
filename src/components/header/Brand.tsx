import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

/**
 *
 * Displays an animated logo.
 *
 * @returns JeffCagle.dev logo.
 */
const Brand = () => {
  const [brandAnimated, setBrandAnimated] = useState(false);

  const handleAnimate = () => {
    setBrandAnimated(true);

    setTimeout(() => {
      setBrandAnimated(false);
    }, 2000);
  };

  useEffect(() => {
    handleAnimate();
  }, []);

  return (
    <Name
      onMouseOver={() => handleAnimate()}
      className={`${brandAnimated ? 'animating' : ''}`}
    >
      <Link to="/" title="Jeff Cagle - Web Developer">
        jeffcagle <Dot />
        <Dev>dev</Dev>
      </Link>
    </Name>
  );
};

const Dev = styled.div`
  margin-left: 18px;
`;

const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: ${props => props.theme.colors.primary};

  position: absolute;
  bottom: 5px;
  left: 66%;
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 1.6rem;

  a {
    position: relative;
    display: flex;
    color: ${props => props.theme.colors.neutral100};

    &:hover {
      color: ${props => props.theme.colors.neutral100};
    }
  }

  &.animating ${Dev} {
    animation: twirl 1s;
    animation-iteration-count: 2;

    @keyframes twirl {
      0% {
        color: ${props => props.theme.colors.neutral100};
        transform: rotate3d(0, 0, 0, 0);
      }
      50% {
        color: ${props => props.theme.colors.neutral300};
      }
      100% {
        color: ${props => props.theme.colors.neutral100};
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
        bottom: 5px;
        -webkit-animation-timing-function: ease-in;
      }
      100% {
        bottom: 5px;
        -webkit-animation-timing-function: ease-in;
      }
    }
  }
`;

export default Brand;
