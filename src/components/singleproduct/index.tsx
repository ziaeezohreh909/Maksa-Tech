import { Box, Card } from "@mui/material";
import PayInfoCard from "../payinfocard/PayInfoCard";
import CommentSide from "../comment/CommentSide";
import Comments from "../comment/Comments";

export default function SingleProduct() {
  return (
    <>
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
        <PayInfoCard />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", gap: 2, mt: 3 }}>
        <CommentSide />
        <Comments />
      </Box>
    </>
  );
}
