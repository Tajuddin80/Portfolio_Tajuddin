import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

import "./index.css";
import { router } from "./Router/Router";
import ClickSpark from "./components/ClickSpark/ClickSpark";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <RouterProvider router={router} />
    </ClickSpark>
  </StrictMode>
);
