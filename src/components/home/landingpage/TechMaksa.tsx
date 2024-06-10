import { Box, Button, Divider, Typography } from "@mui/material";
import Image from "next/image";
import CategoryBox from "../../card-category/CategoryBox";

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
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: 2,
            margin: 2,
            flexDirection: "row",
          }}
        >
          <Box sx={{ px: 5 }}>
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
                display: "flex",
                alignItems: "center",
                backgroundColor: "#f44336",
                my: 10,
                ":hover": {
                  backgroundColor: "#f44336",
                },
              }}
            >
              Explore More
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
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
