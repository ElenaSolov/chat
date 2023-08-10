import { Avatar, Badge, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { faker } from "@faker-js/faker";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const ChatElement = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 60,
        borderRadius: 1,
        backgroundColor: "#f7f7f7   ",
      }}
      p={2}
    >
      <StyledBadge
        overlap={"circular"}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Avatar src={faker.image.avatar()} />
      </StyledBadge>
    </Box>
  );
};

export default ChatElement;