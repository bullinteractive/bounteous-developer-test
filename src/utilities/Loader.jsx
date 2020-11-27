import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.span`
  display: inline-block;
  border: 4px solid #f3f3f3; /* Light grey */
  border-top: 4px solid rgb(53, 41, 127); /* Blue */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${rotate} 1s linear infinite;
`;