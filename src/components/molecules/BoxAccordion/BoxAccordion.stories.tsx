import type { Meta, StoryObj } from '@storybook/react';
import { BoxAccordion } from './BoxAccordion';
import { colors } from '../../../theme';
import React from 'react';
import { TerminalOutlined } from '@mui/icons-material';
import { userEvent, within, expect } from '@storybook/test';
import type { SvgIconProps } from '@mui/material';

const meta: Meta<typeof BoxAccordion> = {
    title: 'Molecules/BoxAccordion',
    component: BoxAccordion,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BoxAccordion>;

/**
 * Automated Lifecycle Test:
 * Focuses on Visibility transitions since the element persists in the DOM.
 */
export const AutomatedExpansionCycle: Story = {
    args: {
        title: 'Auto Expansion Test',
        subtitle: 'Testing Visibility',
        badgeText: 'Auto',
        infoTag: '2026',
        description: 'Verifies the expand/collapse visual states.',
        details: [
            'Automated Detail 1',
        ],
        icon: React.createElement(TerminalOutlined, { 
            ...({ "data-testid": "auto-icon" } as React.HTMLAttributes<HTMLOrSVGElement>),
            sx: { fontSize: 20 } 
        } as SvgIconProps),
        accentColor: colors.purple,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const title = canvas.getByText('Auto Expansion Test');
        const container = title.closest('div');

        if (container instanceof HTMLElement) {
            // STEP 1: INITIAL STATE
            // The element exists but should be hidden (height: 0 or opacity: 0)
            const detail = canvas.getByText('Automated Detail 1');
            await expect(detail).not.toBeVisible();

            // STEP 2: OPENING (Hover)
            await userEvent.hover(container);
            
            // Wait for Framer Motion animation to complete visibility
            // We use a small delay or findBy to allow the transition
            await new Promise((resolve) => setTimeout(resolve, 600));
            await expect(detail).toBeVisible();

            // STEP 3: CLOSING (Unhover)
            await userEvent.unhover(container);

            // Wait for collapse animation
            await new Promise((resolve) => setTimeout(resolve, 600));

            // STEP 4: VERIFY HIDDEN AGAIN
            // The element is still in DOM but invisible to the user
            await expect(detail).not.toBeVisible();
        }
    },
};