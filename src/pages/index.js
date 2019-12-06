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
      <form
        className="bg-blue-400 flex rounded-lg p-10"
        onSubmit={handleSubmit}
      >
        {/*}
        i hate that this isnt centered. 
        {*/}
        <div className="flex">
          <label className="block font-bold md:text-center mb-1 md:mb-0 pr-4">
            Name:
          </label>
          <input
            className="rounded-full md:text-center border border-grey-400 hover:border-gray-500"
            placeholder={"John Doe"}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex">
          <label className="block font-bold md:text-center md-1 md:mb-0 pr-4">
            Type:{" "}
          </label>
          <select className="block rounded-full appearance-none w-full text-center bg-white border border-grey-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline rounded">
            <option value=""></option>
            <option value="text">Milk</option>
            <option value="text">Formula</option>
          </select>
        </div>

        <div className="flex">
          <label className="block font-bold md:text-center px-2">
            Amount (oz):{" "}
          </label>
          <select className="block rounded-full appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline rounded">
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
        </div>

        <div className="flex">
          <button
            className="rounded-full text-white bg-teal-700 px-10 mx-2 p-3  hover:bg-teal-600 "
            type={"submit"}
          >
            Submit
          </button>
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
          <tr className="bg-gray-100" >
            <td className="border px-4 py-2">Feeding</td>
            <td className="border px-4 py-2">Amount</td>
            <td className="border px-4 py-2">Time</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border px-4 py-2">Feeding</td>
            <td className="border px-4 py-2">Amount</td>
            <td className="border px-4 py-2">Time</td>
          </tr>
          <tr className="bg-gray-100" >
            <td className="border px-4 py-2">Feeding</td>
            <td className="border px-4 py-2">Amount</td>
            <td className="border px-4 py-2">Time</td>
          </tr>
        </tbody>
      </table>

      <div>
        <button className="rounded-full p-2 px-3 mx-64 bg-teal-700 text-white hover:bg-teal-600 ">
          Theme 
        </button>
          <div className="px-3" >
            YO THIS BUTTON WONT GO WHERE I WANT IT >=(
          </div>
            
      </div>
    </Layout>
  );
}

export default IndexPage;
