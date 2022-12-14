// import React, { useState } from "react";
// import { Grid, GridColumn } from "@progress/kendo-react-grid";
// import product from "../data.json";
// export const Page2 = () => {
//   const [skip, setSkip] = useState(0);
//   const [take, setTake] = useState(10);
//   const PageChange = (e) => {
//     setSkip(e.page.skip);
//     setTake(e.page.take);
//   };
//   return (
//     <div>
//       Page2
//       <Grid
//         data={product.slice(skip, skip + take)}
//         pageable={true}
//         skip={skip}
//         take={take}
//         total={product.length}
//         onPageChange={PageChange}
//       >
//         <GridColumn field="id" title="Id" />
//         <GridColumn field="title" title="Name" />
//         <GridColumn field="price" title="Price" />
//         <GridColumn field="brand" title="Brand" />
//       </Grid>
//     </div>
//   );
// };
import { Field, Form, FormElement } from "@progress/kendo-react-form";
import React from "react";
import { Input } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";
import { Card, CardHeader } from "@progress/kendo-react-layout";
import { useNavigate } from "react-router-dom";

export const Page2 = () => {
  const navigate = useNavigate();
  const handleValidate = (value: string) => {
    return value ? "" : "data required";
  };
  const handleSubmit = () => {
    navigate("/Dashboard");
    // e.preventDefault();
    // alert(JSON.stringify(data));
    // alert("submitted");
  };
  return (
    <div>
      <center>
        Page2
        <Card
          style={{
            width: 250,
            boxShadow: "0 0 4px 0 rgba(0, 0, 0, .1)",
            marginTop: "15px",
            height: 250,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#B4E1FF",
            color: "#800000",
          }}
        >
          <CardHeader
            style={{
              color: "black",
            }}
          >
            login
          </CardHeader>
          <Form
            onSubmit={handleSubmit}
            render={() => (
              <FormElement
                style={{
                  width: "80%",
                  margin: "10px",
                  color: "#800000",
                  backgroundColor: "#C1FF9B",
                }}
              >
                <Field
                  label="username"
                  name="username"
                  style={{ color: "#AB87FF" }}
                  component={Input}
                  validator={handleValidate}
                />

                <Field
                  label="password"
                  name="password"
                  style={{ color: "#AB87FF" }}
                  component={Input}
                  validator={handleValidate}
                />

                <Button
                  style={{
                    backgroundColor: "pink",
                    margin: "10px",
                  }}
                >
                  Submit
                </Button>
              </FormElement>
            )}
          ></Form>
        </Card>
      </center>
    </div>
  );
};
