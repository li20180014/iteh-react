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
    title: "5 RESISTANCE MACHINES GYM BEGINNERS NEED TO TRY!",
    text: "New to the gym and not sure where to start? Resistance machines are a great way for beginners to start resistance training! Much like free weights, resistance machines add weight to an exercise to make it more challenging for your muscles, so they adapt and grow. However, resistance machines are particularly great for beginners as they used a pre-determined movement pattern, meaning you can learn the exercise form in a safe and controlled way and build both your confidence and your strength. It's not just for beginners though, even pro lifters can build muscle using resistance machines. ",
    imageSrc: "https://contentbase.com/uploads/blog/2021/12/dumbbell-exercise-1000x667.jpg?v=jOYormrGDmj5svEo46LzzQ_hW9w="
  },
  {
    title: "CALORIES AND WEIGHT LOSS - WHAT YOU NEED TO KNOW",
    text: "If you’re looking to lose weight, the huge number of diet plans and nutritional guidance available can seem overwhelming, with many competing ideas and eating styles on offer. However, a good starting point for any weight control plan is to gain an understanding of calories, and what they mean for your body. In this guide, we explain what calories are and how many you should be eating if your goal is to lose weight. Read on for moreIS AN UNDERSTANDING OF CALORIES ESSENTIAL FOR WEIGHT LOSS?Here at PureGym we’re keen to support you in your health and fitness journey. If your goal is working towards losing weight, we believe it’s best to approach this a gradual and sustainable way, combining healthy diet changes and exercise to keep your body in tip top shape. While very low calorie ‘crash’ diets may seem appealing if you’re hoping to achieve your goal quickly, it’s almost always more effective in the long term to work on healthy lifestyle changes that will have positive, sustainable benefits to your physical and mental wellbeing. This means gradual changes to your calorie consumption and making healthy, micronutrient-rich food choices rather than extreme changes that could have a negative impact on your health. While a calorie-tracking approach to nutrition can help build an understanding of which types of food may be best for achieving healthy weight loss goals, it may not suit everyone. If you’re overly concerned about your weight, speak to your doctor, a dietician or a nutritionist who may be able to work up a meal plan that suits your body type.",
    imageSrc: "https://prod-ne-cdn-media.puregym.com/media/788576/salmon.jpg?quality=80&mode=pad&width=992"
  },
  {
    title: "CALORIES AND WEIGHT LOSS - WHAT YOU NEED TO KNOW",
    text: "Unless you actively work on your flexibility, it's likely you struggle with tight muscles. Not only can this feel uncomfortable in day to day activities, it can impact your range of motion at the gym!If you struggle getting to, or below, parallel in your squats, focusing on lower body mobility and stretching before and after your squats can help to improve your depth. Mobility and stretching are often overlooked but spending a little bit of time priming your body can help to improve your form, range of movement and flexibility – which all can help with overall strength and power.Add this mobility routine into your workout plan, designed to improve your squat by mobilising your hip flexors, glutes, quads and hamstrings. We've also shared a quick mobility routine for squats on our TikTok!",
    imageSrc: "https://prod-ne-cdn-media.puregym.com/media/807343/stretchestoimprovesquats.jpg?quality=80&mode=pad&width=992"
  },
  {
    title: "ONE HOUR GYM WORKOUTS",
    text: "Sticking to short, high-intensity sessions may be tempting when time is tight. But if you have specific goals in mind, carving out an hour to exercise brings with it fitness benefits that micro workouts just can’t replicate.Even if gyms are closed, or you’d just rather work out at home, an hour gives you plenty of time for a well-rounded routine with a proper warm-up and cool down. You could do a full body workout, target specific areas or work on your cardiovascular endurance. Plus, having 60 minutes lets you build the intensity over the course of your workout session.Whether you’re prepping for a triathlon or an obstacle race, regular one hour exercise sessions at the gym are an excellent step in the right direction. Longer sessions are perfect for honing specific techniques to get you over the finish line, letting you work on foot strike, breathing patterns, pedal rhythm or pull-ups, for example.But for maximum return on your time investment, having a solid workout plan in place is key. Pre-planning lets you move around the gym with purpose, without wasting precious time wondering what to do next. ",
    imageSrc: "https://prod-ne-cdn-media.puregym.com/media/800047/kimberley_blog.jpg?quality=80&mode=pad&width=992"
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
