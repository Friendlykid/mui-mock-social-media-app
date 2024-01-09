import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Rightbar from "./Components/Rightbar";
import Navbar from "./Components/Navbar";
import { useEffect, useState } from "react";
import getRandomUsers from "./utils/getRandomUsers";

function App() {
  const [randomUsers, setRandomUsers] = useState([]);
  const [mode, setMode] = useState("light");
  const numberOfUsers = 20;
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  useEffect(() => {
    let isOver = false;

    (async () => {
      try {
        const users = await getRandomUsers(numberOfUsers);
        if (!isOver) {
          setRandomUsers(users);
        }
      } catch (error) {
        console.error("Error fetching random users:", error);
      }
    })();

    return () => (isOver = true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar setMode={setMode} mode={mode} />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed users={randomUsers} />
          <Rightbar users={randomUsers} />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
