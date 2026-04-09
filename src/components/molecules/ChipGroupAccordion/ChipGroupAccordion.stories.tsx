import type { Meta, StoryObj } from '@storybook/react';
import { ChipGroupAccordion } from './ChipGroupAccordion';
import { colors } from '../../../theme';
import { userEvent, within, expect } from '@storybook/test';

const meta: Meta<typeof ChipGroupAccordion> = {
    title: 'Molecules/ChipGroupAccordion',
    component: ChipGroupAccordion,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        backgrounds: { default: 'light' }, 
    },
};

export default meta;
type Story = StoryObj<typeof ChipGroupAccordion>;

export const Default: Story = {
    args: { 
        title: 'Static Stack', 
        items: ['React', 'TS'], 
        accentColor: colors.olive 
    },
};

export const Hover: Story = {
    args: { 
        title: 'Hover Stack', 
        items: ['Visible on Hover'], 
        accentColor: '#333333' 
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const title = canvas.getByText('Hover Stack');
        const container = title.closest('div');
        const chip = canvas.getByText('Visible on Hover');

        await expect(chip).not.toBeVisible();
        if (container instanceof HTMLElement) {
            await userEvent.hover(container);
            await new Promise(r => setTimeout(r, 600));
            await expect(chip).toBeVisible();
            await userEvent.unhover(container);
            await new Promise(r => setTimeout(r, 600));
            await expect(chip).not.toBeVisible();
        }
    },
};