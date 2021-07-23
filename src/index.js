import ReactDOM from "react-dom";
import StoreComponent from "./Store/StoreComponent";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <StoreComponent>
    <App />
  </StoreComponent>,
  document.getElementById("root")
);
