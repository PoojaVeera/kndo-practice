import React from "react";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import product from "../data.json";
export const Page2 = () => {
  return (
    <div>
      Page2
      <Grid data={product}>
        <GridColumn field="id" title="Id" />
        <GridColumn field="title" title="Name" />
        <GridColumn field="price" title="Price" />
        <GridColumn field="brand" title="Brand" />
      </Grid>
    </div>
  );
};
