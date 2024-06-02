import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { montserrat } from "src/constants/fonts";

export default function HaveNot() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", rowGap: 3 }}>
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
            label="Breed"
            sx={{ width: "100%" }}
            size="small"
            color="secondary"
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Age"
            sx={{ width: "100%" }}
            size="small"
            color="secondary"
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Gender"
            sx={{ width: "100%" }}
            size="small"
            color="secondary"
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Color"
            sx={{ width: "100%" }}
            size="small"
            color="secondary"
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Weight(kg)"
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
