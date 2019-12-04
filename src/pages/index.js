import React from "react";
import { FirebaseContext } from "gatsby-plugin-firebase";

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";
import { useSignUpForm } from "../components/formHooks";

function IndexPage() {
  const firebase = React.useContext(FirebaseContext);

  const setUser = () => {
    firebase
      .firestore()
      .ref("/user")
      .set("Alex")
      .auth();
  };
  const grabData = () => {
    firebase.firestore();
  };

  const sendData = () => {
    firebase
      .firestore()
      .collection("feeding")
      .add({
        ...feeding,
        authorFirstName: firstName,
        authorLastName: lastName,
        authorId: authorId,
        createdAt: new Date()
      });
  };
  //signIN
  //signOUT

  const submitForm = () => {
    console.log(inputs);
  };
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(submitForm);
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`, `home`]}
        title="Home"
      />
      <form className="bg-blue-300" onSubmit={handleSubmit}>
        <div className="flex items-center border-b">
          {/*}
        i hate that this isnt centered. 
        {*/}
          <div className="inline-block relative w-60">
            <label className="block font-bold md:text-right mb-1 md:mb-0 pr-4">
              Name
            </label>
            <input placeholder={"John Doe"} onChange={handleInputChange} />
            <label className="block font-bold md:text-right mb-1 md:mb-0 pr-4">
              Type:{" "}
            </label>
            <select className="block appearance-none w-full bg white border border-grey-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline rounded">
              <option value=""></option>
              <option value="text">Milk</option>
              <option value="text">Formula</option>
            </select>
            <label className="block font-bold md:text-right mb-1 md:mb-0 pr-4">
              Amount (oz):{" "}
            </label>
            <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline rounded">
              <option value="0">0</option>
              <option value=".5">.5</option>
              <option value="1">1</option>
              <option value="1.5">1.5</option>
              <option value="2">2</option>
              <option value="2.5">2.5</option>
              <option value="3">3</option>
              <option value="3.5">3.5</option>
              <option value="4">4</option>
            </select>
            <button
              className="px-10 bg-green-500 rounded-full hover:bg-red-600 border-green-700"
              type={"submit"}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <br />
      <br />
      <br />
      <table className="table-fixed">
        <thead>
          <tr>
            <th className="w-1/2 px-4 py-2">Feeding</th>
            <th className="w-1/4 px-4 py-2">Amount</th>
            <th className="w-1/4 px-4 py-2">Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Feeding</td>
            <td className="border px-4 py-2">Amount</td>
            <td className="border px-4 py-2">Time</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border px-4 py-2">Feeding</td>
            <td className="border px-4 py-2">Amount</td>
            <td className="border px-4 py-2">Time</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Feeding</td>
            <td className="border px-4 py-2">Amount</td>
            <td className="border px-4 py-2">Time</td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
}

export default IndexPage;
