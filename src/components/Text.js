// src/components/Text.js
import React from 'react';
import styled from 'styled-components';

const StyledText = styled.p`
  font-size: 16px;
  color: #333333;
`;

const Text = ({ text }) => <StyledText>{text}</StyledText>;

export default Text;
