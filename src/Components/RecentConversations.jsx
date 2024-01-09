import List from "@mui/material/List";
import RecentConversation from "./RecentConversation";
import LoadingConversation from "./LoadingConversation";
import { Divider } from "@mui/material";

export default function RecentConversations({ users }) {
  // Function to get 3 random users from the array
  const getRandomUsers = (arr, count) => {
    const shuffledArray = arr.sort(() => 0.5 - Math.random()); // Shuffle the array
    return shuffledArray.slice(0, count); // Get the first 'count' elements
  };

  // Get 3 random users from the array of 10
  const randomUsers = getRandomUsers(users, 3);
  if (users.length === 0) {
    return (
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <LoadingConversation />
        <Divider variant="inset" component="li" sx={{ margin: "10px 0" }} />
        <LoadingConversation />
        <Divider variant="inset" component="li" sx={{ margin: "10px 0" }} />
        <LoadingConversation />
      </List>
    );
  }

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {randomUsers.map((user, i) => (
        <RecentConversation
          key={user.id}
          user={user}
          last={i === randomUsers.length - 1}
        />
      ))}
    </List>
  );
}
