import { Stack } from "@mui/material";
import RandomPost from "./RandomPost";
import { useEffect, useState } from "react";
import getPictures from "../utils/getPictures";

function getRandomUser(users) {
  return users[Math.floor(Math.random() * users.length)];
}

export default function Feed({ users }) {
  const numberOfPosts = 10;
  const [randomImages, setRandomImages] = useState([]);
  useEffect(() => {
    let isOver = false;

    (async () => {
      try {
        const pictures = await getPictures(numberOfPosts);
        if (!isOver) {
          setRandomImages(pictures);
        }
      } catch (error) {
        console.error("Error fetching random pictures:", error);
      }
    })();

    return () => (isOver = true);
  }, []);

  return (
    <Stack flex={4} p={2} alignItems="center">
      {(randomImages.length === 0 || users.length === 0) &&
        new Array(numberOfPosts)
          .fill()
          .map((_, i) => <RandomPost key={i} loading />)}
      {randomImages.length !== 0 &&
        users.length !== 0 &&
        randomImages.map((image, i) => (
          <RandomPost key={i} url={image} user={getRandomUser(users)} />
        ))}
    </Stack>
  );
}
