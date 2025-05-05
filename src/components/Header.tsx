import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "background.paper",
        color: "black",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="md">
        <Toolbar
          sx={{
            padding: "0.5rem 0",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {!isHomePage && (
            <IconButton
              edge="start"
              color="primary"
              aria-label="back"
              onClick={handleBackClick}
              sx={{
                mr: 2,
                position: "absolute",
                left: 0,
              }}
            >
              <ArrowBackIcon />
            </IconButton>
          )}
          <Typography
            variant="h6"
            color="primary"
            sx={{
              flexGrow: 0,
              textAlign: "center",
            }}
          >
            UniMate
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
