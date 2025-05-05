import {
  ListItemText,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Typography,
  IconButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SimCardIcon from "@mui/icons-material/SimCard";
import background_guide from "../assets/background_guide.svg";

export const LocalGuide = () => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography variant="h2">Local Guide</Typography>
      <List sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <ListItem
          sx={{ backgroundColor: "secondary.main", borderRadius: 2, py: 2 }}
        >
          <ListItemAvatar>
            <IconButton
              children={<HomeIcon />}
              sx={{
                backgroundColor: "primary.main",
                color: "primary.contrastText",
                borderRadius: 2,
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary="Housing"
            secondary="Get help with renting as apartment"
          />
        </ListItem>
        <ListItem
          sx={{ backgroundColor: "secondary.main", borderRadius: 2, py: 2 }}
        >
          <ListItemAvatar>
            <IconButton
              children={<AccountBalanceIcon />}
              sx={{
                backgroundColor: "primary.main",
                color: "primary.contrastText",
                borderRadius: 2,
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary="Bank Account"
            secondary="Set up an account for convenient funds"
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
              children={<SimCardIcon />}
              sx={{
                backgroundColor: "primary.main",
                color: "primary.contrastText",
                borderRadius: 2,
              }}
            />
          </ListItemAvatar>
          <ListItemText primary="SIM Card" secondary="Find module plans" />
        </ListItem>
      </List>
      <Box>
        <img src={background_guide} alt="background_guide" />
      </Box>
    </Box>
  );
};
