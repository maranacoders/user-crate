/* eslint-disable */
import styled, { createGlobalStyle } from 'styled-components';

import SVG from '../svg/svg.component';
import ButtonComponent from '../button/button.component';
import { ReactComponent as Triangle } from './assets/triangle.svg';

const MonserratCDN =
  'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
      font-size: 62.5%;
      
      @media (min-width: 112.5em) {
         //1800px
         font-size: 75%;
      }

      @media (max-width: 75em) {
        // 1200px
        font-size: 56.25%;
      }

     @media (max-width: 56.25em) {
        //900px
        font-size: 50%;
      }
    }
`;

export const Wrapper = styled.div`
  @import url(MonserratCDN);

  width: 100%;
  min-height: 90vh;
  font-family: Montserrat, sans-serif;
  color: rgb(56, 56, 56);

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  position: relative;
  overflow: hidden;

  background-image: url('/gradients/pale-cornflower-blue.jpg');
  background-size: cover;

  padding: 4rem;

  &,
  & * {
    z-index: 2;
    box-sizing: border-box;
  }
`;

// SHAPE

export const Shape = styled(Triangle)`
  width: 43%;
  height: initial;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;

  path {
    fill: #fafafa;
  }
`;

// SECTION

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-right: 3rem;
  max-width: 50%;

  @media (max-width: 750px) {
    align-items: center;
    margin-right: 0;
    width: 100%;
    max-width: 100%;
  }
`;

export const Text = styled.p`
  margin: 0;
  font-size: 1.6rem;
  text-transform: ${(props) => props.uppercase && 'uppercase'};
`;

export const Heading = styled.h1`
  font-weight: 900;
  font-size: 4rem;
  width: 14ch;
  margin: 0.5rem 0 1rem 0;
  line-height: 1.1;
  /* word-wrap: break-word; */
  text-transform: ${(props) => props.uppercase && 'uppercase'};

  @media (max-width: 750px) {
    text-align: center;
    width: 10ch;
  }
`;

export const SubHeading = styled.h4`
  font-size: 1.9rem;
  font-weight: 400;
  margin: 0;
  text-transform: ${(props) => props.uppercase && 'uppercase'};

  @media (max-width: 750px) {
    text-align: center;
  }
`;

export const LogoGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -2rem;

  @media (max-width: 750px) {
    justify-content: center;
  }
`;

export const Logo = styled(SVG)`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  fill: ${(props) => props.color || '#303030'};
  cursor: pointer;
  transition: fill 0.2s;
  margin: 1rem 2rem;

  &:hover,
  &:active {
    fill: black;
  }
`;

export const Button = styled(ButtonComponent).attrs({
  bgColor: '#fafafa',
  textColor: 'black',
})`
  font-size: 15px;
  margin: 3.2rem 0;
`;

export const Card = styled.div`
  flex: 0 1 40rem;
  min-height: 22rem;
  max-height: 45vh;
  border-radius: 10px;
  background-color: #303030;
  border-top: 10px solid #303030;
  border-bottom: 10px solid #303030;
  color: white;
  padding: 2rem 3.5rem;
  -webkit-user-modify: read-write;
  overflow-y: scroll;
  word-wrap: break-word;
  font-size: 1.7rem;
  font-weight: 300;
  line-height: 1.5;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;

    &:hover {
      background: #555;
    }
  }

  @media (max-width: 750px) {
    margin-top: 5rem;
  }

  /* counter-reset: line-counter;

  & > * {
    counter-increment: line-counter;

    &::before {
      content: counter(line-counter);
      margin-right: 10px;
      font-size: 14px;
    }
  } */
`;
