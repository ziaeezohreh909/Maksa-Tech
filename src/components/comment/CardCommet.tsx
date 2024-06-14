import { ArrowDropDown } from "@mui/icons-material";
import { Box, Button, Card, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import { commentType } from "./api";

interface CardCommetProps {
  comment: commentType;
}

const CardCommet: React.FC<CardCommetProps> = ({ comment }) => {
  return (
    <Card sx={{ width: "100%", p: 1 }}>
      <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
        <Image src={comment.avatar} alt="user" width={60} height={60} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Typography>
            {comment.name} <br /> {new Date().toLocaleDateString()}
          </Typography>
          <Image src="/images/ratestar.png" alt="user" width={70} height={32} />
        </Box>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography variant="body1">{comment.comment}</Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="text"
            endIcon={<ArrowDropDown />}
            sx={{ textTransform: "none" }}
          >
            Show More
          </Button>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button startIcon={<ThumbUpOffAltIcon />}>18</Button>
          <Button startIcon={<ThumbDownOffAltIcon />}>12</Button>
        </Box>
      </Box>
    </Card>
  );
};

export default CardCommet;
