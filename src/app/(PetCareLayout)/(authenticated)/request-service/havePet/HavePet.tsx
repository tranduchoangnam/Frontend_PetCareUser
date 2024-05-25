import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { montserrat } from "src/constants/fonts";
import SelectService from "../SelectService/SelectService";

export default function HavePet() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", rowGap: 3 }}>
      <Grid container spacing={2} sx={{ alignItems: "center" }}>
        <Grid item xs={5}>
          <Typography
            sx={{
              fontFamily: montserrat.style.fontFamily,
              fontWeight: 700,
            }}
          >
            Select your pet *
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <TextField
            label="Select"
            select
            sx={{ width: "40%" }}
            size="small"
            color="secondary"
          />
        </Grid>
      </Grid>
      <SelectService />
    </Box>
  );
}
