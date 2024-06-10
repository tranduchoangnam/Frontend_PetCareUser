"use client";

import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import PageContainer from "src/app/components/container/PageContainer";
import Banner from "src/components/banner/AppBanner";
import { montserrat, poppins } from "src/constants/fonts";
import HavePet from "./havePet/HavePet";
import HaveNot from "./haveNot/HaveNot";
import ContactUs from "src/components/contact-us/ContactUs";
import SelectService from "./SelectService/SelectService";
import { Pet } from "src/app/lib/zods/pet";
import axios from "axios";
import { toast } from "react-toastify";

type TPetInfo = {
  name: string;
  breed: string;
  age: string;
  color: string;
  gender: string;
  weight: string;
  avatar: string;
};

const RequestService = () => {
  const [havePet, setHavePet] = useState(true);
  const [newPet, setNewPet] = useState<TPetInfo | null>(null); // [1
  const [selectedServices, setSelectedServices] =
    useState<string>("healthcare");
  const [pets, setPets] = useState<Pet[]>([]);
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null); // [2
  const [date, setDate] = useState<string>("");
  const fetchPets = async () => {
    try {
      const response = await axios.get("/api/pet/get-all");
      if (response.data.status === "SUCCESS") {
        setPets(response.data.data);
      } else setPets([]);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    fetchPets();
  }, []);
  const handleSubmit = async () => {
    let response = undefined;
    if (!havePet) {
      try {
        const res = await axios.post("/api/pet/register", newPet);
        if (res.data.status === "SUCCESS") {
          response = await axios.post(`/api/service/${selectedServices}`, {
            petId: res.data.data.id,
            date: date,
          });
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      if (selectedPet) {
        response = await axios.post(`/api/service/${selectedServices}`, {
          petId: selectedPet.id,
          date: date,
        });
      }
    }
    if (response?.data.status === "SUCCESS") {
      toast.success("Service requested successfully");
    } else {
      toast.error("Service request failed");
    }
  };
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Banner
          title="Choose the service you want"
          description="Fill the form below"
        />
        <Box sx={{ mt: 12, px: 10 }}>
          <Grid container spacing={10}>
            <Grid item xs={7}>
              <Box sx={{ display: "flex", flexDirection: "column", rowGap: 3 }}>
                <Typography
                  sx={{
                    fontFamily: poppins.style.fontFamily,
                    fontWeight: 700,
                    color: "#7759CC",
                    fontSize: "30px",
                  }}
                >
                  Request Service
                </Typography>
                <Box>
                  <Grid container spacing={2} sx={{ alignItems: "center" }}>
                    <Grid item xs={5}>
                      <Typography
                        sx={{
                          fontFamily: montserrat.style.fontFamily,
                          fontWeight: 700,
                          mr: 10,
                        }}
                      >
                        Already have your pet? *
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      <Button
                        sx={{
                          backgroundColor: havePet
                            ? "secondary.main"
                            : "transparent",
                          color: havePet ? "white" : "secondary.main",
                        }}
                        onClick={() => setHavePet(true)}
                      >
                        Yes
                      </Button>
                      <Button
                        sx={{
                          backgroundColor: havePet
                            ? "transparent"
                            : "secondary.main",
                          color: havePet ? "secondary.main" : "white",
                        }}
                        onClick={() => setHavePet(false)}
                      >
                        No
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
                {havePet ? (
                  <HavePet pets={pets} onSelect={setSelectedPet} />
                ) : (
                  <HaveNot setNewPet={setNewPet} />
                )}
                <SelectService
                  selectedServices={selectedServices}
                  setSelectedServices={setSelectedServices}
                />
                <Box>
                  <Grid container spacing={2} sx={{ alignItems: "center" }}>
                    <Grid item xs={5}>
                      <Typography
                        sx={{
                          fontFamily: montserrat.style.fontFamily,
                          fontWeight: 700,
                          mr: 10,
                        }}
                      >
                        Date and Time *
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      <TextField
                        id="datetime-local"
                        type="datetime-local"
                        sx={{ width: "50%" }}
                        size="small"
                        color="secondary"
                        onChange={(e) =>
                          setDate(new Date(e.target.value).toISOString())
                        }
                      />
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: montserrat.style.fontFamily,
                      fontWeight: 700,
                      mb: 2,
                    }}
                  >
                    How can we help you?
                  </Typography>
                  <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    sx={{ width: "100%" }}
                    color="secondary"
                  />
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    width: "30%",
                    textTransform: "inherit",
                    fontSize: "20px",
                    margin: "0 auto",
                  }}
                  color="secondary"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Box>
            </Grid>
            <Grid item xs={5}>
              <ContactUs />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </PageContainer>
  );
};

export default RequestService;
