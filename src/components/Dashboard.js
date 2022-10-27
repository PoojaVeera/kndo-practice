import { Menu, MenuItem } from "@progress/kendo-react-layout";

import React from "react";

export const Dashboard = () => {
  return (
    <div>
      Dashboard
      <Menu
        vertical={true}
        style={{
          display: "inline-block",
          backgroundColor: "yellow",
        }}
      >
        <MenuItem text="hello1">
          <MenuItem text="hello 1.1" />
          <MenuItem text="hello 1.2" />
        </MenuItem>
        <MenuItem text="hello2" />
      </Menu>
    </div>
  );
};
