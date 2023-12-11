import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Facebook";
import FavoriteIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/Email";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Facebook" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Twitter" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Email" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
}
