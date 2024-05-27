"use client";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Grid,
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
import { useRouter } from "next/navigation";
import Link from "next/link";

type TUserInfo = {
  name: string;
  phone: string;
  email: string;
  password: string;
};

export default function SignUp() {
  const [userInfo, setUserInfo] = useState<TUserInfo>({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const [apiError, setApiError] = useState<string>("");
  const router = useRouter();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 6;
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
        const response = await axios.post("/api/auth/sign-up", {
          username: userInfo.name,
          phone: userInfo.phone,
          email: userInfo.email,
          password: userInfo.password,
        });

        if (response.data.status === "SUCCESS") {
          toast.success("Registration successful! Redirecting to login...");
          setTimeout(() => {
            router.push("/auth/sign-in");
          }, 3000);
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: response.data.data,
          }));
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
      <Box
        sx={{
          mx: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          columnGap: 15,
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
            Create An Account
          </Typography>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  sx={{ width: "-webkit-fill-available" }}
                  label="Name"
                  value={userInfo.name}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, name: e.target.value })
                  }
                  required
                  onKeyDown={handleKeyDown}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  sx={{ width: "-webkit-fill-available" }}
                  label="Phone"
                  value={userInfo.phone}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, phone: e.target.value })
                  }
                  required
                  onKeyDown={handleKeyDown}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  sx={{ width: "-webkit-fill-available" }}
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
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  variant="outlined"
                  error={!!errors.password}
                  sx={{ width: "-webkit-fill-available" }}
                >
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
              </Grid>
            </Grid>
          </Box>
          <Button
            variant="contained"
            size="large"
            sx={{ fontSize: "24px" }}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Typography variant="caption" sx={{ textAlign: "center" }}>
            Have an account? {""}
            <Link href="/auth/sign-in">Sign In</Link>
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
