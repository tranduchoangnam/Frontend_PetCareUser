"use client";
import { Box } from "@mui/material";
import React, { useState } from "react";
import { imagePath } from "src/constants/imagePath";

import SignInForm from "src/app/components/auth/sign-in/SignInForm";

export default function SignIn() {
  return (
    <Box>
      {/* <Banner title="READY TO ROMP. WAG. PLAY?" /> */}
      <Box
        sx={{
          mx: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          columnGap: 20,
        }}
      >
        <SignInForm />
        <img
          src={imagePath.LOGIN_BANNER.src}
          alt="banner"
          style={{ maxWidth: "500px", height: "auto" }}
        />
      </Box>
    </Box>
  );
}
