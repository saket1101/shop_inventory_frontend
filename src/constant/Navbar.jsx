import React, { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { MenuItem, Avatar, IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [log_open, setLog_open] = useState(false);

  const handle_log_open = (event) => {
    setAnchorEl(event.currentTarget);
    setLog_open(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setLog_open(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLog_open(false);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-500 p-1">
      <div className="flex gap-2">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
        <div>logo</div>
      </div>

      <div className=" flex items-center gap-1">
        <div>
          <NotificationsIcon />
        </div>
        <div>
          <IconButton onClick={handle_log_open}>
            <Avatar alt="User Avatar" src="/path/to/avatar.jpg" />
          </IconButton>
          <Menu
            id="demo-positioned-menu"
            anchorEl={anchorEl}
            open={log_open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            style={{ marginTop: "60px" }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
