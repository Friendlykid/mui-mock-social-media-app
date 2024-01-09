import styled from "@emotion/styled";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Box,
  Badge,
  Avatar,
  Stack,
  Menu,
  MenuItem,
} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import { Mail } from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";
import NavbarMenu from "./NavbarMenu";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const StyledSearchBar = styled("div")((theme) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: 10,
  width: "40%",
}));

export default function Navbar({ setMode, mode }) {
  const [isOpened, setIsOpened] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [sidebarIsOpened, setSidebarIsOpened] = useState(false);
  const [sidebarAnchorEl, setSidebarAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const sidebarOpen = Boolean(sidebarAnchorEl);
  const handleClick = (event) => {
    setIsOpened(true);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setIsOpened(false);
    setAnchorEl(null);
  };
  const handleSidebarClick = (event) => {
    setSidebarIsOpened(true);
    setSidebarAnchorEl(event.currentTarget);
  };
  const handleSidebarClose = () => {
    setSidebarIsOpened(false);
    setSidebarAnchorEl(null);
  };
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          App
        </Typography>
        <AppsIcon
          sx={{ display: { xs: "block", sm: "none", id: "appIcon" } }}
          onClick={handleSidebarClick}
        ></AppsIcon>
        <StyledSearchBar>
          <InputBase placeholder="Search..." />
        </StyledSearchBar>
        <Stack
          direction="row"
          spacing={2}
          sx={{ display: { xs: "none", sm: "flex" } }}
          alignItems="center"
        >
          <Badge
            badgeContent={4}
            color="error"
            sx={{ "&:hover": { cursor: "pointer" } }}
          >
            <Mail />
          </Badge>
          <Badge
            badgeContent={10}
            color="error"
            sx={{ "&:hover": { cursor: "pointer" } }}
          >
            <NotificationsIcon />
          </Badge>
          <Avatar
            alt="Remy Sharp"
            onClick={handleClick}
            aria-controls={sidebarOpen ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={sidebarOpen ? "true" : undefined}
            sx={{ width: 30, height: 30, id: "avatar" }}
            src="https://media.istockphoto.com/id/1364105164/cs/fotografie/hologram-human-head-deep-learning-and-artificial-intelligence-abstract-background.jpg?s=1024x1024&w=is&k=20&c=Px8UaYKf--xtp8BprsjTnyV5vmhQ0kTZS8j__2EqaoY="
          />
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          sx={{ display: { xs: "flex", sm: "none" } }}
          alignItems="center"
        >
          <Avatar
            alt="Remy Sharp"
            onClick={handleClick}
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            sx={{ width: 30, height: 30, id: "avatar" }}
            src="https://media.istockphoto.com/id/1364105164/cs/fotografie/hologram-human-head-deep-learning-and-artificial-intelligence-abstract-background.jpg?s=1024x1024&w=is&k=20&c=Px8UaYKf--xtp8BprsjTnyV5vmhQ0kTZS8j__2EqaoY="
          />
          <Typography variant="span">John</Typography>
        </Stack>
      </StyledToolbar>
      <NavbarMenu
        MenuListProps="appIcon"
        anchorEl={sidebarAnchorEl}
        id="sidebar-menu"
        onClose={handleSidebarClose}
        open={sidebarIsOpened}
        setMode={setMode}
        mode={mode}
      />
      <Menu
        id="basic-menu"
        open={isOpened}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        anchorEl={anchorEl}
        MenuListProps={{
          "aria-labelledby": "avatar",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}
