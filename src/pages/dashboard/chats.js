import {
  Box,
  IconButton,
  Stack,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import Search from "../../components/search/Search";
import SearchIconWrapper from "../../components/search/SearchIconWrapper";
import StyledInputBase from "../../components/search/StyledInputBase";

const Chats = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: 320,
        height: "100vh",
        backgroundColor: "#F8FAFF",
        boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Stack p={3}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant={"h5"}>Chats</Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>
        <Stack sx={{ width: "100%" }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass />
            </SearchIconWrapper>
            <StyledInputBase placeholder={"Search ..."} />
          </Search>
        </Stack>
        <Stack spacing={1}>
          <Stack direction={"row"} spacing={1.5} alignItems={"center"}>
            <ArchiveBox size={24} />
            <Button>Archive</Button>
          </Stack>
          <Divider />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Chats;
