import { Menu, MenuItem } from "@mui/material";
import { sidebarArray } from "../utils/sidebarArray";
import SwitchDarkMode from "./SwitchDarkMode";

export default function NavbarMenu({
  id,
  open,
  onClose,
  anchorEl,
  MenuListProps,
  setMode,
  mode,
}) {
  return (
    <Menu
      id={id}
      open={open}
      onClose={onClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      anchorEl={anchorEl}
      MenuListProps={{
        "aria-labelledby": { MenuListProps },
      }}
    >
      {sidebarArray.map((menuItem, i) => {
        return <MenuItem key={i}>{menuItem}</MenuItem>;
      })}
      <MenuItem>
        <SwitchDarkMode mode={mode} setMode={setMode} />
      </MenuItem>
    </Menu>
  );
}
