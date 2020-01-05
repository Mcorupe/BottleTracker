import React, { useState, useEffect } from "react";
import { withFirebase } from "../components/withFirebase";
import moment from "moment";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Form from "../components/Form";
import "../css/style.css";
// import { useSignUpForm } from "../components/formHooks";

function FormPage(props) {
  const [loading, setLoading] = useState(true);
  const [feedings, setFeedings] = useState([]);
  const [userUid, setUserUid] = useState("");

  const grabData = () => {
    console.log('FETCHING DATA')
    //for now, get all collections
    props.firebase &&
      props.firebase
        .firestore()
        .collection("feeding")
        .where("uid", "==", `${userUid.uid}`)
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

  function setUser() {
    props.firebase &&
      props.firebase.auth().onAuthStateChanged(function(user) {
        console.log(user);
        if (user) {
          setUserUid(user);
        } else {
          console.log("No user");
        }
      });
  }
  useEffect(() => {
    console.log('setting user data')
    let userTimeOut = setTimeout(() => setUser(), 2000);
    // this will clear Timeout when component unmont like in willComponentUnmount
    return () => {
      clearTimeout(userTimeOut);
    };
    //useEffect will run only one time
    //if you pass a value to array, like this [data] than clearTimeout will run every time this value changes (useEffect re-run)
  }, [userUid]);

  useEffect(() => {
    let grabDataTimeout = setTimeout(() => grabData(), 1000);

    // this will clear Timeout when component unmont like in willComponentUnmount
    return () => {
      clearTimeout(grabDataTimeout);
    };

    //useEffect will run only one time
    //if you pass a value to array, like this [data] than clearTimeout will run every time this value changes (useEffect re-run)
  }, [grabData]);

  console.log(props.firebase);
  console.log(userUid);

  //signIN
  //signOUT
  return (
    <Layout>
      <SEO
        keywords={["gatsby", "tailwind", "react", "tailwindcss", "home"]}
        title="Home"
      />
      <Form firebase={props.firebase} />
      <br />
      <br />
      <div>
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
                    <td className="border px-6 py-2">
                      {moment(feeding.time).format("LLL")}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div className="container">
            <div className="spinner"></div>
            <br />
          </div>
        )}

        <div className={"flex flex-1 justify-center mx-auto"}></div>
      </div>
    </Layout>
  );
}

export default withFirebase(FormPage);
