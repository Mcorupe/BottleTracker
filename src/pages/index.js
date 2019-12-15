import React, { useState } from "react";
import { FirebaseContext } from "gatsby-plugin-firebase";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Form from "../components/Form";
import { firestore } from "firebase";
// import { useSignUpForm } from "../components/formHooks";

function IndexPage() {
  const firebase = React.useContext(FirebaseContext);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  //{user: username, password: password}
  const setUser = signUpData =>
    firebase
      .auth()
      .createUserWithEmailAndPassword(signUpData.email, signUpData.password)
      .then(resp => {
        return firestore
          .collection("users")
          .doc(resp.user.uid)
          .set({
            firstName: signUpData.firstName,
            lastName: signUpData.lastName,
            userName: signUpData.userName,
            initials: signUpData.firstName[0] + signUpData.lastName[0],
            createdAt: new Date()
          });
      })
      .catch(e => console.log(e));
  const signIn = () => setUser({ email, password, userName });

  //signIN
  //signOUT
  return (
    <Layout>
      <SEO
        keywords={["gatsby", "tailwind", "react", "tailwindcss", "home"]}
        title="Home"
      />

      <div class="w-full max-w-xs m-64">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              onChange={e => setUserName(e.target.value)}
              placeholder="Username"
              value={userName}
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              value={email}
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
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
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}{" "}
            </div>
          </div>

          <div class="flex items-center px-12">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={signIn}
            >
              SignUp
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default IndexPage;
