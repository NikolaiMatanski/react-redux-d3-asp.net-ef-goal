import type { Meta, StoryObj } from '@storybook/react';
import { LineChart } from '.';
import { lineData } from '../../data/chartsMockData';
import { Margins } from '../../types/Margins.type';

const MARGIN = {
  top: 30,
  right: 30,
  bottom: 50,
  left: 50
} satisfies Margins;

const meta = {
  title: 'Example/LineChart',
  component: LineChart,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    lineData
  }
} satisfies Meta<typeof LineChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    lineData,
    width: 700,
    height: 400,
    margin: MARGIN
  }
};
