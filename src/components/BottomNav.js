import * as React from "react";
import { BottomNavigation } from "@progress/kendo-react-layout";
import { DropDownList } from "@progress/kendo-react-dropdowns";
const items = [
  {
    icon: "chart-line-markers",
    text: "Revenue",
    selected: true,
  },
  {
    icon: "arrows-swap k-flip-v",
    text: "Transactions",
  },
  {
    icon: "chart-pie",
    text: "Overview",
  },
  {
    icon: "gear",
    text: "Settings",
  },
  {
    icon: "more-horizontal",
    text: "More",
  },
];
const themeColors = [
  "primary",
  "secondary",
  "tertiary",
  "info",
  "success",
  "warning",
  "error",
  "dark",
  "light",
  "inverse",
];
const fills = ["solid", "flat"];

export const BottomNav = () => {
  const [themeColor, setThemeColor] = React.useState("primary");
  const [fill, setFill] = React.useState("flat");
  const [selectedIndex, setSelectedIndex] = React.useState(
    items.findIndex((x) => x.selected === true)
  );

  const switchThemeColor = (e) => {
    setThemeColor(e.target.value);
  };

  const switchFill = (e) => {
    setFill(e.target.value);
  };

  const handleSelect = (e) => {
    setSelectedIndex(e.itemIndex);
  };

  return (
    <div className="example-wrapper">
      <div className="content row">
        <div className="col-6">
          <p>Choose Theme Color</p>
          <DropDownList
            data={themeColors}
            value={themeColor}
            onChange={switchThemeColor}
          />
        </div>
        <div className="col-6">
          <p>Choose Fill Option</p>
          <DropDownList data={fills} value={fill} onChange={switchFill} />
        </div>
      </div>
      <BottomNavigation
        items={items.map((item, index) => ({
          ...item,
          selected: index === selectedIndex,
        }))}
        themeColor={themeColor}
        fill={fill}
        onSelect={handleSelect}
      />
      <style>{`my-app { padding: 0 !important; }
            .content { margin: 20px; }`}</style>
    </div>
  );
};
