import axios from "axios";
import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { Box, Typography } from "@mui/material";

const categories = [
  {
    id: "1",
    image: "/images/accessories.png",
    title: "Accessore",
  },
  {
    id: "2",
    image: "/images/camera.png",
    title: "Camera",
  },
  {
    id: "3",
    image: "/images/labtop.png",
    title: "Laptop",
  },
  {
    id: "4",
    image: "/images/smartphone.png",
    title: "Smartphone",
  },
  {
    id: "5",
    image: "/images/gaming.png",
    title: "Gamming",
  },
  {
    id: "6",
    image: "/images/smartwatch.png",
    title: "Smart watch",
  },
];

export default function CategoryBox() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        justifyContent: "center",
      }}
    >
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          image={category.image}
          title={category.title}
        />
      ))}
    </Box>
  );
}
