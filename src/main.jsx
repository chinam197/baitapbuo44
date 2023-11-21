import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import Provider from "./core/Provider.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { progress } from "framer-motion";

const domain = "dev-fvq8smevismghcss.us.auth0.com";
const clientId = "p8UXGkxAUgaituB0dfU6PlelZZ4Jvw21";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <Provider>
      <App />
    </Provider>
  </Auth0Provider>
);
