import { Paper, Typography, Box } from '@mui/material';
import { colors } from '../../../theme';
import React from 'react';

interface CardContainerProps {
  /** The primary title for the section */
  title: string;
  /** Optional decorative icon displayed next to the title */
  icon?: React.ReactNode;
  /** Inner content of the card (e.g., skill groups or achievement tiles) */
  children: React.ReactNode;
  /** Visual style: 'filled' (with solid background) or 'outlined' (border only) */
  variant?: 'filled' | 'outlined';
  /** Primary brand color for background or border depending on the variant */
  accentColor?: string;
  /** Text color used exclusively when variant is 'filled' */
  filledTextColor?: string;
}

/**
 * A versatile wrapper component that groups related information.
 * It provides a consistent container style for skills, certifications, and academic data.
 */
export const CardContainer = ({ 
  title, 
  icon, 
  children, 
  variant = 'filled', 
  accentColor = colors.olive, 
  filledTextColor = colors.cream 
}: CardContainerProps) => (
  <Paper 
    elevation={0} 
    sx={{ 
      p: { xs: 3, md: 4 }, 
      borderRadius: '24px', 
      bgcolor: variant === 'filled' ? accentColor : 'transparent', 
      color: variant === 'filled' ? filledTextColor : colors.purple,
      border: variant === 'outlined' ? `2px solid ${accentColor}` : 'none',
      overflow: 'hidden', 
      boxShadow: variant === 'filled' ? `0 10px 40px ${accentColor}33` : 'none',
      transition: 'all 0.3s ease'
    }}
  >
    <Typography 
      variant="h5" 
      sx={{ 
        fontWeight: 800, 
        mb: 3, 
        display: 'flex', 
        alignItems: 'center', 
        gap: 1.5,
        fontSize: '1.25rem',
        color: variant === 'outlined' ? colors.purple : filledTextColor
      }}
    >
      {icon} {title}
    </Typography>
    
    <Box>
      {children}
    </Box>
  </Paper>
);