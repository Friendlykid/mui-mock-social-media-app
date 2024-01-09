import {
  Avatar,
  AvatarGroup,
  Box,
  LinearProgress,
  Tooltip,
  Typography,
} from "@mui/material";
import RecentPosts from "./RecentPosts";
import RecentConversations from "./RecentConversations";
import Badge from "@mui/material/Badge";
import styled from "@emotion/styled";

const SectionTitle = ({ children }) => {
  return (
    <Typography variant="h6" fontWeight="500" mb="5px" mt="5px">
      {children}
    </Typography>
  );
};

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px `,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export default function Rightbar({ users }) {
  const shuffledArray = users.slice().sort(() => Math.random() - 0.5);
  const onlineFriends =
    users.length !== 0
      ? shuffledArray.slice(0, Math.floor(Math.random() * (users.length + 1)))
      : [];
  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: { xs: "none", sm: "block" },
        height: "100vh",
      }}
    >
      <Box sx={{ position: "fixed", width: "max" }} mr={2}>
        <SectionTitle>Online Friends</SectionTitle>
        {users.length !== 0 ? (
          <AvatarGroup
            max={7}
            spacing="medium"
            sx={{ justifyContent: "flex-end" }}
          >
            {onlineFriends.map((user) => (
              <Tooltip key={user.id} title={user.name}>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar alt={user.name} src={user.photo} />
                </StyledBadge>
              </Tooltip>
            ))}
          </AvatarGroup>
        ) : (
          <LinearProgress variant="indeterminate" />
        )}

        <SectionTitle>Latest Posts</SectionTitle>
        <RecentPosts />
        <SectionTitle>Recent Conversations</SectionTitle>
        <RecentConversations users={users} />
      </Box>
    </Box>
  );
}
