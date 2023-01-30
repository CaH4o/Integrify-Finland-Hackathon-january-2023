import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate, NavigateFunction } from "react-router-dom";

export default function NotFound(): JSX.Element {
  const navigate: NavigateFunction = useNavigate();

  useEffect(function () {
    const timer = setTimeout(handleNavigate, 3000);
    return function () {
      clearTimeout(timer);
    };
  }, []);

  function handleNavigate() {
    navigate("/");
  }

  return (
    <Box sx={{ width: "100%", height: "100vh", display: "table" }}>
      <Box
        sx={{
          textAlign: "center",
          verticalAlign: "middle",
          display: "table-cell",
        }}
      >
        <Typography component="h3" variant="h3">
          Oops!
        </Typography>
        <Typography component="p" variant="body1" m="1rem">
          Sorry, the page is not found.
        </Typography>
        <Typography component="p" variant="body2">
          You will be redirect on the Home page in 3 seconds.
        </Typography>
      </Box>
    </Box>
  );
}
