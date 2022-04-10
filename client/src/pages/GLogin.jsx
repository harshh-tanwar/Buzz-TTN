import React, { useState, useContext, useEffect } from "react";
import "../config/firebaseConfig";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GLogin = () => {
  const navigate = useNavigate();

  const loginWithGoogle = async () => {
    try {
      console.log("Hello");
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      const result = await signInWithPopup(auth, provider);

      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      const userData = {
        name: user.displayName,
        email: user.email,
        userImage: user.photoURL,
        google: true,
        password: "*#*#)@*!%@",
      };

      await axios.post("http://localhost:8080/api/users", userData);

      localStorage.setItem("token", token);
      localStorage.setItem("user-data", JSON.stringify(userData));

      navigate("/");
    } catch (error) {
      console.log(`Error ${error}`);
    }
  };

  return (
    <div>
      <button onClick={loginWithGoogle}>Login With Google</button>
    </div>
  );
};

export default GLogin;