import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Checkbox, CircularProgress, LinearProgress } from "@mui/material";
import { LoremIpsum } from "lorem-ipsum";
import { useEffect, useState } from "react";
import randomDate from "../utils/randomDate";

export default function RandomPost({ user, url, loading }) {
  const [dots, setDots] = useState(".");
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
  const [text, setText] = useState(lorem.generateParagraphs(1));

  useEffect(() => {
    // Function to update the loading text with three trailing dots
    const updateLoadingText = () => {
      if (loading) {
        setDots((prevText) => {
          // Add a dot or reset to three dots if already present
          //const numberOfDots = (prevText.match(/\./g) || []).length + 1;
          if (prevText.length < 4) {
            return prevText.concat(".");
          }
          return `.`;
        });
      }
    };

    // Update the loading text in set interval
    const intervalId = setInterval(updateLoadingText, 50);

    // Cleanup: clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Card sx={{ margin: 5, width: "70%" }}>
      <CardHeader
        avatar={
          loading ? (
            <CircularProgress />
          ) : (
            <Avatar alt={user.name} src={user.photo} />
          )
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={loading ? dots : user.name}
        subheader={randomDate()}
      />
      <CardMedia component="img" image={url} alt={url} />
      <CardContent>
        {loading ? (
          <LinearProgress variant="indeterminate" />
        ) : (
          <Typography variant="body2" color="text.secondary">
            {lorem.generateParagraphs(1)}
          </Typography>
        )}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
