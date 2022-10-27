import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const userSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = (googleProvider) => {
    return signInWithPopup(auth, googleProvider);
  };
  const facebookSignIn = (facebookProvider) => {
    return signInWithPopup(auth, facebookProvider);
  };
  const logOut = () => {
    return signOut(auth);
  };
  const value = {
    user,
    userSignUp,
    userSignIn,
    googleSignIn,
    facebookSignIn,
    logOut,
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
