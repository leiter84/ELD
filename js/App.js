import React, { Component } from "react";
import { Provider, observer } from "mobx-react/native";
import ScreenNav from "./screens/navConfig";

import AppState from "./data/AppState";

@observer
class App extends Component {
  render() {
    return (
      <Provider appState={AppState}>
        <ScreenNav />
      </Provider>
    );
  }
}

export default App;
