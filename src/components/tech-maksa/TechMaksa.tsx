import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import CategoryBox from "../card-category/CategoryBox";

export default function TechMaksa() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
      }}
    >
      <Box
        sx={{
          width: "55vw",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: 2,
            margin: 2,
          }}
        >
          <Box sx={{px:5}}>
            <Typography variant="h4" component="h5" gutterBottom>
              Tech Heim
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              "Join the{" "}
              <span style={{ color: "#f44336" }}>digital revolution</span>"
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#f44336",
                py: 2,
                my: 4,
                ":hover": {
                  backgroundColor: "#f44336",
                },
              }}
            >
              Explore More
            </Button>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
            <Image
              src="/images/maksatech.png"
              alt="techmaksa for landing page"
              width={309}
              height={157}
            />
          </Box>
        </Box>
        <CategoryBox />
      </Box>
    </Box>
  );
}
