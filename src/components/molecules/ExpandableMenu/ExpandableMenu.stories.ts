import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import { ExpandableMenu } from './ExpandableMenu';
import { colors } from '../../../theme';
import { userEvent, within, expect } from '@storybook/test';
import type { SvgIconProps } from '@mui/material';

const meta: Meta<typeof ExpandableMenu> = {
    title: 'Molecules/ExpandableMenu',
    component: ExpandableMenu,
    parameters: {
        layout: 'centered',
        backgrounds: { default: 'light' },
    },
    tags: ['autodocs'],
    argTypes: {
        accentColor: { control: { type: 'color' } },
    },
};

export default meta;

type Story = StoryObj<typeof ExpandableMenu>;

export const Default: Story = {
    args: {
        title: 'Languages',
        mainIcon: React.createElement(LanguageIcon),
        accentColor: colors.olive,
        items: [
            { id: '1', label: 'English', sublabel: 'Professional', visual: '🇬🇧' },
            { id: '2', label: 'Spanish', sublabel: 'Native', visual: 'ES' },
        ],
    },
};

export const AutomatedTest: Story = {
    args: {
        title: 'Hover Menu',
        // Adding data-testid to the icon to find the menu trigger reliably
        mainIcon: React.createElement(LanguageIcon, {
            ...({ "data-testid": "menu-icon" } as React.HTMLAttributes<HTMLOrSVGElement>),
        } as SvgIconProps),
        accentColor: colors.purple,
        items: [
            { id: '1', label: 'Hidden Item', sublabel: 'Visible on hover', visual: '✨' },
        ],
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        // Find the trigger by the icon since the title is hidden initially
        const icon = canvas.getByTestId('menu-icon');
        const container = icon.closest('div[style*="cursor: pointer"]');

        if (container instanceof HTMLElement) {
            // Action: Hover to expand
            await userEvent.hover(container);

            // Now that we hovered, the title "Hover Menu" should appear
            const title = await canvas.findByText('Hover Menu');
            await expect(title).toBeVisible();

            // Verify the hidden item is also visible
            const item = await canvas.findByText('Hidden Item');
            await expect(item).toBeVisible();

            // Action: Unhover to collapse
            await userEvent.unhover(container);
            await new Promise(r => setTimeout(r, 600));

            // Verify it hides again
            await expect(item).not.toBeVisible();
        }
    },
};