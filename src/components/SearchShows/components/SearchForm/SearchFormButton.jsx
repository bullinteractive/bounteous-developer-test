import React from "react";
import styled from 'styled-components'

export const ButtonComponent = ({children, onClick, type, disabled}) => {
  return (
    <Button type={type} onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  )
 }

const Button = styled.button`
  background-color: transparent;
  border: solid 2px #8ee7ff;
  border-radius: 0 32px 32px 0;
  color: #8ee7ff;
  cursor: pointer;
  display: inline-block;
  font-weight: 800;
  font-size: 14px;
  outline: none;
  padding: 10px 40px;
  text-transform: uppercase;
  text-rendering: geometricPrecision;
  transition: 0.2s all ease-out;
  &:hover:not([disabled]),
  &:focus:not([disabled]) {
    background-color: #8ee7ff;
    color: rgb(53, 41, 127);
  }
  &:disabled {
    opacity: .4;
    cursor: not-allowed;
  }
`;

