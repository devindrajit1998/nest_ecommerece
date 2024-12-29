import { BrowserRouter } from "react-router-dom";
import "./assets/css/main.css";

import Layout from "./Layout";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </>
  );
}
