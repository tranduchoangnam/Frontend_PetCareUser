import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { montserrat, poppins } from "src/constants/fonts";

type Service = {
  serviceName: string;
  services: any[];
};

export default function SelectService() {
  const [services, setServices] = useState<Service[]>([]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  useEffect(() => {
    fetchServiceNames();
  }, []);

  const fetchServiceNames = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/services/test"
      );
      setServices(response.data);
      console.log("Service names:", response.data);
    } catch (error) {
      console.error("Error fetching service names:", error);
    }
  };

  const handleServiceClick = (serviceName: string) => {
    setSelectedServices((prevSelected) =>
      prevSelected.includes(serviceName)
        ? prevSelected.filter((name) => name !== serviceName)
        : [...prevSelected, serviceName]
    );
  };

  return (
    <Box>
      <Typography
        sx={{
          fontFamily: montserrat.style.fontFamily,
          fontWeight: 700,
          mb: 3,
        }}
      >
        Select Service(s) *
      </Typography>
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        {services.map((service) => (
          <Box
            key={service.serviceName}
            sx={{
              border: "2px solid #7759CC",
              borderRadius: "8px",
              p: 2,
              cursor: "pointer",
              color: selectedServices.includes(service.serviceName)
                ? "primary.dark"
                : "secondary.main",
              backgroundColor: selectedServices.includes(service.serviceName)
                ? "secondary.main"
                : "transparent",
              fontFamily: poppins.style.fontFamily,
              "&:hover": {
                backgroundColor: "secondary.main",
                color: "primary.dark",
              },
            }}
            onClick={() => handleServiceClick(service.serviceName)}
          >
            {service.serviceName}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
