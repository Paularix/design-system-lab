import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import { Footer } from './Footer';
import { colors } from '../../../theme';

const meta: Meta<typeof Footer> = {
    title: 'Organisms/Footer',
    component: Footer,
    parameters: {
        layout: 'fullscreen',
    },
    decorators: [
        (Story) => (
            <div style= {{ height: '150vh', paddingTop: '50vh' }} >
    <div style={{ padding: '20px', textAlign: 'center', color: '#888' }}>
        <p>Scroll down to the footer...</p>
            < p > Then scroll up slightly to trigger the "Exit Intent" message ✨</p>
                </div>
                < Story />
                </div>
    ),
  ],
tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    title: "Let's Connect",
    exitMessage: "Wait! Let’s turn this visit into a chat ✨",
    exitIcon: React.createElement(WavingHandIcon, { sx: { color: colors.olive, fontSize: 18 } }),
    email: "pmarcosc5@gmail.com",
    footerNote: "Crafted with soul & code",
  },
};


export const Minimalist: Story = {
  args: {
    title: "Contact",
    exitMessage: "Bye!",
    footerNote: "v1.0",
  },
};