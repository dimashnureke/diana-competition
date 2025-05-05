import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

export const NotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <Typography variant="h2" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom>
        The page you are looking for does not exist.
      </Typography>
      <Button
        component={RouterLink}
        to="/"
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
      >
        Return to Home
      </Button>
    </Box>
  );
};
