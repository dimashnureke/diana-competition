import { createTheme } from "@mui/material/styles";

// Define your color palette
const colors = {
  primary: {
    main: "#3FA0FE",
    light: "#757de8",
    dark: "#002984",
    contrastText: "#fff",
    white: "#ffffff",
  },
  secondary: {
    main: "#E2EBF2",
    light: "#ff4081",
    dark: "#c51162",
    contrastText: "#fff",
  },
  background: {
    default: "#f5f5f5",
    paper: "#fff",
  },
  text: {
    primary: "#212121",
    secondary: "#757575",
  },
  error: {
    main: "#f44336",
  },
  warning: {
    main: "#ff9800",
  },
  info: {
    main: "#2196f3",
  },
  success: {
    main: "#4caf50",
  },
};

// Create a theme instance
export const theme = createTheme({
  palette: {
    primary: colors.primary,
    secondary: colors.secondary,
    background: colors.background,
    text: colors.text,
    error: {
      main: colors.error.main,
    },
    warning: {
      main: colors.warning.main,
    },
    info: {
      main: colors.info.main,
    },
    success: {
      main: colors.success.main,
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeightRegular: 600,
    fontWeightMedium: 700,
    fontWeightBold: 800,
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
    },
    h2: {
      fontWeight: 700,
      fontSize: "2rem",
    },
    h3: {
      fontWeight: 700,
      fontSize: "1.75rem",
    },
    h4: {
      fontWeight: 700,
      fontSize: "1.5rem",
    },
    h5: {
      fontWeight: 700,
      fontSize: "1.5rem",
    },
    h6: {
      fontWeight: 700,
      fontSize: "1.25rem",
    },
    subtitle1: {
      fontWeight: 600,
    },
    subtitle2: {
      fontWeight: 600,
    },
    body1: {
      fontWeight: 600,
    },
    body2: {
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontWeight: 600,
        },
        secondary: {
          fontWeight: 600,
          color: "#000000",
        },
      },
    },
  },
});
