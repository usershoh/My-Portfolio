import React, { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";

const ProviderConfig = ({ children }) => {
  return (
    <div>
      <StrictMode>
        <BrowserRouter>{children}</BrowserRouter>
      </StrictMode>
    </div>
  );
};

export default ProviderConfig;
