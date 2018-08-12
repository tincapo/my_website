import * as React from "react";
import "./App.css";

class App extends React.Component {
  public render() {
    return (
      <div className="terminal">
        <span className="dollar">$</span>
        Work in progress...
        <span className="cursor-blink" />
      </div>
    );
  }
}

export default App;
