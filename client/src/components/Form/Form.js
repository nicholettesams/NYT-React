import React from "react";
import Header from "../Header";
import Search from "../Search";
import Results from "../Results";
import Saved from "../Saved";

const App = () =>
  <header>
    <Header />
    <section>
      <Search />
    </section>
    <section>
      <Results />
    </section>
    <section>
      <Saved />
    </section>
  </header>;

export default App;
