import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import { ListItemIcon, ListItemText, Switch } from "@mui/material";

export const sidebarArray = [
  <>
    <ListItemIcon>
      <Home />
    </ListItemIcon>
    <ListItemText primary="Homepage" />
  </>,
  <>
    <ListItemIcon>
      <Article />
    </ListItemIcon>
    <ListItemText primary="Pages" />
  </>,
  <>
    <ListItemIcon>
      <Group />
    </ListItemIcon>
    <ListItemText primary="Groups" />
  </>,
  <>
    <ListItemIcon>
      <Storefront />
    </ListItemIcon>
    <ListItemText primary="Marketplace" />
  </>,
  <>
    <ListItemIcon>
      <Person />
    </ListItemIcon>
    <ListItemText primary="Friends" />
  </>,
  <>
    <ListItemIcon>
      <Settings />
    </ListItemIcon>
    <ListItemText primary="Setting" />
  </>,
  <>
    <ListItemIcon>
      <AccountBox />
    </ListItemIcon>
    <ListItemText primary="Profile" />
  </>,
];
