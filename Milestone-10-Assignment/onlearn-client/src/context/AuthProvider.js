import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dark, setDark] = useState(true);
  const userSignUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = (googleProvider) => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const facebookSignIn = (facebookProvider) => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };
  const getProfile = (name, imgURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: imgURL,
    });
  };
  // const passwordReset = (email) => {
  //   return sendPasswordResetEmail(email);
  // };
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const logOut = () => {
    return signOut(auth);
  };
  const value = {
    user,
    dark,
    loading,
    setDark,
    userSignUp,
    userSignIn,
    googleSignIn,
    facebookSignIn,
    getProfile,
    // passwordReset,
    verifyEmail,
    logOut,
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (user === null) {
        setUser(currentUser);
        setLoading(false);
      }
      if (currentUser.emailVerified) {
        setUser(currentUser);
        console.log(currentUser);
        setLoading(false);
        toast.success("Successfully Logged in");
      } else {
        setUser("");
        toast.error("Please verify your email");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
