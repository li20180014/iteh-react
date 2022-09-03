import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainFeaturedPost from "../components/blog/MainFeaturedPost";
import FeaturedPost from "../components/blog/FeaturedPost";

const posts = [

  {
    title: "Neki blog",
    text: "Lorem ipsuuum",
    imageSrc: "https://images.unsplash.com/photo-1609377375722-46264cf88939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1164&q=80"
  },
  {
    title: "Neki blog",
    text: "Lorem ipsuuum",
    imageSrc: "https://images.unsplash.com/photo-1609377375722-46264cf88939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1164&q=80"
  }

]

const theme = createTheme();

export default function Blog() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        
        <main>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ fontSize: { lg: "44px", xs: "30px" } }}
            mb="40px"
            mt="40px"
            textAlign="center"
          >
            Browse Blogs
          </Typography>
          
          {posts.slice(0,1).map((post) => (
          <MainFeaturedPost post={post}  /> 
          ))}
          <Grid container spacing={4} mt="8px">
            {posts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>
    </ThemeProvider>
  );
}
