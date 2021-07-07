import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import Amplify, { Auth } from 'aws-amplify';

Amplify.configure({
    API: {
        endpoints: {
            name: "testAPICall",
            endpoint: "https://w079px97l2.execute-api.us-east-1.amazonaws.com/private",
            region: "us-east-1",

            custom_header: async () => {
                return { Authorization: `Bearer ${(await Auth
                    .currentSession())
                    .getIdToken()
                    .getJwtToken()}` 
                }
            }
        }
    }
})


ReactDOM.render(
  <React.StrictMode>
      <Router>
        <App />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
