import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { colors } from '../../../theme';
import { type ReactNode } from 'react';

interface SectionLinkProps {
  /** URL of the destination section */
  href?: string;
  /** Category or overline text (optional) */
  overline?: string;
  /** Main action title */
  title: string;
  /** Optional decorative icon */
  icon?: ReactNode;
  /** Click handler for SPA navigation */
  onClick?: () => void;
}

export const SectionLink = ({ 
  href = "#", 
  overline, 
  title, 
  icon, 
  onClick 
}: SectionLinkProps) => (
  <Box 
    sx={{ 
      pt: 2, 
      borderTop: `1px solid ${colors.lavender}`, 
      display: 'inline-block',
      cursor: 'pointer' 
    }}
    onClick={onClick}
  >
    {overline && (
      <Typography 
        variant="caption" 
        sx={{ 
          color: colors.olive, 
          fontWeight: 800, 
          textTransform: 'uppercase', 
          mb: 0.5, 
          display: 'block', 
          letterSpacing: 1.5 
        }}
      >
        {overline}
      </Typography>
    )}
    
    <a 
      href={href} 
      style={{ textDecoration: 'none' }} 
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <motion.div 
        whileHover={{ x: 6 }} 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px', 
          color: colors.purple, 
          fontWeight: 800, 
          fontSize: '1.1rem' 
        }}
      >
        {icon}
        {title}
        <ArrowForwardIcon sx={{ fontSize: 18, opacity: 0.6 }} />
      </motion.div>
    </a>
  </Box>
);