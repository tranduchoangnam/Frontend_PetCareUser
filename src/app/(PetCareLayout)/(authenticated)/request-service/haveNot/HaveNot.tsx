import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { use, useEffect, useState } from "react";
import { montserrat } from "src/constants/fonts";
import CloseIcon from "@mui/icons-material/Close";
import { Pet } from "src/app/lib/zods/pet";
import FileInput from "src/app/components/input/FileInput";
type TPetInfo = {
  name: string;
  breed: string;
  age: string;
  color: string;
  gender: string;
  weight: string;
  avatar: string;
};
export default function HaveNot({
  setNewPet,
}: {
  setNewPet: (newPet: TPetInfo) => void;
}) {
  const [selectedFileName, setSelectedFileName] = useState("");
  const [petInfo, setPetInfo] = useState<TPetInfo>({
    name: "",
    breed: "",
    age: "",
    color: "",
    gender: "",
    weight: "",
    avatar: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPetInfo({
      ...petInfo,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setNewPet(petInfo);
  }, [petInfo]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", rowGap: 3 }}>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <TextField
            label="Pet Name"
            name="name"
            value={petInfo.name}
            onChange={handleChange}
            sx={{ width: "100%" }}
            size="small"
            color="secondary"
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Breed"
            name="breed"
            value={petInfo.breed}
            onChange={handleChange}
            sx={{ width: "100%" }}
            size="small"
            color="secondary"
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Age"
            name="age"
            value={petInfo.age}
            onChange={handleChange}
            sx={{ width: "100%" }}
            size="small"
            color="secondary"
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Gender"
            name="gender"
            value={petInfo.gender}
            onChange={handleChange}
            sx={{ width: "100%" }}
            size="small"
            color="secondary"
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Color"
            name="color"
            value={petInfo.color}
            onChange={handleChange}
            sx={{ width: "100%" }}
            size="small"
            color="secondary"
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Weight(kg)"
            name="weight"
            value={petInfo.weight}
            onChange={handleChange}
            sx={{ width: "100%" }}
            size="small"
            color="secondary"
            required
          />
        </Grid>
      </Grid>
      <FileInput
        onChange={(e) => {
          setPetInfo({ ...petInfo, avatar: e });
        }}
      />
    </Box>
  );
}
