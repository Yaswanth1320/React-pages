import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import UserWidget from "./widgets/UserWidget";
import PostWidget from "./widgets/PostWidget";
import AdvertWidget from "./widgets/AdvertWidget";
import FriendList from "./widgets/FriendList";
import DisplayPosts from "./widgets/DisplayPosts";

function Home() {
  const { _id, picturePath } = useSelector((state) => state.user);
  const isNonMobile = useMediaQuery("(min-width:1000px)");

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobile ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobile ? "26%" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
        <Box
          flexBasis={isNonMobile ? "42%" : undefined}
          mt={isNonMobile ? undefined : "2rem"}
        >
          <PostWidget picturePath={picturePath} />
          <DisplayPosts userId={_id} />
        </Box>
        {isNonMobile && (
          <Box flexBasis="26%">
            <AdvertWidget />
            <Box m="2rem 0" />
            <FriendList userId={_id} />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Home;
