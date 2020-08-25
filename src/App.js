import React from "react";
import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckSquare,
  faCoffee,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import { Header, Main, Footer } from "./components";

library.add(faCheckSquare, faCoffee, faFilter);

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
