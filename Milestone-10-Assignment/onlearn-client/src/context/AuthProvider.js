import React from "react";
import { createContext } from "react";
import { getAuth } from "firebase/auth";
import { app } from "../Firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const AuthContext = createContext();
  return (
    <div>
      <AuthContext.Provider>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
