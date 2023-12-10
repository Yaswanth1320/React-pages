import { Typography, useTheme } from "@mui/material";
import Flex from "components/Flex";
import Wrapper from "components/Wrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <Wrapper>
      <Flex>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </Flex>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info5.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <Flex>
        <Typography color={main}>Edurac</Typography>
        <Typography color={medium}>edurac.com</Typography>
      </Flex>
      <Typography color={medium} m="0.5rem 0">
        I believe all women are pretty without makeup—and can be pretty powerful
        with the right makeup
      </Typography>
    </Wrapper>
  );
};

export default AdvertWidget;
