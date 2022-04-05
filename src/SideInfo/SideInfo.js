import React from 'react';
import {Box, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const list = [
  {
    text: "address",
    icon: LocationOnIcon,
  },
  {
    text: "phone",
    icon: PhoneIcon,
  },
  {
    text: "email",
    icon: EmailIcon,
  }
];

const title = "Contacts";

const SideInfo = () => {
  return (
    <Box sx={{padding: "15px"}}>
      <Typography variant="h6" align={"center"} color={"white"}>
        {title}
      </Typography>
      <List dense sx={{color: "white"}}>
        {list.map((listItem) => {
          return <ListItem>
            {listItem.icon ? <ListItemIcon>
              <listItem.icon/>
            </ListItemIcon> : null}
            <ListItemText primary={listItem.text}/>
          </ListItem>
        })}
      </List>
    </Box>
  );
};

export default SideInfo;