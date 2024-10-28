import "./App.css";
import { BrowserRouter as Router, Route, Routes,useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateProductPage from "./pages/CreateProductPage";
import ViewProductPage from "./pages/ViewProductPage";
import EditProductPage from "./pages/EditProductPage";

function App() {
  return ( 
  <div className="App">
    <Router> 
    <Routes> 
    <Route path="/" element={<HomePage/>} />  
    <Route path="/create-Product" element={<CreateProductPage/>} />  
    <Route path="/edit-product/:id" element={ <EditProductPage/>} />  
    <Route path="/view-product/:id" element={<ViewProductPage/>} />  
    </Routes>
    </Router>
  </div>
);
}

export default App;
