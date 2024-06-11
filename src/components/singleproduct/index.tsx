import { Box, Card } from "@mui/material";
import { blue } from "@mui/material/colors";
import PayInfoCard from "../payinfocard/PayInfoCard";

export default function SingleProduct() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 1,
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "496px", height: "433px" }}>single product</Box>
      <Box sx={{ width: "343px", height: "365px" }}>information</Box>
      <Card>
        <PayInfoCard />
      </Card>
    </Box>
  );
}
