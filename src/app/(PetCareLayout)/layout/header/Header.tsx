import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  styled,
  Stack,
  IconButton,
  Badge,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";

// components
import Profile from "./Profile";
import Search from "./Search";
import { IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";
import { imagePath } from "src/constants/imagePath";
import { usePathname, useRouter } from "next/navigation";

interface ItemType {
  toggleMobileSidebar: (event: React.MouseEvent<HTMLElement>) => void;
}

const Header = ({ toggleMobileSidebar }: ItemType) => {
  const pathname = usePathname();
  const router = useRouter();
  const showProfile = !["/", "/auth/sign-in", "/auth/sign-up"].includes(
    pathname
  );
  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  // const lgDown = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: "none",
    background: theme.palette.background.paper,
    justifyContent: "center",
    backdropFilter: "blur(4px)",
    [theme.breakpoints.up("lg")]: {
      minHeight: "70px",
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: "100%",
    color: theme.palette.text.secondary,
  }));
  const StyledLink = styled("p")(
    () => `
  color: black;
  margin-right: 60px;
  `
  );
  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        {showProfile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={toggleMobileSidebar}
              // sx={{
              //   display: {
              //     lg: "none",
              //     xs: "inline",
              //   },
              // }}
            >
              <IconMenu2 width="20" height="20" />
            </IconButton>
            <Search />
          </>
        ) : (
          <img
            src={imagePath.LOGO.src}
            alt="logo"
            style={{ width: "200px", padding: "8px" }}
            onClick={() => router.push("/")}
          />
        )}

        <Box flexGrow={1} />
        <Link href="/services">
          <StyledLink>Our Services</StyledLink>
        </Link>
        <Link href="/about">
          <StyledLink>About Us</StyledLink>
        </Link>
        {showProfile ? (
          <Stack spacing={1} direction="row" alignItems="center">
            <Profile />
          </Stack>
        ) : (
          <>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => router.push("/auth/sign-in")}
              sx={{
                "&:hover, &.Mui-focusVisible": {
                  backgroundColor: "#5A3BB3",
                },
                mr: 2,
              }}
            >
              Sign In
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => router.push("/auth/sign-up")}
            >
              Sign Up
            </Button>
          </>
        )}
      </ToolbarStyled>
    </AppBarStyled>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
};

export default Header;
