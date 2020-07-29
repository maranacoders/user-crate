import styled from 'styled-components';
import { darken } from 'polished';

const defaultBgColor = '#8965e0';
const defaultTextColor = '#fff';

const Wrapper = styled.div`
  display: inline-block;
  padding: 10px 15px;
  border-radius: 5px;
  text-align: center;

  background-color: ${(props) => props.bgColor || defaultBgColor};
  color: ${(props) => props.textColor || defaultTextColor};

  cursor: pointer;

  &:hover,
  &:active {
    background-color: ${(props) => darken(0.04, props.bgColor || defaultBgColor)};
  }
`;

export default Wrapper;
