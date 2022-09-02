import React from "react";
import { Outlet } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Navbar } from "./components/Navbar";
import { NavigateSummary } from "./components/NavigateSummary";
import { NoMatchComponent } from "./components/NoMatchComponent";
import { Products } from "./components/Products";
import { Featured } from "./components/Featured";
import { NewProducts } from "./components/NewProducts";
import { Users } from "./components/Users";
import { UserDetails } from "./components/UserDetails";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="order-summary" element={<NavigateSummary />}></Route>
        <Route path="products" element={<Products />}>
          <Route index element={<NewProducts />}></Route>
          <Route path="featured" element={<Featured />} />
          <Route path="new-products" element={<NewProducts />} />
        </Route>

        <Route path="users" element={<Users />}></Route>
        <Route path="users/:id" element={<UserDetails />}></Route>
        <Route path="*" element={<NoMatchComponent />}></Route>
      </Routes>
    </>
  );
}

export default App;
