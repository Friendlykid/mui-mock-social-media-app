import { Box, CircularProgress, LinearProgress } from "@mui/material";

export default function LoadingConversation() {
  return (
    <Box height="100px" width="100%" display="flex" justifyContent="center">
      <Box sx={{ flex: 1 }}>
        <CircularProgress variant="indeterminate" />
      </Box>
      <Box sx={{ flex: 3 }}>
        <LinearProgress sx={{ height: "90%" }} />
      </Box>
    </Box>
  );
}
