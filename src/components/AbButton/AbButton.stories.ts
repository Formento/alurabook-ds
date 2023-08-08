import type { Meta, StoryObj } from '@storybook/react';
import { AbButton } from './index';

const meta = {
  title: 'Components/AbButton',
  component: AbButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'string',
      description: 'Text that will be displayed inside the button.',
    },
  },
} satisfies Meta<typeof AbButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    secondary: true,
  },
};
