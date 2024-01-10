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
import {
  Checkbox,
  Tooltip,
} from "@mui/material";
import { LoremIpsum } from "lorem-ipsum";
import { useState } from "react";
import randomDate from "../utils/randomDate";
import SkeletonPost from "./SkeletonPost";

export default function RandomPost({ user, url, loading }) {
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

  if(loading){
    return <SkeletonPost/>;
  }

  return (
    <Card sx={{ margin: 5, width: "70%" }}>
      <CardHeader
        avatar={
            <Avatar alt={user.name} src={user.photo} />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={user.name}
        subheader={randomDate()}
      />
      <CardMedia component="img" image={url} alt={url} />
      <CardContent>
          <Typography variant="body2" color="text.secondary">
            {lorem.generateParagraphs(1)}
          </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Tooltip title="Like" placement="top">
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="Share" placement="top">
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}
