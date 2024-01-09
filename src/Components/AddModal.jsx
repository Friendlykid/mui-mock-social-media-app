import styled from "@emotion/styled";
import {
  Avatar,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { indigo, lightBlue, red, teal } from "@mui/material/colors";
import {
  Image,
  PersonAdd,
  VideoCameraBack,
  EmojiEmotions,
} from "@mui/icons-material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export default function AddModal({ open, setOpen, handleClick }) { 

  return (
    <StyledModal open={open} onClose={() => setOpen(false)}>
      <>
      <Stack
        width={500}
        height={350}
        bgcolor="white"
        p={2}
        borderRadius="5%"
        gap={2}
      >
        <Typography
          variant="h6"
          fontWeight={700}
          textAlign="center"
          color="grey"
        >
          Create Post
        </Typography>
        <Stack direction="row" alignItems="center" gap={2} mt={2}>
          <Avatar
            alt="John Doe"
            sx={{ marginLeft: "2px" }}
            src="https://media.istockphoto.com/id/1364105164/cs/fotografie/hologram-human-head-deep-learning-and-artificial-intelligence-abstract-background.jpg?s=1024x1024&w=is&k=20&c=Px8UaYKf--xtp8BprsjTnyV5vmhQ0kTZS8j__2EqaoY="
          />
          <Typography variant="p" fontWeight={700}>
            John Doe
          </Typography>
        </Stack>
        <TextField label="What's on your mind" multiline maxRows={4} />
        <Stack direction="row" gap={1}>
          <EmojiEmotions sx={{ color: red[500] }} />
          <Image sx={{ color: lightBlue[500] }} />
          <VideoCameraBack sx={{ color: teal[500] }} />
          <PersonAdd sx={{ color: indigo[500] }} />
        </Stack>
        <Stack alignItems="center" gap={2}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker label="Date" />
            </DemoContainer>
          </LocalizationProvider>
          <Button variant="contained" onClick={handleClick}>Post</Button>
        </Stack>
      </Stack>
      </>
    </StyledModal>
  );
}
