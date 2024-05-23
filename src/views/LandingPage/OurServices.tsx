"use client";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { chewy, montserrat, poppins } from "src/constants/fonts";
import { imagePath } from "src/constants/imagePath";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function OurServices() {
  return (
    <Grid container spacing={5} sx={{ mt: { md: 6, xs: 0 } }}>
      <Grid item md={4}>
        <Box
          sx={{
            border: "1px solid #7759CC",
            borderRadius: "15px",
            p: "28px 0px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            rowGap: "25px",
          }}
        >
          <Image src={imagePath.LOGO_BOARDING} alt="banner" />
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: "700",
              color: "#6F32BE",
              fontFamily: `${montserrat.style.fontFamily}`,
            }}
          >
            Pet Boarding
          </Typography>
          <Typography
            sx={{
              mx: 3,
              fontSize: "18px",
              fontFamily: `${poppins.style.fontFamily}`,
              textAlign: "center",
            }}
          >
            Reserve room for your pet. While you’re away we provide your pet all
            food, water, exercise, and attention they deserve
          </Typography>
          <Link href="/">
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                color: "#7759CC",
                fontFamily: `${chewy.style.fontFamily}`,
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Learn more <NavigateNextIcon />
            </Typography>
          </Link>
        </Box>
      </Grid>
      <Grid item md={4}>
        <Box
          sx={{
            backgroundColor: "#7759CC",
            borderRadius: "15px",
            p: "28px 0px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            rowGap: "25px",
          }}
        >
          <Image src={imagePath.LOGO_HEALTHCARE} alt="banner" />
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: "700",
              color: "white",
              fontFamily: `${montserrat.style.fontFamily}`,
            }}
          >
            Pet Healthcare
          </Typography>
          <Typography
            sx={{
              mx: 3,
              fontSize: "18px",
              fontFamily: `${poppins.style.fontFamily}`,
              textAlign: "center",
              color: "white",
            }}
          >
            Best service from us, we will take care of your pet health, we will
            diagnose and give the best therapy for you pet
          </Typography>

          <Link href="/">
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                color: "#F7CE72",
                fontFamily: `${chewy.style.fontFamily}`,
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Learn more <NavigateNextIcon />
            </Typography>
          </Link>
        </Box>
      </Grid>
      <Grid item md={4}>
        <Box
          sx={{
            border: "1px solid #7759CC",
            borderRadius: "15px",
            p: "28px 0px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            rowGap: "25px",
          }}
        >
          <Image src={imagePath.LOGO_GROOMING} alt="banner" />
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: "700",
              color: "#6F32BE",
              fontFamily: `${montserrat.style.fontFamily}`,
            }}
          >
            Pet Grooming
          </Typography>
          <Typography
            sx={{
              mx: 3,
              fontSize: "18px",
              fontFamily: `${poppins.style.fontFamily}`,
              textAlign: "center",
            }}
          >
            Provide your pet with the best care, from meticulous grooming to
            stylish makeovers.
          </Typography>
          <Link href="/">
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                color: "#7759CC",
                fontFamily: `${chewy.style.fontFamily}`,
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Learn more <NavigateNextIcon />
            </Typography>
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
}
// import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { chewy, montserrat, poppins } from "src/constants/fonts";
// import { imagePath } from "src/constants/imagePath";
// import NavigateNextIcon from "@mui/icons-material/NavigateNext";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// interface Service {
//   title: string;
//   description: string;
//   imgSrc: string;
//   link: string;
//   bgColor?: string;
//   textColor?: string;
//   linkColor?: string;
// }

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 2,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 5000,
//   responsive: [
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// };

// const serviceData: Service[] = [
//   {
//     title: "Pet Boarding",
//     description:
//       "Reserve room for your pet. While you’re away we provide your pet all food, water, exercise, and attention they deserve",
//     imgSrc: imagePath.LOGO_BOARDING,
//     link: "/",
//   },
//   {
//     title: "Pet Healthcare",
//     description:
//       "Best service from us, we will take care of your pet health, we will diagnose and give the best therapy for you pet",
//     imgSrc: imagePath.LOGO_HEALTHCARE,
//     link: "/",
//     bgColor: "#7759CC",
//     textColor: "white",
//     linkColor: "#F7CE72",
//   },
//   {
//     title: "Pet Grooming",
//     description:
//       "Provide your pet with the best care, from meticulous grooming to stylish makeovers.",
//     imgSrc: imagePath.LOGO_GROOMING,
//     link: "/",
//   },
// ];

// export default function OurServices() {
//   const isTablet = useMediaQuery("(max-width:1024px)");

//   const renderServiceItem = (service: Service) => (
//     <Box
//       key={service.title}
//       sx={{
//         border: service.bgColor ? "none" : "1px solid #7759CC",
//         backgroundColor: service.bgColor || "transparent",
//         borderRadius: "15px",
//         p: "28px 0px",
//         display: "flex",
//         alignItems: "center",
//         flexDirection: "column",
//         rowGap: "25px",
//       }}
//     >
//       <Image src={service.imgSrc} alt="banner" />
//       <Typography
//         sx={{
//           fontSize: "22px",
//           fontWeight: "700",
//           color: service.textColor || "#6F32BE",
//           fontFamily: `${montserrat.style.fontFamily}`,
//         }}
//       >
//         {service.title}
//       </Typography>
//       <Typography
//         sx={{
//           mx: 3,
//           fontSize: "18px",
//           fontFamily: `${poppins.style.fontFamily}`,
//           textAlign: "center",
//           color: service.textColor || "inherit",
//         }}
//       >
//         {service.description}
//       </Typography>
//       <Link href={service.link}>
//         <Typography
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             fontSize: "18px",
//             color: service.linkColor || "#7759CC",
//             fontFamily: `${chewy.style.fontFamily}`,
//             "&:hover": { textDecoration: "underline" },
//           }}
//         >
//           Learn more <NavigateNextIcon />
//         </Typography>
//       </Link>
//     </Box>
//   );

//   return (
//     <Box
//       sx={{ mx: { md: 10, xs: 5 }, my: { md: 15, xs: 5 } }}
//       data-aos="fade-up"
//     >
//       <Typography
//         sx={{
//           fontSize: "30px",
//           fontWeight: "700",
//           color: "#000000",
//           fontFamily: `${poppins.style.fontFamily}`,
//           textAlign: "center",
//         }}
//       >
//         Our {""}
//         <span style={{ color: "#6F32BE" }}>Services</span>
//       </Typography>
//       {isTablet ? (
//         <Slider {...settings}>
//           {serviceData.map((service) => renderServiceItem(service))}
//         </Slider>
//       ) : (
//         <Grid container spacing={5} sx={{ mt: { md: 6, xs: 0 } }}>
//           {serviceData.map((service) => (
//             <Grid item md={4} key={service.title}>
//               {renderServiceItem(service)}
//             </Grid>
//           ))}
//         </Grid>
//       )}
//     </Box>
//   );
// }
