import { BrowserRouter } from "react-router-dom";
import "./assets/css/main.css";
import "./assets/css/style.css";
import "./assets/js/index.var.js";

import Layout from "./Layout";
import ScrollToTop from "./components/ScrollToTop.jsx";
export default function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <ScrollToTop />
        <Layout />
      </BrowserRouter>
    </>
  );
}
