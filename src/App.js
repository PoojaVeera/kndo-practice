import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { Page1 } from "./components/Page1";
// import { Page2 } from "./components/Page2";
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
      <Routes>
        <Route path="/" element={<Page1 />} />
        {/* <Route path="/Page2" element={<Page2 />} /> */}
      </Routes>
    </div>
  );
}

export default App;
