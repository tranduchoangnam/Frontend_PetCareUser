import Link from "next/link";
import { styled } from "@mui/material";
import Image from "next/image";
import { imagePath } from "src/constants/imagePath";

const LinkStyled = styled(Link)(() => ({
  height: "90px",
  overflow: "hidden",
  display: "block",
}));

const Logo = () => {
  return (
    <LinkStyled href="/landing-page">
      <img
        src={imagePath.LOGO.src}
        alt="logo"
        style={{ cursor: "pointer", width: "auto", height: "100%" }}
      />
    </LinkStyled>
  );
};

export default Logo;
