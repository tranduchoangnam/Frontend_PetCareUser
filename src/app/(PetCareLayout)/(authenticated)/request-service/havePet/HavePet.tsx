import { Box, Grid, MenuItem, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { montserrat } from "src/constants/fonts";
import { Pet } from "src/app/lib/zods/pet";
export default function HavePet({ pets, onSelect }: { pets: Pet[], onSelect: (pet: Pet) => void}) {
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
            sx={{ width: "50%" }}
            size="small"
            color="secondary"
            onChange={(e) => {
              const pet = pets.find((pet) => pet.id === e.target.value);
              if (pet) {
                onSelect(pet);
              }
            }}
          >
            {pets ? (
              pets.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))
            ) : (
              <MenuItem value={0}>No pet found</MenuItem>
            )}
          </TextField>
        </Grid>
      </Grid>
    </Box>
  );
}
