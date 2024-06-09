import axios from "axios";
import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { Box, Typography } from "@mui/material";

export interface CategoriesType {
  id: number;
  image: string;
  title: string;
}

export default function CategoryBox() {
  const [categories, setCategories] = useState<CategoriesType[]>([]);
  const [error, setError] = useState<string>("");
  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get(" http://localhost:3000/categories");
        setCategories(data);
      } catch (error) {
        setError("Failed to fetch categories");
      }
    }
    getData();
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      {error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <Box
          sx={{
            display: "flex",
            gap: 2,
            width: "100%",
            maxWidth: "1224px",
            justifyContent: "center",
          }}
        >
          {categories.map((category: CategoriesType) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </Box>
      )}
    </Box>
  );
}
