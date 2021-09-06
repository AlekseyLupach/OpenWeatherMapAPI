import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./containers/App";
import configureStore from "./store";
<<<<<<< HEAD
=======
import "./services/i18n";
>>>>>>> f967c21cfea217b87acd131b289e6d056520a639

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <React.Suspense fallback="Loading...">
      <App />
    </React.Suspense>
  </Provider>,
  document.getElementById("root"),
);
