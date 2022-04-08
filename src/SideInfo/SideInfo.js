import React from 'react';
import {Box, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";



function callbackSos (element) {
  return <ListItem key={element.text}>
    <ListItemIcon>
      {element.icon}
    </ListItemIcon>
    <ListItemText primary={element.text} />
  </ListItem>
}


const SideInfo = (props) => {
  return (
    <Box sx={{padding: "0 15px"}}>
      {props.title ? <Typography variant="h6" align={"center"} color={"white"}>
        {props.title}
      </Typography> : null}
      <List dense sx={{color: "white"}}>
        {props.list?.map(callbackSos)}
      </List>
    </Box>
  );
};

export default SideInfo;