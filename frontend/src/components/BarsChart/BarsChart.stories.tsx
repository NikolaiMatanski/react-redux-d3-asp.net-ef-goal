import type { Meta, StoryObj } from '@storybook/react';
import { BarsChart } from '.';
import { barsData } from '../../data/chartsMockData';
import { Margins } from '../../types/Margins.type';

const MARGIN = {
  top: 30,
  right: 30,
  bottom: 50,
  left: 50
} satisfies Margins;

const meta = {
  title: 'Example/BarsChart',
  component: BarsChart,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    barsData
  }
} satisfies Meta<typeof BarsChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    barsData,
    width: 700,
    height: 400,
    margin: MARGIN
  }
};
