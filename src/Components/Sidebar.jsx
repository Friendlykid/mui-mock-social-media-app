import { Box, List, ListItem, ListItemButton } from "@mui/material";
import { sidebarArray } from "../utils/sidebarArray";
import SwitchDarkMode from "./SwitchDarkMode";

export default function Sidebar({ setMode, mode }) {
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
        paddingLeft: "5px",
      }}
    >
      <Box sx={{ position: "fixed", justifyContent: "left" }}>
        <List>
          {sidebarArray.map((item, i) => {
            return (
              <ListItem disablePadding key={i}>
                <ListItemButton>{item}</ListItemButton>
              </ListItem>
            );
          })}
          <ListItem>
            <SwitchDarkMode mode={mode} setMode={setMode} />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
