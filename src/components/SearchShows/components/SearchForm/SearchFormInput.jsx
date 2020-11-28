import React from "react";
import styled from 'styled-components'

export const InputComponent = ({type, placeholder, label, onChange,value, name, id, autoComplete, disabled}) => {
  return (
    <>
    <Label for={id}>{label}</Label>
    <Input type={type} placeholder={placeholder} onChange={onChange} value={value} name={name} id={id} autoComplete={autoComplete} disabled={disabled} />
  </>
  )
 }

const Label = styled.label`
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
`;
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

