import type { Meta, StoryObj } from '@storybook/react';
import { InteractiveRevealCard } from './InteractiveRevealCard';
import { colors } from '../../../theme';
import { within, expect } from '@storybook/test';

const meta: Meta<typeof InteractiveRevealCard> = {
    title: 'Organisms/InteractiveRevealCard',
    component: InteractiveRevealCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        accentColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof InteractiveRevealCard>;

/**
 * Default story that verifies the component renders as a link 
 * with the correct destination.
 */
export const Default: Story = {
    args: {
        title: 'Title',
        subtitle: 'subtitle',
        image: 'https://via.placeholder.com/140',
        tags: ['Tag1', 'Tag2'],
        accentColor: colors.purple,
        href: 'https://linkedin.com'
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        

        const link = canvas.getByRole('link');

        await expect(link).toBeInTheDocument();

        await expect(link).toHaveAttribute('href', 'https://linkedin.com');

        await expect(link).toHaveAttribute('target', '_blank');
        
        const title = canvas.getByText('Title');
        await expect(link).toContainElement(title);
    },
};