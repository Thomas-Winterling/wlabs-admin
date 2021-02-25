import React, { useState } from "react"
import Popover from '@material-ui/core/Popover';
import SettingsIcon from '@material-ui/icons/Settings';
import { IconButton } from '@material-ui/core';

export default function SimplePopover() {
  
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <IconButton onClick={handleClick}>
        <SettingsIcon color="primary" aria-describedby={id} />
      </IconButton> 
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        
        Einstellungen
        
      </Popover>
    </div>
  );
}