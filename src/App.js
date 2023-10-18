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
       <Route path="/" element={<Dashboard/>}></Route>
         <Route path="/Sidebar" element={<Sidebar/>}></Route>
         <Route path="/Product" element={<Product/>}></Route>
         <Route path="/Customer" element={<Customer/>}></Route>
         <Route path="/Income" element={<Income/>}></Route>
         <Route path="/Promote" element={<Promote/>}></Route>
         <Route path="/Help" element={<Help/>}></Route>
       </Routes>
    </BrowserRouter>
  )
    
 
}

export default App;
