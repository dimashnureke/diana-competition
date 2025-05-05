import {
  ListItemText,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      sx={{ minHeight: "calc(100vh - 80px)", justifyContent: "space-between" }}
    >
      <Box display="flex" flexDirection="column" gap={2}>
        <Typography variant="h2">Welcome!</Typography>
        <Typography variant="h5">
          Smart Support for International Students
        </Typography>
        <List sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <ListItem
            onClick={() => {
              navigate("/guide");
            }}
            sx={{ backgroundColor: "secondary.main", borderRadius: 2, py: 2 }}
          >
            <ListItemAvatar>
              <IconButton
                children={<FmdGoodIcon />}
                sx={{
                  backgroundColor: "primary.main",
                  color: "primary.contrastText",
                  borderRadius: 2,
                }}
              />
            </ListItemAvatar>
            <ListItemText primary="Local Guide" />
          </ListItem>
          <ListItem
            sx={{ backgroundColor: "secondary.main", borderRadius: 2, py: 2 }}
          >
            <ListItemAvatar
              onClick={() => {
                navigate("/find");
              }}
            >
              <IconButton
                children={<EmojiEmotionsIcon />}
                sx={{
                  backgroundColor: "primary.main",
                  color: "primary.contrastText",
                  borderRadius: 2,
                }}
              />
            </ListItemAvatar>
            <ListItemText primary="Find a Buddy" />
          </ListItem>
          <ListItem
            sx={{ backgroundColor: "secondary.main", borderRadius: 2, py: 2 }}
          >
            <ListItemAvatar
              onClick={() => {
                navigate("/events");
              }}
            >
              <IconButton
                children={<DateRangeIcon />}
                sx={{
                  backgroundColor: "primary.main",
                  color: "primary.contrastText",
                  borderRadius: 2,
                }}
              />
            </ListItemAvatar>
            <ListItemText primary="Events" />
          </ListItem>
        </List>
      </Box>

      <Box sx={{ mt: "auto", pt: 4 }}>
        <Button variant="contained" color="primary" size="large" fullWidth>
          Home
        </Button>
      </Box>
    </Box>
  );
};
