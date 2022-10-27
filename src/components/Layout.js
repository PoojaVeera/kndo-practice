import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
} from "@progress/kendo-react-layout";
import React from "react";
import { Link } from "react-router-dom";
export const Layout = () => {
  return (
    <div>
      <AppBar positionMode="sticky">
        <AppBarSection themeColor="light">
          <Link to="Page1">Page1</Link>
          <AppBarSpacer style={{ width: 50 }} />
          <Link to="Page2">Page2</Link>
          <AppBarSpacer style={{ width: 8 }} />
          <Link to="BottomNav">BottomNav</Link>
          <AppBarSpacer style={{ width: 8 }} />
          <Link to="FormSwitch">From components</Link>
        </AppBarSection>
      </AppBar>
    </div>
  );
};
