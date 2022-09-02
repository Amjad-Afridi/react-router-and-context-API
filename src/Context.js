import React from "react";
import { createContext, useState } from "react";

export const ContextValue = createContext();
function Context({ children }) {
  const [value, setValue] = useState(["a", "b"]);

  return (
    <div>
      <ContextValue.Provider value={{ value, setValue }}>
        {children}
      </ContextValue.Provider>
    </div>
  );
}

export default Context;
