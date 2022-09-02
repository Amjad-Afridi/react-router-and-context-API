import React from "react";
import { useNavigate } from "react-router-dom";
import { NavigateSummary } from "./NavigateSummary";
export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Home page</div>
      <button onClick={() => navigate("order-summary")}>
        navigate to navigateSummary
      </button>
    </>
  );
};
