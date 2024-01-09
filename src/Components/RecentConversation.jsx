import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import { LoremIpsum } from "lorem-ipsum";

export default function RecentConversation({ user, last }) {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 8,
      min: 4,
    },
  });
  return (
    <>
      <ListItem alignItems="flex-start" dense={true}>
        <ListItemAvatar>
          <Tooltip title={user.name} placement="left">
            <Avatar alt={user.name} src={user.photo} />
          </Tooltip>
        </ListItemAvatar>
        <ListItemText
          primary={lorem.generateSentences(1)}
          secondary={
            <>
              <Typography variant="span">
                {lorem.generateWords(12) + "..."}
              </Typography>
            </>
          }
        />
      </ListItem>
      {!last && <Divider variant="inset" component="li" />}
    </>
  );
}
