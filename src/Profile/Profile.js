import React from 'react';
import {Avatar, Grid} from "@mui/material";
import avatar from '../assets/avatar.jpg';
import SideInfo from "../SideInfo/SideInfo";

const Profile = () => {
  return (
    <Grid container sx={{minHeight: "100vh", borderRight: "1px solid #efefef"}}>
      <Grid item xs={4} sx={{backgroundColor: "primary.dark"}}>
        <Avatar alt="super Natali" src={avatar} sx={{ width: 150, height: 150, margin: "20px auto" }}/>
        <SideInfo/>
      </Grid>
      <Grid item xs={8}>2</Grid>
    </Grid>
  )
  ;
};

export default Profile;