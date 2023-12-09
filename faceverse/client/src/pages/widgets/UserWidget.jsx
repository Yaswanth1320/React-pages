import { Image } from "../../components/Image";
import Flex from "components/Flex";
import Wrapper from "components/Wrapper";
import twitter from "Images/twitter.png";
import linkedin from "Images/linkedin.png";
import {
  ManageAccountsOutlined,
  EditOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import { Box, Typography, Divider, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserWidget = ({ userId, picturePath }) => {
  const [user, setUser] = useState(null);
  const { palette } = useTheme();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.neutral.main;

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  if (!user) {
    return null;
  }

  const {
    firstName,
    lastName,
    location,
    occupation,
    viewedProfile,
    impressions,
    friends,
  } = user;

  return (
    <Wrapper>
      <Flex
        paddingBottom="1.1rem"
        onClick={() => navigate(`/profile/${userId}`)}
        gap="0.5rem"
      >
        <Flex gap="1rem">
          <Image image={picturePath} />
          <Box>
            <Typography
              variant="h4"
              color={dark}
              fontWeight="500"
              sx={{
                " &:hover": {
                  color: palette.primary.light,
                  cursor: "pointer",
                },
              }}
            >
              {firstName} {lastName}
            </Typography>
            <Typography color={medium}>{friends.length} friends</Typography>
          </Box>
          <ManageAccountsOutlined />
        </Flex>

        <Box padding="1rem 0">
          <Box display="flex" alignItems="center" mb="0.5rem" gap="1rem">
            <LocationOnOutlined sx={{ color: main }} fontSize="large" />
            <Typography color={medium}>{location}</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap="1rem">
            <WorkOutlineOutlined sx={{ color: main }} fontSize="large" />
            <Typography color={medium}>{occupation}</Typography>
          </Box>
        </Box>

        <Box padding="1rem 0">
          <Flex marginBottom="0.5rem">
            <Typography color={medium}>People viewed</Typography>
            <Typography color={main} fontWeight="500">
              {viewedProfile}
            </Typography>
          </Flex>
          <Flex marginBottom="0.5rem">
            <Typography color={medium}>Impressions of your posts</Typography>
            <Typography color={main} fontWeight="500">
              {impressions}
            </Typography>
          </Flex>
        </Box>

        <Box padding="1rem 0">
          <Typography mb="1rem" fontSize="1rem" color={main} fontWeight="500">
            Social Profiles
          </Typography>

          <Flex mb="0.5rem" gap="1rem">
            <Flex>
              <img src={twitter} alt="twitter" />
              <Box>
                <Typography color={main} fontWeight="500">
                  Twitter
                </Typography>
                <Typography color={medium}>Social NetWork</Typography>
              </Box>
            </Flex>
            <EditOutlined sx={{ color: main }}/>
          </Flex>
        </Box>
      </Flex>
    </Wrapper>
  );
};
