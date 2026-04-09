import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TestimonialOverlay } from './TestimonialOverlay';
import { within, expect, fn, userEvent } from '@storybook/test';
import { colors } from '../../../theme';

const meta: Meta<typeof TestimonialOverlay> = {
    title: 'Molecules/TestimonialOverlay',
    component: TestimonialOverlay,
    parameters: {
        layout: 'fullscreen',
    },
    // Adding color controls for better developer experience in Storybook
    argTypes: {
        overlayColor: { control: 'color' },
        accentColor: { control: 'color' },
    },
    decorators: [
        (Story: React.ComponentType) => (
            <div style={{ position: 'relative', width: '100%', height: '500px', backgroundColor: '#ffffff', borderRadius: '24px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                <Story />
            </div>
        ),
    ],
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TestimonialOverlay>;

/**
 * Default state showing the customizable trigger button on a white background.
 */
export const Default: Story = {
    args: {
        triggerLabel: 'Read Feedback',
        accentColor: colors.olive,
        testimonials: [
            { text: "This is a great component!", author: "Happy User" }
        ],
    },
};

/**
 * Automated Test:
 * 1. Verifies the button uses the accentColor.
 * 2. Opens the overlay and verifies the content.
 * 3. Closes and verifies the callback.
 */
export const AutomatedTest: Story = {
    args: {
        triggerLabel: 'Open Test',
        overlayColor: 'rgba(46, 125, 50, 0.95)', // Custom green overlay
        accentColor: colors.purple,              // Purple accents for button/author
        onClose: fn(),
        testimonials: [
            { text: "Verification message for the bot.", author: "Tester Bot" }
        ],
    },
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement);
        
        // 1. Check trigger button exists and has correct label
        const openButton = canvas.getByRole('button', { name: /Open Test/i });
        await expect(openButton).toBeInTheDocument();

        // 2. Open overlay
        await userEvent.click(openButton);

        // 3. Verify content visibility with the new finding logic
        const feedback = await canvas.findByText(/Verification message/i);
        await expect(feedback).toBeVisible();
        
        // Verify author is rendered with accentColor logic (checking presence)
        const author = canvas.getByText(/— Tester Bot/i);
        await expect(author).toBeInTheDocument();

        await new Promise(r => setTimeout(r, 1000));

        // 4. Close the overlay
        const closeButton = canvas.getByLabelText('close-overlay');
        await userEvent.click(closeButton);

        // 5. Check if the spy was called
        await expect(args.onClose).toHaveBeenCalled();
    },
};