import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateProductPage from "./pages/CreateProductPage";
import EditProductPage from "./pages/EditProductPage";
import HomePage from "./pages/HomePage";
import ViewProductPage from "./pages/ViewProductPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/create" element={<CreateProductPage />} />
          <Route path="/edit/:productId" element={<EditProductPage />} />
          <Route
            path="/product/view/:productId"
            element={<ViewProductPage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
