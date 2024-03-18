import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="386932037035-k8v833noqjk7m4***********.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
