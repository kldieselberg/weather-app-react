import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Main from "./Main";
import Header from "./Header";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Main />
  </StrictMode>
);
