import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateProductPage from "./pages/CreateProductPage";
import EditProductPage from "./pages/EditProductPage";
import ViewProductPage from "./pages/ViewProductPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/pages/CreateProductPage"
          element={<CreateProductPage />}
        />
        <Route
          path="/pages/EditProductPage/:productID"
          element={<EditProductPage />}
        />
        <Route
          path="/pages/ViewProductPage/:productID"
          element={<ViewProductPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
