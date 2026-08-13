// import React from "react";

// import Dashboard from "./Dashboard";
// import TopBar from "./TopBar";

// const Home = () => {
//   return (
//     <>
//       <TopBar />
//       <Dashboard />
//     </>
//   );
// };

// export default Home;

import React from "react";
import {Routes,Route} from "react-router-dom";
import TopBar from "./TopBar";
import Dashboard from "./Dashboard";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";
import Apps from "./Apps";

const Home =()=>{
  return (
    <>
      <TopBar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/holdings" element={<Holdings/>}/>
        <Route path="/positions" element={<Positions/>}/>
        <Route path="/funds" element={<Funds/>}/>
        <Route path="/apps" element={<Apps/>}/>
      </Routes>
    </>
  );
};
export default Home;