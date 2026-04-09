import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import CodeIcon from '@mui/icons-material/Code';
import { CardContainer } from './CardContainer';
import { colors } from '../../../theme';
import { ChipGroupAccordion } from '../../molecules/ChipGroupAccordion/ChipGroupAccordion';
import { within, expect, userEvent } from '@storybook/test';
import type { SvgIconProps } from '@mui/material';

const meta: Meta<typeof CardContainer> = {
  title: 'Organisms/CardContainer',
  component: CardContainer,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'light' },
  },
  tags: ['autodocs'],
  argTypes: {
    accentColor: { control: 'color' },
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outlined'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardContainer>;

/**
 * Default view showing the organism with nested molecules.
 */
export const Default: Story = {
  args: {
    title: 'Technical Skills',
    icon: React.createElement(CodeIcon, { 
        ...({ "data-testid": "card-icon" } as React.HTMLAttributes<HTMLOrSVGElement>) 
    } as SvgIconProps),
    variant: 'filled',
    accentColor: colors.olive,
    filledTextColor: colors.cream,
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <ChipGroupAccordion
          title="Frontend" 
          items={['React', 'Next.js']} 
          accentColor={colors.lavender} 
        />
      </div>
    ),
  },
};
