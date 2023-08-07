import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import logo from "../../assets/Images/logo.ico";

const DashboardLayout = () => {
  const theme = useTheme();
  return (
    <>
      <Box
          p={2}
        sx={{
          backgroundColor: theme.palette.background.paper,
          width: "129px",
          height: "100vh",
          boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Stack direction={"column"} alignItems={'center'} sx={{ width: "100%" }}>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              width: 64,
              height: 64,
              borderRadius: 1.5,
            }}
          >
            <img src={logo} alt={"chat logo"} />
          </Box>
        </Stack>
      </Box>
      Dashboard Layout
      <Outlet />
    </>
  );
};

export default DashboardLayout;
