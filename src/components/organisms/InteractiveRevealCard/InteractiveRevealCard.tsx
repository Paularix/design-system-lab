import { Box, Paper, Avatar, Typography, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { colors } from '../../../theme';
import type { ReactNode } from 'react';

interface InteractiveRevealCardProps {
  /** URL for the main profile image or illustration */
  image?: string;
  /** Main title displayed in bold */
  title: string;
  /** Secondary text or category label shown in uppercase */
  subtitle?: string;
  /** Array of informative tags to display as chips */
  tags?: string[];
  /** Color for the organic halo gradient in the background */
  accentColor?: string;
  /** Optional URL that makes the card clickable as a link */
  href?: string;
  /** Optional additional content to inject at the bottom of the card */
  children?: ReactNode;
}

/**
 * A profile or information card that reveals depth on hover.
 * Features an organic background glow and smooth spring animations.
 */
export const InteractiveRevealCard = ({ 
  image, 
  title, 
  subtitle, 
  tags = [], 
  accentColor = colors.olive,
  href,
  children
}: InteractiveRevealCardProps) => {

  const isClickable = Boolean(href);

  // Animated media element with reveal effect
  const MediaElement = (
    <motion.div
      whileHover={{ 
        scale: 1.1, 
        rotate: isClickable ? [0, -2, 2, 0] : 0,
        transition: { duration: 0.3 }
      }}
      style={{ cursor: isClickable ? 'pointer' : 'default', zIndex: 2 }}
    >
      <Avatar 
        src={image}
        variant="rounded" 
        sx={{ 
          width: 140, 
          height: 140, 
          borderRadius: '24px',
          border: `4px solid ${colors.cream}`, 
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          bgcolor: colors.lavender
        }}
      />
    </motion.div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      whileHover={isClickable ? { y: -5 } : {}}
    >
      <Box 
        component={isClickable ? 'a' : 'div'}
        href={href}
        target={isClickable && href?.startsWith('http') ? '_blank' : undefined}
        sx={{ 
          position: 'relative', 
          maxWidth: '380px', 
          mx: 'auto', 
          textDecoration: 'none',
          display: 'block'
        }}
      >
        {/* Organic Halo Gradient Background */}
        <Box sx={{ 
          position: 'absolute', 
          inset: -15, 
          borderRadius: '45px', 
          background: `linear-gradient(135deg, ${accentColor}, transparent)`, 
          zIndex: 0,
          opacity: 0.5
        }} />
        
        <Paper elevation={0} sx={{ 
          p: 4, 
          borderRadius: '35px', 
          bgcolor: 'white', 
          border: `1px solid ${colors.lavender}`, 
          position: 'relative', 
          zIndex: 1, 
          textAlign: 'center',
          transition: 'box-shadow 0.3s ease',
          '&:hover': {
            boxShadow: isClickable ? '0 20px 40px rgba(0,0,0,0.05)' : 'none'
          }
        }}>
          {image && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
              {MediaElement}
            </Box>
          )}

          <Typography variant="h5" sx={{ fontWeight: 900, color: colors.purple, mb: 0.5 }}>
            {title}
          </Typography>

          {subtitle && (
            <Typography sx={{ 
              color: colors.olive, 
              mb: 2.5, 
              fontWeight: 700, 
              textTransform: 'uppercase', 
              letterSpacing: 1.5, 
              fontSize: '0.75rem' 
            }}>
              {subtitle}
            </Typography>
          )}

          <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center" gap={1}>
            {tags.map(tag => (
              <Chip 
                key={tag} 
                label={tag} 
                size="small" 
                sx={{ 
                  bgcolor: colors.lavender, 
                  color: colors.purple, 
                  fontWeight: 800, 
                  fontSize: '0.65rem' 
                }} 
              />
            ))}
          </Stack>

          {children && <Box sx={{ mt: 2 }}>{children}</Box>}
        </Paper>
      </Box>
    </motion.div>
  );
};