import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { CategoriesType } from "./CategoryBox";

export default function CategoryCard({
  category,
}: {
  category: CategoriesType;
}) {
  return (
    <Card sx={{ width: "148px", height: "180px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ width: "148px", height: "148px", padding: 1 }}
          image={category.image}
          alt="category"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="body1"
            component="p"
            sx={{
              fontSize: "10px",
              textAlign: "center",
              ":hover": { textDecoration: "underline" },
            }}
          >
            {category.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
