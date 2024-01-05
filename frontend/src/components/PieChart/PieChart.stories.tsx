import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { PieChart } from '.';
import { pieData } from '../../data/chartsMockData';
import { Margins } from '../../types/Margins.type';

const MARGIN = { horizontal: 150, vertical: 50 } satisfies Partial<Margins>;

const meta = {
  title: 'Example/PieChart',
  component: PieChart,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    pieData
  }
} satisfies Meta<typeof PieChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pieData,
    width: 700,
    height: 400,
    margin: MARGIN
  }
};

export const Hovered: Story = {
  args: {
    pieData,
    width: 700,
    height: 400,
    margin: MARGIN
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const sliceElement1 = canvas.queryByTestId('slice-1');
    const sliceElement2 = canvas.queryByTestId('slice-2');

    expect(sliceElement1).not.toBeNull();
    expect(sliceElement2).not.toBeNull();

    if (sliceElement1 && sliceElement2) {
      await userEvent.hover(sliceElement1);

      waitFor(() => {
        const pieChart = canvas.queryByTestId('pie');
        expect(pieChart).toHaveClass('pie--highlighted');
      });
    }
  }
};
