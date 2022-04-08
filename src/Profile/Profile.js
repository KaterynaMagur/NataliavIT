import React from 'react';
import {Avatar, Box, Grid} from "@mui/material";
import avatar from '../assets/avatar.jpg';
import SideInfo from "../SideInfo/SideInfo";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const contactsList = [
  {
    text: "address",
    icon: <LocationOnIcon/>,
  },
  {
    text: "phone",
    icon: <PhoneIcon/>,
  },
  {
    text: "email",
    icon: <EmailIcon/>,
  }
];

const Profile = () => {
  return (
    <Grid container sx={{minHeight: "100vh", borderRight: "1px solid #efefef"}}>
      <Grid item xs={4} sx={{backgroundColor: "primary.dark"}}>
        <Avatar alt="super Natali" src={avatar} sx={{ width: 150, height: 150, margin: "20px auto" }}/>
        <SideInfo title="Contacts" list={contactsList} />
        <Box sx={{padding: "30px"}}/>
        <SideInfo title="References" list={contactsList} />
        <SideInfo list={contactsList} />
      </Grid>
      <Grid item xs={8}>2</Grid>
    </Grid>
  )
  ;
};

export default Profile;