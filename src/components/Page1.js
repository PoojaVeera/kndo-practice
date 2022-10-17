import React from "react";
import { Calendar } from "@progress/kendo-react-dateinputs";

import { DropDownList } from "@progress/kendo-react-dropdowns";
export const Page1 = () => {
  return (
    <div>
      Page1
      <Calender />
      <DropDownList
        data={["abc", "xyz", "abc"]}
        defaultValue="pqr"
        style={{ width: "300px" }}
      />
      <DropDownList
        style={{
          width: "300px",
        }}
        defaultValue="Basketball"
      />
    </div>
  );
};
