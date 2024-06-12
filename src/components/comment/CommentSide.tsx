import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function CommentSide() {
  return (
    <Card sx={{ width: "288px", height: "346px" }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            // width: "288px",
          }}
        >
          <Typography variant="h6">Commets</Typography>
          <Typography variant="body1" sx={{ color: "gray", fontSize: "16px" }}>
            leave your comments here for other customers
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Button
            variant="outlined"
            sx={{
              color: "#bdbdbd",
              borderColor: "#bdbdbd",
              fontSize: "13px",
              textAlign: "start",
              // width: "288px",
              height: "48px",
              textTransform: "none",
            }}
          >
            Share your thoughts about this product here
          </Button>
          <Button
            variant="outlined"
            fullWidth
            sx={{ height: "48px", textTransform: "none" }}
          >
            Comment
          </Button>
          <Typography variant="h6" sx={{ fontSize: "14px" }}>
            By feature
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              justifyContent: "space-between",
              // width: "288px",
              height: "48px",
            }}
          >
            <Typography
              variant="body1"
              component="h6"
              sx={{ fontSize: "11px" }}
            >
              Battery
              <br /> charge Monitor
              <br /> Lightness
            </Typography>
            <Image
              src="/images/Frame.png"
              alt="farme"
              width={100}
              height={20}
            />
            <Typography
              variant="h6"
              sx={{ fontSize: "12px", textAlign: "center" }}
            >
              4.8
              <br /> 4.9
              <br /> 4.3
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
