import { useState } from 'react';
import { Box, Typography, Stack, Divider, IconButton, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import { colors } from '../../../theme';

interface Testimonial {
  /** The quote or feedback text */
  text: string;
  /** The person or role providing the testimonial */
  author: string;
}

interface TestimonialOverlayProps {
  /** Text to show on the trigger button */
  triggerLabel?: string;
  /** Array of testimonial objects to display */
  testimonials: Testimonial[];
  /** Optional callback when closed */
  onClose?: () => void;
  /** Background color for the overlay surface */
  overlayColor?: string;
  /** Color for the trigger button and author names (defaults to lavender) */
  accentColor?: string;
}

/**
 * A full-surface overlay designed to highlight feedback and social proof.
 * It features a customizable backdrop and smooth scaling animations.
 */
export const TestimonialOverlay = ({ 
  triggerLabel = "View Testimonials", 
  testimonials,
  onClose,
  overlayColor = 'rgba(114, 52, 128, 0.98)',
  accentColor = colors.lavender
}: TestimonialOverlayProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  return (
    <>
      {/* Trigger Button */}
      <Button 
        variant="outlined" 
        onClick={() => setIsOpen(true)}
        sx={{ 
          borderColor: accentColor, 
          color: accentColor,
          '&:hover': {
            borderColor: accentColor,
            bgcolor: `${accentColor}10`
          }
        }}
      >
        {triggerLabel}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={handleClose}
            style={{ 
              position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
              backgroundColor: overlayColor, 
              zIndex: 100, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              padding: '40px', 
              cursor: 'pointer',
              borderRadius: '24px'
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              style={{ width: '100%', maxWidth: '500px' }}
              onClick={(e) => e.stopPropagation()} 
            >
              <IconButton 
                onClick={handleClose}
                sx={{ position: 'absolute', top: 20, right: 20, color: 'white' }}
                aria-label="close-overlay"
              >
                <CloseIcon />
              </IconButton>

              <Stack spacing={4}>
                {testimonials.map((t, i) => (
                  <Box key={i}>
                    <Typography variant="h6" sx={{ 
                      color: colors.cream, 
                      fontStyle: 'italic', 
                      mb: 1.5, 
                      textAlign: 'center', 
                      fontWeight: 400,
                      lineHeight: 1.6
                    }}>
                      "{t.text}"
                    </Typography>
                    <Typography variant="subtitle1" sx={{ 
                      textAlign: 'right', 
                      fontWeight: 800, 
                      color: accentColor,
                      letterSpacing: 0.5
                    }}>
                      — {t.author}
                    </Typography>
                    {i < testimonials.length - 1 && (
                      <Divider sx={{ mt: 4, borderColor: 'rgba(255,255,255,0.1)' }} />
                    )}
                  </Box>
                ))}
              </Stack>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};