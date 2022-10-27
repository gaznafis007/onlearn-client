import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
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
  const getProfile = (name, imgURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: imgURL,
    });
  };
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
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
    getProfile,
    verifyEmail,
    logOut,
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if ((currentUser = null || currentUser.emailVerified)) {
        setUser(currentUser);
        setLoading(false);
        toast.success("Successfully Login");
      } else {
        toast.error("Email is not verified");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
