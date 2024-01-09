import { ModeNight } from "@mui/icons-material";
import { ListItemIcon, Switch } from "@mui/material";

export default function SwitchDarkMode({ setMode, mode }) {
  return (
    <>
      <ListItemIcon>
        <ModeNight />
      </ListItemIcon>
      <Switch onChange={() => setMode(mode === "light" ? "dark" : "light")} />
    </>
  );
}
