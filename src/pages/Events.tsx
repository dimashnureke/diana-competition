import {
  ListItemText,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Typography,
  IconButton,
} from "@mui/material";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import SpaIcon from "@mui/icons-material/Spa";
import ChatIcon from "@mui/icons-material/Chat";
import background_events from "../assets/background_events.svg";

export const Events = () => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography variant="h2">Wellness</Typography>
      <List sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <ListItem
          sx={{ backgroundColor: "secondary.main", borderRadius: 2, py: 2 }}
        >
          <ListItemAvatar>
            <IconButton
              children={<ContentPasteSearchIcon />}
              sx={{
                backgroundColor: "primary.main",
                color: "primary.contrastText",
                borderRadius: 2,
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary="Mental Health Survey"
            secondary="Check your well-being"
          />
        </ListItem>
        <ListItem
          sx={{ backgroundColor: "secondary.main", borderRadius: 2, py: 2 }}
        >
          <ListItemAvatar>
            <IconButton
              children={<SpaIcon />}
              sx={{
                backgroundColor: "primary.main",
                color: "primary.contrastText",
                borderRadius: 2,
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary="Relaxation Exercises"
            secondary="Often calmin advics"
          />
        </ListItem>
        <ListItem
          sx={{
            backgroundColor: "secondary.main",
            borderRadius: 2,
            py: 1,
            px: 2,
          }}
        >
          <ListItemAvatar>
            <IconButton
              children={<ChatIcon />}
              sx={{
                backgroundColor: "primary.main",
                color: "primary.contrastText",
                borderRadius: 2,
              }}
            />
          </ListItemAvatar>
          <ListItemText primary="Chat Support" secondary="On-demand help" />
        </ListItem>
      </List>
      <Box>
        <img
          src={background_events}
          alt="background_events"
          style={{ width: "100%" }}
        />
      </Box>
    </Box>
  );
};
