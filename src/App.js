import React from "react";

// Styles
import { GlobalStyle } from "./utils/style/GlobalStyle";

// Import Pages
import About from "./pages/About";

// Import Components

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <About />
    </div>
  );
};

export default App;
