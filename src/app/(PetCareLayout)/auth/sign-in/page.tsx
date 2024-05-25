"use client";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { poppins } from "src/constants/fonts";
import { imagePath } from "src/constants/imagePath";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";

type TUserInfo = {
  email: string;
  password: string;
};

export default function SignIn() {
  const [userInfo, setUserInfo] = useState<TUserInfo>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const [apiError, setApiError] = useState<string>("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 6; // Password must be at least 6 characters long
  };

  const handleSubmit = async () => {
    const emailError = validateEmail(userInfo.email)
      ? ""
      : "Invalid email format";
    const passwordError = validatePassword(userInfo.password)
      ? ""
      : "Password must be at least 6 characters";

    setErrors({
      email: emailError,
      password: passwordError,
    });

    if (!emailError && !passwordError) {
      try {
        const response = await axios.post("API", {
          email: userInfo.email,
          password: userInfo.password,
        });

        if (response.data.success) {
          // Handle successful login
          window.location.href = "/landing-page";
        } else {
          setApiError("Incorrect email or password");
        }
      } catch (error) {
        setApiError("An error occurred while connecting to the server");
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 6,
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: "700",
              color: "primary.main",
              fontFamily: `${poppins.style.fontFamily}`,
              textAlign: "center",
            }}
          >
            Sign In
          </Typography>
          <TextField
            label="Email"
            value={userInfo.email}
            onChange={(e) =>
              setUserInfo({ ...userInfo, email: e.target.value })
            }
            required
            error={!!errors.email}
            helperText={errors.email}
            onKeyDown={handleKeyDown}
          />
          <FormControl variant="outlined" error={!!errors.password}>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              value={userInfo.password}
              onChange={(e) =>
                setUserInfo({ ...userInfo, password: e.target.value })
              }
              required
              onKeyDown={handleKeyDown}
            />
            {errors.password && (
              <Typography variant="caption" color="error">
                {errors.password}
              </Typography>
            )}
          </FormControl>
          <Button
            variant="contained"
            size="large"
            sx={{ fontSize: "24px" }}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
          <Typography variant="caption" sx={{ textAlign: "center" }}>
            If you do not have an account yet, {""}
            <Link href="/auth/sign-up">create an account</Link>
          </Typography>
          {apiError && (
            <Typography variant="caption" color="error">
              {apiError}
            </Typography>
          )}
        </Box>
        <img
          src={imagePath.LOGIN_BANNER.src}
          alt="banner"
          style={{ maxWidth: "500px", height: "auto" }}
        />
      </Box>
    </Box>
  );
}
