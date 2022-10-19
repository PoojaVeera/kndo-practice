// import React from "react";
// import { Calendar } from "@progress/kendo-react-dateinputs";
// import "../App.scss";
// import { DropDownList } from "@progress/kendo-react-dropdowns";
// export const Page1 = () => {
//   return (
//     <div className="Page1">
//       Page1
//       <Calendar />
//       <DropDownList
//         data={["abc", "xyz", "abc"]}
//         defaultValue="pqr"
//         style={{ width: "300px" }}
//       />
//       <DropDownList
//         style={{
//           width: "300px",
//         }}
//         defaultValue="Basketball"
//       />
//     </div>
//   );
// };

import React from "react";
import { Field, Form, FormElement } from "@progress/kendo-react-form";
export const Page1 = () => {
  return (
    <div>
      Page1
      <Form
        render={(formRenderProps) => (
          <FormElement style={{ maxWidth: 650 }}></FormElement>
        )}
      >
        <Field></Field>
      </Form>
    </div>
  );
};
