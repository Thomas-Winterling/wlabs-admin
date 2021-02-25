import React, { useState } from "react"
import Popover from '@material-ui/core/Popover';
import { IconButton, Badge } from '@material-ui/core';
import MessageIcon from '@material-ui/icons/Message';

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
            <Badge badgeContent={8} color="secondary">
                <MessageIcon aria-describedby={id} color="primary"/>
            </Badge>
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
        1319435873535363
      </Popover>
    </div>
  );
}