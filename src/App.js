import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css';
import Sidebar from "./Layout/Sidebar";
import Dashboard from "./Layout/Dashboard";
import Product from "./Layout/Product";
import Customer from "./Layout/Customer";
import Income from "./Layout/Income";
import Promote from "./Layout/Promote";
import Help from "./Layout/Help";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
    <Sidebar></Sidebar>
       <Routes>
       <Route path="/fitpeo-assignment" element={<Dashboard/>}></Route>
         <Route path="/sidebar" element={<Sidebar/>}></Route>
         <Route path="/product" element={<Product/>}></Route>
         <Route path="/customer" element={<Customer/>}></Route>
         <Route path="/income" element={<Income/>}></Route>
         <Route path="/promote" element={<Promote/>}></Route>
         <Route path="/help" element={<Help/>}></Route>
       </Routes>
    </BrowserRouter>
  )
    
 
}

export default App;
