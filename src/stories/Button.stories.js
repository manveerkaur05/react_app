// src/stories/Button.stories.js
import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

export default {
  title: 'Button',
  component: Button,
};

export const Default = () => <Button text="Click me" onClick={action('clicked')} />;
export const Disabled = () => <Button text="Disabled" onClick={action('clicked')} disabled />;
