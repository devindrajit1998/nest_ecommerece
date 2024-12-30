import { BrowserRouter } from "react-router-dom";
import "./assets/css/main.css";
import "./assets/css/style.css";
import "./assets/js/index.var.js";

import Layout from "./Layout";
export default function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Layout />
      </BrowserRouter>
    </>
  );
}
