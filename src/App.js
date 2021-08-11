import React, { useState } from "react";

// Routing
import { Switch, Route } from "react-router-dom";

// Styles
import { GlobalStyle } from "./utils/style/GlobalStyle";

// Import Pages
import About from "./pages/About";
import Navigation from "./components/Navigation";
import Header from "./components/Header";

// Import Components

const App = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="App">
      <GlobalStyle />
      <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Navigation toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Switch>
        <Route path="/" exact>
          <About />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
