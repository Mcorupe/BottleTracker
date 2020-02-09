import React, { useState } from "react";
import { withFirebase } from "../components/withFirebase";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { navigate } from "gatsby";

const LoginPage = props => {
  const { firebase, location } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  const login = () =>
    //use user credentials to sign in
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        //store the user in localstorage
        localStorage.setItem("user", JSON.stringify(user));
        //log the user
        console.log("login form", user);
        //redirect to form page
        return navigate("/form");
      })
      //catch the error and display it just in case
      .catch(err => setAuthError(err.message));
  return (
    <Layout location={location}>
      <SEO
        keywords={["gatsby", "tailwind", "react", "tailwindcss", "Login"]}
        title="Login"
      />
      <div>
        <div className="flex flex-1 justify-center max-h-full">
          <form className="bg-white shadow-md rounded px-8 pt-6">
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
                type="text"
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
            <div className="flex justify-between mb-6">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={login}
                type="button"
              >
                Login
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => navigate("/signup")}
                type="button"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default withFirebase(LoginPage);
