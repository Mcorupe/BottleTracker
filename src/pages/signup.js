import React, { useState } from "react";
import { withFirebase } from "../components/withFirebase";
import { navigate } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Form from "../components/Form";
import { firestore } from "firebase";
// import { useSignUpForm } from "../components/formHooks";

function SignUpPage(props) {
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  //{user: username, password: password}
  const setUser = signUpData =>
    props.firebase
      .auth()
      .createUserWithEmailAndPassword(signUpData.email, signUpData.password)
      .then(resp => {
        console.log(resp);
        return props.firebase
          .firestore()
          .collection("users")
          .add({
            firstName: signUpData.firstName,
            lastName: signUpData.lastName,
            userName: signUpData.userName,
            initials: signUpData.firstName[0] + signUpData.lastName[0],
            createdAt: new Date()
          });
      })
      .catch(e => {
        console.log(e);
        setAuthError(e);
      });

  const signIn = () => {
    setUser({ email, password, userName, firstName, lastName });
    return navigate("/login");
  };
  return (
    <Layout>
      <SEO
        keywords={["gatsby", "tailwind", "react", "tailwindcss", "SignUp"]}
        title="SignUp"
      />
      <div className="flex flex-1 justify-center">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              onChange={e => setUserName(e.target.value)}
              placeholder="Username"
              type="text"
              value={userName}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              onChange={e => setFirstName(e.target.value)}
              placeholder="First Name"
              type="text"
              value={firstName}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              onChange={e => setLastName(e.target.value)}
              placeholder="Last Name"
              type="text"
              value={lastName}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
              value={email}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-grey-700 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
              value={password}
            />
            <div className="text-red-600 center">
              {authError ? <p>{authError.message}</p> : null}{" "}
            </div>
          </div>
          <div className="flex justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={signIn}
              type="button"
            >
              Sign Up
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => navigate("/login")}
              type="button"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default withFirebase(SignUpPage);
