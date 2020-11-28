import React from "react";
import styled from 'styled-components'

export const InputComponent = ({type, placeholder, onChange,value, name, id, autocomplete, disabled}) => {
  return (
    <Input type={type} placeholder={placeholder} onChange={onChange} value={value} name={name} id={id} autocomplete={autocomplete} disabled={disabled} />
  )
 }

const Input = styled.input`
  background-color: transparent;
  border: solid 2px #8ee7ff;
  border-radius: 32px 0 0 32px;
  background: white;
  color: rgb(53, 41, 127);
  cursor: pointer;
  display: inline-block;
  font-weight: 800;
  font-size: 14px;
  outline: none;
  padding: 10px 20px;
  max-width: 300px;
  min-width: 200px;
  text-rendering: geometricPrecision;
  transition: 0.2s all ease-out;
  &:hover:not([disabled]),
  &:focus:not([disabled]) {
    background-color: #8ee7ff;
  }
  &:disabled {
    opacity: .4;
    cursor: not-allowed;
  }
`;

