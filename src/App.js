import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { Page1 } from "./components/Page1";
import { Page2 } from "./components/Page2";
import { Layout } from "./components/Layout";
import { BottomNav } from "./components/BottomNav";
import { Dashboard } from "./components/Dashboard";
import {
  FormAutoComplete,
  FormCheckbox,
  FormSwitch,
  FormRadioGroup,
} from "./components/form-components";
function App() {
  return (
    // <div className="App">
    //   <h1>Hello KendoReact!</h1>
    //   <Link to="/Page1" style={{ textDecoration: "none" }}>
    //     <Button
    //       themeColor={"error"}
    //       icon="folder"
    //       disabled={false}
    //       fillMode={"outline"}
    //     >
    //       click me{" "}
    //     </Button>
    //   </Link>
    //   <Link to="/Page2" style={{ textDecoration: "none" }}>
    //     <Button themeColor={"success"} icon="star">
    //       Page2
    //     </Button>
    //   </Link>
    //   <Routes>
    //     <Route path="Page1" element={<Page1 />} />
    //     <Route path="Page2" element={<Page2 />} />
    //   </Routes>
    // </div>

    <div>
      <Layout />
      <Routes>
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/" element={<Page2 />} />
        <Route path="/BottomNav" element={<BottomNav />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route
          path="/FormSwitch"
          element={
            <>
              <FormSwitch />
              <FormAutoComplete />
              <FormCheckbox />
              <FormRadioGroup />
            </>
          }
        />
        \
      </Routes>
    </div>
  );
}

export default App;
