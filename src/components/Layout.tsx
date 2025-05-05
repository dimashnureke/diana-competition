import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Box, Container } from "@mui/material";

export const Layout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "white",
      }}
    >
      <Header />
      <Container
        maxWidth="md"
        sx={{ flex: 1, padding: 2, backgroundColor: "white" }}
      >
        <Outlet />
      </Container>
    </Box>
  );
};
