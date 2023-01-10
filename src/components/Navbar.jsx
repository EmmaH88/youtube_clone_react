import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "./utils/constant";
const Navbar = () => (
  <stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      backgroun: "#000",
      top: 0,
      justifyContent: "space-bteween",
    }}
  >
    <link
      to="/"
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <img src={logo} alt="logo" height={45} />
    </link>
  </stack>
);

export default Navbar;
