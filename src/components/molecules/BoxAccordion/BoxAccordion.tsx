import { Box, Paper, Typography, Stack, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import AddIcon from '@mui/icons-material/Add';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { colors } from '../../../theme';

interface BoxAccordionProps {
  /** Main title */
  title: string;
  /** Subtitle */
  subtitle: string;
  /** Top label */
  badgeText: string;
  /** Date or location */
  infoTag: string;
  /** Brief descriptive text */
  description: string;
  /** List of key points or details */
  details: string[];
  /** Main card icon */
  icon: React.ReactNode;
  /** Icon for list items (default is a check) */
  listIcon?: React.ReactNode;
  /** Brand color for border and highlighted texts */
  accentColor?: string;
}

export const BoxAccordion = ({
  title,
  subtitle,
  badgeText,
  infoTag,
  description,
  details,
  icon,
  listIcon = <CheckCircleOutlineIcon sx={{ fontSize: 16 }} />,
  accentColor = colors.purple
}: BoxAccordionProps) => {
  return (
    <motion.div whileHover="hover" initial="initial">
      <Paper 
        elevation={0} 
        sx={{ 
          p: { xs: 3, md: 4 }, 
          borderRadius: '24px', 
          border: `1px solid ${colors.lavender}`, 
          bgcolor: 'white', 
          position: 'relative', 
          overflow: 'hidden',
          transition: 'all 0.3s ease-in-out',
          '&:hover': { 
            borderColor: accentColor, 
            boxShadow: `0 10px 30px rgba(0,0,0,0.05)` 
          } 
        }}
      >
        <Box sx={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '6px', 
          height: '100%', 
          bgcolor: accentColor 
        }} />
        
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
          <Stack direction="row" spacing={2} alignItems="center">
            <Box sx={{ 
              p: 1, 
              bgcolor: colors.lavender, 
              borderRadius: '10px', 
              display: 'flex',
              color: accentColor 
            }}>
              {icon}
            </Box>
            <Typography variant="subtitle2" sx={{ 
              fontWeight: 800, 
              color: accentColor, 
              textTransform: 'uppercase',
              letterSpacing: 1
            }}>
              {badgeText}
            </Typography>
          </Stack>
          
          <motion.div variants={{ initial: { rotate: 0 }, hover: { rotate: 45 } }}>
            <AddIcon sx={{ color: colors.lavender }} />
          </motion.div>
        </Stack>

        <Typography variant="h4" sx={{ fontWeight: 800, mt: 2, mb: 0.5, fontSize: { xs: '1.5rem', md: '2rem' } }}>
          {title}
        </Typography>
        
        <Typography variant="h6" sx={{ color: colors.olive, mb: 0.5, fontWeight: 600 }}>
          {subtitle}
        </Typography>
        
        <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 700, mb: 1 }}>
          {infoTag}
        </Typography>

        <motion.div 
          variants={{
            initial: { height: 0, opacity: 0, marginTop: 0 },
            hover: { height: 'auto', opacity: 1, marginTop: 16 }
          }} 
          transition={{ duration: 0.4, ease: "easeInOut" }} 
          style={{ overflow: 'hidden' }}
        >
          <Divider sx={{ mb: 2, opacity: 0.5 }} />
          <Typography variant="body2" sx={{ color: '#4a4a3a', mb: 2, fontStyle: 'italic' }}>
            {description}
          </Typography>
          
          <List sx={{ p: 0 }}>
            {details.map((detail, index) => (
              <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 28, color: accentColor }}>
                  {listIcon}
                </ListItemIcon>
                <ListItemText 
                  primary={detail} 
                  primaryTypographyProps={{ 
                    variant: 'body2', 
                    fontWeight: 600, 
                    color: accentColor 
                  }} 
                />
              </ListItem>
            ))}
          </List>
        </motion.div>
      </Paper>
    </motion.div>
  );
};