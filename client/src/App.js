// Imports - Dependencies
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Imports - Pages
import Home from "./components/HomePage";
import Login from "./components/LoginPage";
import Register from "./components/RegisterPage";
import AddProduct from "./components/AddProductPage";
import UpdateProduct from "./components/UpdateProductPage";

// Defines the routes for the application
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={<Home />}
        ></Route>
        <Route
          path="/register"
          exact
          element={<Register />}
        ></Route>
        <Route
          path="/login"
          exact
          element={<Login />}
        ></Route>
        <Route
          path="/add"
          exact
          element={<AddProduct />}
        ></Route>
        <Route
          path="/update/:id"
          exact
          element={<UpdateProduct />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

// Exports the app's main component
export default App;
