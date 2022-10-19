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
