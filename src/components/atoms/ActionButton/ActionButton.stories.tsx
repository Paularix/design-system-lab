import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { ActionButton } from './ActionButton';
import { userEvent, within, expect, fn } from '@storybook/test';
import type { SvgIconProps } from '@mui/material';

const meta: Meta<typeof ActionButton> = {
    title: 'Atoms/ActionButton',
    component: ActionButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onClick: fn() }, 
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['primary', 'outline'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof ActionButton>;

export const Primary: Story = {
    args: {
        label: 'Explore more',
        variant: 'primary',
    },
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement);
        const button = canvas.getByRole('button');
        await expect(canvas.getByText('Explore more')).toBeInTheDocument();
        await userEvent.click(button);
        await expect(args.onClick).toHaveBeenCalled();
    },
};

export const CustomIcon: Story = {
    args: {
        label: 'Search projects',
        variant: 'primary',
        icon: React.createElement(SearchIcon, {
            ...({ "data-testid": "custom-icon" } as React.HTMLAttributes<HTMLOrSVGElement>),
            sx: { fontSize: 20 }
        } as SvgIconProps),
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await expect(canvas.getByTestId('custom-icon')).toBeInTheDocument();
    },
};