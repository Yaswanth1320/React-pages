import React from "react";
import { useTheme, Typography, useMediaQuery, Box } from "@mui/material";
import Form from "./Form";

const Login = () => {
  const nonMobile = useMediaQuery("(min-width: 1000px)");
  const theme = useTheme();
  return (
    <Box>
      {/* <Box
        width="100%"
        p="1rem 6%"
        textAlign="center"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem,2rem,2.25rem)"
          color="primary"
        >
          FaceVerse
        </Typography>
      </Box> */}

      <Box
        width={nonMobile ? "50%" : "93%"}
        m="2rem auto"
        p="2rem"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography
          fontWeight="900"
          fontSize="40px"
          variant="h5"
          sx={{ mb: "1rem" }}
          textAlign="center"
          fontFamily="'Beau Rivage', cursive"
        >
          FaceVerse
        </Typography>
        <Typography
          fontSize="20px"
          fontWeight="600"
          textAlign="center"
          color="#404040"
          sx={{ mb: "1.5rem" }}
          p="0 2rem"
          fontFamily="'Roboto Condensed', sans-serif"
        >
          Welcome to <span className="logo">faceverse</span> Sign up to see
          photos and videos from your friends.
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default Login;
