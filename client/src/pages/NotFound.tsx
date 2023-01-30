import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function NotFound(): JSX.Element {
  const navigate: NavigateFunction = useNavigate();
  const error: unknown = useRouteError();

  if (error instanceof Error) {
    console.log(error.message);
  } else if (isRouteErrorResponse(error)) {
    console.log(error.status, error.statusText);
  } else {
    console.log("Unexpected error: ", error);
  }

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
    <Box component="div" sx={{ textAlign: "center" }}>
      <Typography component="h1" variant="h1">
        Oops!
      </Typography>
      <Typography component="p" variant="body2">
        Sorry, the page is not found.
      </Typography>
      <Typography component="p" variant="body2">
        You will be redirect on main page in 3 seconds.
      </Typography>
    </Box>
  );
}
