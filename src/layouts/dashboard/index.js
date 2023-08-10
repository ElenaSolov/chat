import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, IconButton, Stack, Divider, Avatar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import logo from "../../assets/Images/logo.ico";
import { navButtons } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import AntSwitch from "../../components/AntSwitch";
import useSettings from "../../hooks/useSettings";

const DashboardLayout = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);

  const { onToggleMode } = useSettings();
  return (
    <>
      <Stack direction={"row"}>
        <Box
          p={2}
          sx={{
            backgroundColor: theme.palette.background.paper,
            width: "129px",
            height: "100vh",
            boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack
            direction={"column"}
            alignItems={"center"}
            spacing={3}
            sx={{ width: "100%", height: "100%" }}
          >
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
            <Stack spacing={2} direction={"column"} alignItems={"center"}>
              {navButtons.map((el) =>
                el.index === selected ? (
                  <Box
                    p={1}
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 1.5,
                    }}
                  >
                    <IconButton sx={{ color: "white" }} key={el.index}>
                      {el.icon}
                    </IconButton>
                  </Box>
                ) : (
                  <IconButton
                    onClick={() => setSelected(el.index)}
                    key={el.index}
                  >
                    {el.icon}
                  </IconButton>
                )
              )}
              <Divider sx={{ width: 45 }} />
            </Stack>
            {selected === 3 ? (
              <Box
                p={1}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5,
                }}
              >
                <IconButton sx={{ color: "white" }}>
                  <Gear />
                </IconButton>
              </Box>
            ) : (
              <IconButton onClick={() => setSelected(3)}>
                <Gear />
              </IconButton>
            )}
            <Stack
              sx={{ height: "100%" }}
              direction={"column"}
              justifyContent={"flex-end"}
              alignItems={"center"}
            >
              <AntSwitch defaultChecked={true} onChange={onToggleMode} />
              <Avatar sx={{ margin: "10px 0" }} src={faker.image.avatar()} />
            </Stack>
          </Stack>
        </Box>
        <Outlet />
      </Stack>
    </>
  );
};

export default DashboardLayout;
