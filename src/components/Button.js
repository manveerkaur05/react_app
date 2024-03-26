// src/components/Button.js
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${(props) => (props.disabled ? '#CCCCCC' : '#007bff')};
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Button = ({ text, onClick, disabled }) => (
  <StyledButton onClick={onClick} disabled={disabled}>
    {text}
  </StyledButton>
);

export default Button;
