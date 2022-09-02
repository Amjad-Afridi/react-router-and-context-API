import React from "react";
import { useNavigate } from "react-router-dom";
export const NavigateSummary = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Navigated successfully</div>;
      <button onClick={() => navigate("/")}>back to home</button>
    </>
  );
};
