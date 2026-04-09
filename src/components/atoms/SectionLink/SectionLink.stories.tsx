import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ExploreIcon from '@mui/icons-material/Explore';
import { SectionLink } from './SectionLink';
import { userEvent, within, expect, fn } from '@storybook/test';
import type { SvgIconProps } from '@mui/material';

const meta: Meta<typeof SectionLink> = {
    title: 'Atoms/SectionLink',
    component: SectionLink,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        onClick: fn() 
    },
};

export default meta;
type Story = StoryObj<typeof SectionLink>;

/**
 * Basic rendering test for structural elements
 */
export const Default: Story = {
    args: {
        title: 'Explore my projects',
        overline: 'Portfolio',
        href: '#',
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await expect(canvas.getByText('Portfolio')).toBeInTheDocument();
        await expect(canvas.getByText('Explore my projects')).toBeInTheDocument();
    },
};

/**
 * Interaction test to ensure hover stability
 */
export const HoverInteraction: Story = {
    args: {
        title: 'View full experience',
        href: '#',
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const linkContainer = canvas.getByRole('link');

        await userEvent.hover(linkContainer);
        await expect(linkContainer).toBeVisible();
    },
};

/**
 * Icon injection test using strict typing for MUI Icon attributes
 */
export const WithCustomIcon: Story = {
    args: {
        title: 'Go to Showroom',
        overline: 'Library',
        href: '#',
        icon: React.createElement(ExploreIcon, {
            ...({ "data-testid": "explore-icon" } as React.HTMLAttributes<HTMLOrSVGElement>),
            sx: { fontSize: 20 }
        } as SvgIconProps),
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await expect(canvas.getByTestId('explore-icon')).toBeInTheDocument();
    },
};