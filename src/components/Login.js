import React, { useRef, useState } from "react";
import Header from "./Header";
import { validFormData } from "../utils/ValidateForm";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInFrom] = useState(true);
  const [messageError, setMessageError] = useState(null);

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const HandleButtonClick = () => {
    const message = validFormData(email.current.value, password.current.value);
    setMessageError(message);

    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current?.value,
          })
            .then(() => {
              const { displayName, email, uid } = auth.currentUser;
              dispatch(
                addUser({
                  id: uid,
                  name: displayName,
                  email: email,
                })
              );
              
            })
            .catch((error) => {
              setMessageError(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessageError(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current?.value, password.current?.value)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          setMessageError("Please Signup or check  your Email and Password");
        });
    }
  };

  const ToggleSignInForm = () => {
    setIsSignInFrom(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg"
          alt="background"
        ></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <label className="block font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </label>
        {!isSignInForm && (
          <input
            ref={name}
            className="p-4 my-2 w-full bg-gray-700 rounded-lg bg-opacity-80"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="p-4 my-2 w-full bg-gray-700 rounded-lg bg-opacity-80"
          type="text"
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="p-4 my-2 w-full bg-gray-700 rounded-lg bg-opacity-80"
          type="password"
          placeholder="Password"
        />

        <p className="text-red-600">{messageError}</p>
        <button
          className="p-4 my-6 bg-red-600 hover:bg-red-700 w-full rounded-lg"
          onClick={HandleButtonClick}
        >
          {isSignInForm ? "Login" : "Create Account"}
        </button>
        <p className="cursor-pointer" onClick={ToggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already a member? Sign in here."}
        </p>
      </form>
    </div>
  );
};

export default Login;
