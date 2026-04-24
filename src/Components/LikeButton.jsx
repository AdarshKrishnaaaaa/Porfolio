import { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, onSnapshot, updateDoc, increment } from "firebase/firestore";

import { Box, IconButton, Typography, Tooltip, Fade } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function LikeButton() {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [displayCount, setDisplayCount] = useState(0);

  const likeRef = doc(db, "likes", "portfolio");

  useEffect(() => {
    const saved = localStorage.getItem("liked");
    if (saved === "true") setLiked(true);

    const unsubscribe = onSnapshot(likeRef, (snapshot) => {
      if (snapshot.exists()) {
        setCount(snapshot.data().count);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    let start = 0;

    const duration = 500; // animation time
    const incrementTime = 20;
    const step = Math.ceil(count / (duration / incrementTime));

    const counter = setInterval(() => {
      start += step;

      if (start >= count) {
        start = count;
        clearInterval(counter);
      }

      setDisplayCount(start);
    }, incrementTime);

    return () => clearInterval(counter);
  }, [count]);

  const handleLike = async () => {
    try {
      if (liked) {
        await updateDoc(likeRef, {
          count: increment(-1),
        });

        setLiked(false);
        localStorage.setItem("liked", "false");
      } else {
        await updateDoc(likeRef, {
          count: increment(1),
        });

        setLiked(true);
        localStorage.setItem("liked", "true");

        setAnimate(true);
        setTimeout(() => setAnimate(false), 400);
      }
    } catch (error) {
      console.error("Error updating like:", error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        px: 2,
        py: 1,
        borderRadius: "20px",
        position: "relative",
      }}
    >
      <Tooltip
        title={liked ? "Unlike" : "Give a like"}
        TransitionComponent={Fade}
      >
        <Box sx={{ position: "relative" }}>
          {animate && (
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: 40,
                height: 40,
                borderRadius: "50%",
                backgroundColor: "rgba(255,0,50,0.3)",
                transform: "translate(-50%, -50%)",
                animation: "pulse 0.4s ease-out",
                "@keyframes pulse": {
                  "0%": {
                    transform: "translate(-50%, -50%) scale(0.5)",
                    opacity: 0.8,
                  },
                  "100%": {
                    transform: "translate(-50%, -50%) scale(2)",
                    opacity: 0,
                  },
                },
              }}
            />
          )}

          <IconButton onClick={handleLike}>
            {liked ? (
              <FavoriteIcon
                sx={{
                  color: "#ff002f",
                  transform: animate ? "scale(1.4)" : "scale(1)",
                  transition: "all 0.3s ease",
                }}
              />
            ) : (
              <FavoriteBorderIcon
                sx={{
                  color: "#fff",
                  transform: "scale(1)",
                  transition: "all 0.3s ease",
                }}
              />
            )}
          </IconButton>
        </Box>
      </Tooltip>

      {/* Count */}
      <Typography
        sx={{
          color: liked ? "#9e9e9e" : "#ffffff",
          fontSize: "1.2rem",
          fontWeight: 500,
          ml: 0.5,
        }}
      >
        {displayCount}
      </Typography>
    </Box>
  );
}
