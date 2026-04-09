import { Box, Typography, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { colors } from '../../../theme';

interface ChipGroupAccordionProps {
  /** The category title (e.g., "Frontend", "Languages") */
  title: string;
  /** List of strings to be displayed as Chips when expanded */
  items: string[];
  /** Accent color for the title and the animated arrow */
  accentColor?: string;
  /** Custom color for the chips. If not provided, it will use accentColor */
  chipColor?: string;
}

/**
 * An interactive accordion-style component that reveals a collection 
 * of Chips on hover. Designed specifically for skill categories.
 */
export const ChipGroupAccordion = ({ 
  title, 
  items, 
  accentColor = colors.lavender,
  chipColor
}: ChipGroupAccordionProps) => {
  const finalChipColor = chipColor || accentColor;

  return (
    <motion.div initial="initial" whileHover="hover">
      <Box sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.15)', pb: 1.5, mb: 1.5 }}>
        
        {/* Clickable/Hoverable Header */}
        <Stack 
          direction="row" 
          justifyContent="space-between" 
          alignItems="center" 
          sx={{ cursor: 'pointer' }}
        >
          <Typography variant="subtitle2" sx={{ 
            color: accentColor, 
            fontWeight: 800, 
            textTransform: 'uppercase', 
            fontSize: '0.7rem', 
            letterSpacing: 1.2 
          }}>
            {title}
          </Typography>
          
          {/* Animated arrow that shifts to the right */}
          <motion.div variants={{ initial: { x: 0 }, hover: { x: 5 } }}>
            <ArrowForwardIosIcon sx={{ color: accentColor, fontSize: '0.8rem' }} />
          </motion.div>
        </Stack>

        {/* Expandable content revealing the Chips */}
        <motion.div 
          variants={{ 
            initial: { height: 0, opacity: 0, marginTop: 0 }, 
            hover: { height: 'auto', opacity: 1, marginTop: 12 } 
          }} 
          transition={{ duration: 0.3, ease: "easeOut" }} 
          style={{ overflow: 'hidden' }}
        >
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {items.map(item => (
              <Chip 
                key={item} 
                label={item} 
                size="small" 
                sx={{ 
                  bgcolor: `${finalChipColor}15`, 
                  color: finalChipColor, 
                  border: `1px solid ${finalChipColor}44`, 
                  fontWeight: 600,
                  fontSize: '0.7rem',
                  '&:hover': {
                    bgcolor: `${finalChipColor}33`,
                  }
                }} 
              />
            ))}
          </Box>
        </motion.div>
      </Box>
    </motion.div>
  );
};