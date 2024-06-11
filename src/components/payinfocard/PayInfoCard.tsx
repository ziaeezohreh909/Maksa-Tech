import { Label } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import Image from "next/image";

export default function PayInfoCard() {
  return (
    <>
      <CardContent
        sx={{
          width: "312px",
          height: "410px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          mt: 2,
        }}
      >
        <Box
          sx={{
            width: "264px",
            display: "flex",
            justifyContent: "space-around",
            gap: 15,
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>$ 1299.00</Typography>
          <Image
            src="/images/discount.png"
            alt="discount-tag"
            width={65}
            height={24}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            width: "100%",
            px: 1,
          }}
        >
          <Typography sx={{ color: "gray", fontSize: "13px" }}>
            last price $ 1410.87
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            width: "100%",
            px: 1,
            color: "gray",
          }}
        >
          <RadioGroup>
            <FormControlLabel
              value="PayNow"
              control={<Radio />}
              label="Pay Now"
            />
          </RadioGroup>
          <RadioGroup>
            <FormControlLabel
              value="Buy"
              control={<Radio />}
              label="Buy in installments"
            />
          </RadioGroup>
          <FormHelperText sx={{ px: 4 }}>
            choose your insallments period
          </FormHelperText>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Button
            variant="outlined"
            size="small"
            sx={{
              color: "#bdbdbd",
              borderColor: "#bdbdbd",
              width: "60px",
              height: "51px",
              fontSize: "12px",
              "&:hover": {
                pointerEvents: "none",
              },
            }}
          >
            3 Months
          </Button>
          <Button
            variant="outlined"
            size="small"
            sx={{
              color: "#bdbdbd",
              borderColor: "#bdbdbd",
              width: "60px",
              height: "51px",
              fontSize: "12px",
            }}
          >
            6 Months
          </Button>
          <Button
            variant="outlined"
            size="small"
            sx={{
              color: "#bdbdbd",
              borderColor: "#bdbdbd",
              width: "60px",
              height: "51px",
              fontSize: "12px",
            }}
          >
            12 Months
          </Button>
          <Button
            variant="outlined"
            size="small"
            sx={{
              color: "#bdbdbd",
              borderColor: "#bdbdbd",
              width: "60px",
              height: "51px",
              fontSize: "12px",
            }}
          >
            18 Months
          </Button>
        </Box>
        <Button
          variant="contained"
          fullWidth
          sx={{ height: "48px", borderRadius: "10px" }}
        >
          Buy Now
        </Button>
        <Button
          variant="outlined"
          fullWidth
          sx={{ height: "48px", borderRadius: "10px", borderColor: "blue" }}
        >
          Add to cart
        </Button>
      </CardContent>
    </>
  );
}
