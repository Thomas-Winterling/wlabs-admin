import React, { useState } from "react"
import Popover from '@material-ui/core/Popover';
import { IconButton } from '@material-ui/core';
import TodayIcon from '@material-ui/icons/Today';
import DateTime from '../dateTime/DateTime'

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
            <TodayIcon aria-describedby={id} color="primary" />
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
        <DateTime />
      </Popover>
    </div>
  );
}