import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Context, { ContextValue } from "../Context";

export const Products = () => {
  const { value, setValue } = useContext(ContextValue);
  
  return (
    <>
      <div>Products page</div>;
      <nav>
        <Link to="featured">featured</Link>
        <Link to="new-products">new products</Link>
      </nav>
      <button onClick={() => setValue(["new Array"])}>set context value</button>
      <Outlet />
    </>
  );
};
