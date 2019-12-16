import React, { useState } from "react";
import { withFirebase } from "../components/withFirebase";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Form from "../components/Form";
import { firestore } from "firebase";
import { navigate } from "gatsby";

const loginPage = props => {
  console.log(props);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  const login = () => {
    props.firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigate('/form'))
      .catch(err => setAuthError(err.message));
  };
  return (
    <Layout>
      <SEO
        keywords={["gatsby", "tailwind", "react", "tailwindcss", "Login"]}
        title="Login"
      />

      <div class="w-full max-w-xs m-64">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              value={email}
            />
          </div>

          <div class="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              class="shadow appearance-none border border-grey-700 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
            />
            <div className="text-red-600 center">
              {authError ? <p>{authError.message}</p> : null}{" "}
            </div>
          </div>

          <div className="flex items-center px-12 mx-6">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={login}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default withFirebase(loginPage);
