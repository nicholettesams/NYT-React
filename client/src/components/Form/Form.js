import React from "react";
import Header from "../Header";
import Search from "../Search";
import Results from "../Results";
import Saved from "../Saved";

const App = () =>
  <div className="container">
    <header>
      <Header />
    </header>
    <section>
      <Search />
    </section>
    <section>
      <Results />
    </section>
    <section>
      <Saved />
    </section>
  </div>

export default App;
