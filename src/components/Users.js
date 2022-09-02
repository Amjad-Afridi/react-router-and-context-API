import React from "react";
import { useSearchParams } from "react-router-dom";
export const Users = () => {
  const [params, setParams] = useSearchParams();
  const checkUser = params.get("filter") === "active";
  return (
    <>
      <div>
        <h1>this is heading one</h1>
        <h2>this is heading two</h2>
        <h3>this is heading three</h3>
      </div>
      <button onClick={() => setParams({ filter: "active" })}>
        active user
      </button>
      <button onClick={() => setParams({})}>restore users</button>
      <div>
        {" "}
        {checkUser ? <h1>this is active user</h1> : <h1>all users</h1>}
      </div>
    </>
  );
};
