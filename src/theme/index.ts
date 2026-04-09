import { createTheme } from '@mui/material/styles';

export const colors = {
    cream: '#F3EFE0',
    olive: '#808034',
    lavender: '#EAE8F2',
    purple: '#6B437D',
};

export const theme = createTheme({
    palette: {
        primary: { main: colors.purple },
        secondary: { main: colors.olive },
        background: { default: colors.cream },
    },
    shape: { borderRadius: 20 },
});