// src/components/Label.js
import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  font-weight: bold;
  color: #333333;
`;

const Label = ({ text }) => <StyledLabel>{text}</StyledLabel>;

export default Label;
