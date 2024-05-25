import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { montserrat } from "src/constants/fonts";
import SelectService from "../SelectService/SelectService";

export default function HaveNot() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", rowGap: 3 }}>
      <SelectService />
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <TextField
            label="Pet Name"
            sx={{ width: "100%" }}
            size="small"
            color="secondary"
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Pet Type"
            sx={{ width: "100%" }}
            size="small"
            color="secondary"
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Pet Weight"
            sx={{ width: "100%" }}
            size="small"
            color="secondary"
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Pet Gender"
            sx={{ width: "100%" }}
            size="small"
            color="secondary"
            required
          />
        </Grid>
      </Grid>
    </Box>
  );
}
