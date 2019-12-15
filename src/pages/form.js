import React, { useState } from "react";
import { FirebaseContext } from "gatsby-plugin-firebase";
import moment from 'moment';

import Layout from "../components/layout";
import SEO from "../components/seo";
import Form from "../components/Form";
// import { useSignUpForm } from "../components/formHooks";

function FormPage() {
  const firebase = React.useContext(FirebaseContext);
  const [loading, setLoading] = useState(true);
  const [feedings, setFeedings] = useState([]);

  const grabData = () => {
    //for now, get all collections
    firebase
      .firestore()
      .collection("feeding")
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log("No matching documents.");
          return;
        }
        // console.log(snapshot)
        // snapshot.forEach(doc => {
        //   console.log(doc.id, '=>', doc.data());
        // });
        const allFeedings = snapshot.docs.map(doc => doc.data());
        console.log(allFeedings);
        setLoading(false);
        setFeedings(allFeedings);
      })
      .catch(err => {
        console.log("Error getting documents", err);
      });
  };
  
  firebase && grabData();

  //signIN
  //signOUT
  console.log(feedings);
  return (
    <Layout>
      <SEO
        keywords={["gatsby", "tailwind", "react", "tailwindcss", "home"]}
        title="Home"
      />
      <Form firebase={firebase} />
      <br />
      <br />
      {!loading ? (
        <table className="table-fixed">
          <thead>
            <tr>
              <th className="w-1/2 px-4 py-2">Feeding</th>
              <th className="w-1/4 px-4 py-2">Type</th>
              <th className="w-1/4 px-4 py-2">Amount</th>
              <th className="w-1/4 px-4 py-2">Time</th>
            </tr>
          </thead>
          <tbody>
            {feedings.map((feeding, i) => {
              return (
                <tr
                  className="bg-gray-100"
                  key={`${JSON.stringify(feeding)}-${i}`}
                >
                  <td className="border px-4 py-2">{feeding.name}</td>
                  <td className="border px-4 py-2">{feeding.type}</td>
                  <td className="border px-4 py-2">{feeding.amount}</td>
                  <td className="border px-6 py-2">{moment(feeding.time).format("LLL")}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        "Fetching data(Not really... lol, click on theme for now...)"
      )}
      <br />
      <br />
      <div>
        <button
          className="rounded-full p-2 px-3 mx-64 bg-teal-700 text-white hover:bg-teal-600 "
          
          type="button"
        >
          Theme
        </button>
        <br />
        <br />
        <div className="px-3">YO THIS BUTTON WONT GO WHERE I WANT IT >=(   </div>
      </div>
    </Layout>
  );
}

export default FormPage;
