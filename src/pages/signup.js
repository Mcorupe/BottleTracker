import React, { useState } from "react";
import { withFirebase } from "../components/withFirebase";
import { navigate } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Form from "../components/Form";
import { firestore } from "firebase";
// import { useSignUpForm } from "../components/formHooks";

function SignUpPage(props) {
  const [loading, setLoading] = useState(true);
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

  //signIN
  //signOUT
  //console.log(firebase && firebase.firestore().collection())
  return (
    <Layout>
      <SEO
        keywords={["gatsby", "tailwind", "react", "tailwindcss", "SignUp"]}
        title="SignUp"
      />

      <div class="w-full max-w-xs m-64">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              onChange={e => setUserName(e.target.value)}
              placeholder="Username"
              value={userName}
            />
          </div>
          <div class="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              onChange={e => setFirstName(e.target.value)}
              placeholder="First Name"
              value={firstName}
            />
          </div>
          <div class="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              onChange={e => setLastName(e.target.value)}
              placeholder="Last Name"
              value={lastName}
            />
          </div>

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
              type="email"
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

export default withFirebase(SignUpPage);
