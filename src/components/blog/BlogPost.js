import React, { useState, useEffect } from "react";
import { Typography, Stack } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";


export default function BlogPost() {
  const location = useLocation();
  const { blogPost } = location.state;
 
  let navigate = useNavigate();


  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
      justifyContent="center"
    >
      <img src={blogPost.imageSrc} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }} width="50%">
        <Typography
          sx={{ fontSize: { lg: "64px", xs: "30px" } }}
          fontWeight={700}
          color="black"
          textTransform="capitalize"
        >
          {blogPost.title}
        </Typography>
        <Typography
          sx={{ fontSize: { lg: "24px", xs: "18px" } }}
          color="#4F4C4C"
          textAlign="justify"
        >
          {blogPost.text}
        </Typography>
       
        {/* <Typography
          sx={{ fontSize: { lg: "16px", xs: "14px" } } }
          color="#4F4C4C"
        >
          Written by: {blogPost.user.firstName} {blogPost.user.lastName}
        </Typography> */}
        {/* {allowDelete && (
          <Button variant="contained" style={{ maxWidth: "11rem" }} onClick={handleClick}>
            Delete Blog
          </Button>
        )} */}
      </Stack>
    </Stack>
  );
}
