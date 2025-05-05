import {
  ListItemText,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Typography,
  Select,
  MenuItem,
  Avatar,
} from "@mui/material";
import { useState } from "react";

export const FindBuddy = () => {
  const [course, setCourse] = useState("1");
  const [language, setLanguage] = useState("chinese");

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography variant="h2">Find a Buddy</Typography>
      <Box display="flex" flexDirection="column" gap={1}>
        <Typography>Course</Typography>
        <Select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          displayEmpty
          sx={{
            backgroundColor: "secondary.main",
            color: "black",
            borderRadius: 2,
            border: "none",
            "& .MuiOutlinedInput-notchedOutline": { border: "none" },
            "&:hover .MuiOutlinedInput-notchedOutline": { border: "none" },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
        >
          <MenuItem value="1">Economics</MenuItem>
          <MenuItem value="2">Math</MenuItem>
          <MenuItem value="3">Physics</MenuItem>
        </Select>
      </Box>
      <Box display="flex" flexDirection="column" gap={1}>
        <Typography>Language</Typography>
        <Select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          displayEmpty
          sx={{
            backgroundColor: "secondary.main",
            color: "black",
            borderRadius: 2,
            border: "none",
            "& .MuiOutlinedInput-notchedOutline": { border: "none" },
            "&:hover .MuiOutlinedInput-notchedOutline": { border: "none" },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
        >
          <MenuItem value="chinese">Chinese</MenuItem>
          <MenuItem value="english">English</MenuItem>
          <MenuItem value="spanish">Spanish</MenuItem>
        </Select>
      </Box>

      <Typography variant="h6">Study Buddy Matches</Typography>
      <List sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <ListItem sx={{ borderRadius: 2, py: 2 }}>
          <ListItemAvatar>
            <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80" />
          </ListItemAvatar>
          <ListItemText
            primary="Anna"
            secondary="Computer Science 
            City University"
          />
        </ListItem>

        <ListItem sx={{ borderRadius: 2, py: 2 }}>
          <ListItemAvatar>
            <Avatar src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80" />
          </ListItemAvatar>
          <ListItemText
            primary="Michael"
            secondary="Economics
            State University"
          />
        </ListItem>

        <ListItem sx={{ borderRadius: 2, py: 2 }}>
          <ListItemAvatar>
            <Avatar src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80" />
          </ListItemAvatar>
          <ListItemText
            primary="Linda"
            secondary="Business Administration
            Global College"
          />
        </ListItem>
      </List>
    </Box>
  );
};
