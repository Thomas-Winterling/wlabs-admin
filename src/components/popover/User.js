import React, { useState } from "react"
import Popover from '@material-ui/core/Popover';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import EmailIcon from '@material-ui/icons/Email';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { IconButton } from '@material-ui/core';
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { Button } from "react-bootstrap"

export default function SimplePopover() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

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
      <span aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
          <IconButton>
            Administrator <ArrowDropDownIcon />
          </IconButton>
      </span>
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
        <div>
          <PersonIcon />
          <span>Profil</span>
        </div>
        <div>
          <SettingsIcon />
          <span>Einstellungen</span>
        </div>
        <div>
          <EmailIcon />
          <span>Emails</span>
        </div>
        <div>
          <hr />
        <PowerSettingsNewIcon color="error" />
        <Button variant="link" style={{color: 'red'}} onClick={handleLogout}>Ausloggen</Button>
        </div>
      </Popover>
    </div>
  );
}