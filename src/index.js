import React from 'react';
// import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
//============================================================
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./components/redux/store";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
//============================================================