import React from "react";
import { Link } from "react-router-dom";
export const Layout = () => {
  return (
    <div>
      <Link to="Page1">Page1</Link>
      <Link to="Page2">Page2</Link>
      <Link to="BottomNav">BottomNav</Link>
    </div>
  );
};
