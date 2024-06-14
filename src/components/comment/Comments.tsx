import { Box, Card, Typography } from "@mui/material";
import CardCommet from "./CardCommet";
import { useEffect, useState } from "react";
import { commentType, getCommentData, getRandomSubset } from "./api";

export default function Comments() {
  const [commentData, setCommentData] = useState<commentType[]>([]);

  useEffect(() => {
    getCommentData().then((data) => {
      const randomData = getRandomSubset(data, 4);
      setCommentData(randomData);
      console.log(randomData);
    });
  }, []);
  return (
    <Card sx={{ width: "912px" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {commentData.map((comment) => (
          <CardCommet key={comment.id} comment={comment} />
        ))}
      </Box>
    </Card>
  );
}
