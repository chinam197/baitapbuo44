import React, { useState } from "react";
import Loader from "./components/loader/Loader";
import LoginButton from "./components/loader/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { ProviderContext } from "./core/Provider";
const App = () => {
  const { spinners } = useContext(ProviderContext);
  const { isAuthenticated, isLoading, error } = useAuth0();

  return (
    <div className="wrapper">
      {error && isLoading && <Loader />}
      {!error && !isLoading && (
        <>
          <h1 className="auth0">Auth0</h1>
          <LogoutButton />
          <LoginButton />
          <Profile />
        </>
      )}
      {isLoading && <Loader />}
      <ToastContainer />
    </div>
  );
};

export default App;
