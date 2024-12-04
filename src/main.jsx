import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./root/root";
import ProviderConfig from "./tools/provider";

createRoot(document.getElementById("root")).render(
  <ProviderConfig>
    <Root />
  </ProviderConfig>
);
