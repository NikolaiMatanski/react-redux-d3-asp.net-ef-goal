import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    primary: {
      defaultValue: true,
      description: 'primary',
      name: 'primary',
      type: 'boolean'
    }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    primary: false,
    children: 'Click me'
  }
};

export const Primary: Story = {
  args: {
    primary: true,
    children: 'Click me'
  }
};
