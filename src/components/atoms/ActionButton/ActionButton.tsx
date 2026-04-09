import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { colors } from '../../../theme'; // Ajusta la ruta a tu archivo de tema

interface PrimaryButtonProps {
  /** The text displayed inside the button */
  label: string;
  /** Main visual style or outline only */
  variant?: 'primary' | 'outline';
  /** Optional icon (arrow by default) */
  icon?: ReactNode;
  /** Whether it should take up the full width of the container */
  fullWidth?: boolean;
  /** Function executed when clicked */
  onClick?: () => void;
}

export const ActionButton = ({ 
  label, 
  variant = 'primary', 
  icon = <ArrowForwardIcon sx={{ fontSize: 20 }} />, 
  fullWidth = false,
  onClick 
}: PrimaryButtonProps) => {
  const isPrimary = variant === 'primary';

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      style={{
        background: isPrimary ? colors.purple : 'transparent',
        border: isPrimary ? 'none' : `2px solid ${colors.purple}`,
        padding: '12px 32px',
        borderRadius: '40px',
        fontWeight: 700,
        color: isPrimary ? colors.cream : colors.purple,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        fontSize: '1rem',
        width: fullWidth ? '100%' : 'auto',
        transition: 'all 0.2s ease',
        fontFamily: 'inherit'
      }}
    >
      {label} {icon}
    </motion.button>
  );
};