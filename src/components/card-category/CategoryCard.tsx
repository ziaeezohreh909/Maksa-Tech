import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import Link from "next/link";

interface CategoriesType {
  id?: number;
  image?: string;
  title?: string;
}

export default function CategoryCard({ image, title }: CategoriesType) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: 190,
        minWidth: 184,
        m: 1,
        width: 184,
        height: 200,
        maxHeight: 200,
        px: 3,
      }}
    >
      <CardActionArea>
        <CardMedia component="img" image={image} alt="category" />
        <CardContent>
          {/* <Link href={"/"}> */}
          <Typography
            gutterBottom
            variant="body1"
            component="h6"
            color="GrayText"
            sx={{
              fontSize: 13,
              textAlign: "center",
              ":hover": { textDecoration: "underline" },
            }}
          >
            {title}
          </Typography>
          {/* </Link> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
