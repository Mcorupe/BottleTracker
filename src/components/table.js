import React, { useState, useEffect } from "react";
import moment from "moment";

import "../css/style.scss";
import { navigate } from "gatsby";

function Table(props) {
  const { firebase } = props;
  const [loading, setLoading] = useState(true);
  const [feedings, setFeedings] = useState([]);
  // const [userUid, setUserUid] = useState("");

  //this is stored in localstorage, should we continue to use localstorage or the API to grab the user.uid??
  // useEffect(() => {
  //   //flag to check if we have already called this
  //   let ignore = false;
  //   async function setUser() {
  //     return await firebase.auth().onAuthStateChanged(user => {
  //       if (user && !ignore) {
  //         setUserUid(user);
  //       } else if (ignore) {
  //         console.log("User already set");
  //       } else {
  //         console.log("No user found.");
  //       }
  //     });
  //   }
  //   setUser();
  //   return () => {
  //     ignore = true;
  //   };
  // }, []); // ✅ OK (our effect only uses `someProp`)

  useEffect(() => {
    //asynchronouse function to grab data from firebase
    async function grabData() {
      //if the user is signed in, grab the localstorage uid, otherwise try to grab the firebase user.uid, if no user is logged in, redirect to index page
      const userId = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user")).uid
        : firebase.auth().currentUser
        ? firebase.auth().currentUser.uid
        : navigate("/");
      //for now, get all collections in the feeding table where the uid is equal to the user uid
      firebase
        .firestore()
        .collection("feeding")
        .where("user_uid", "==", `${userId}`)
        .get()
        .then(snapshot => {
          //if there are no records, log that there are no records
          if (snapshot.empty) {
            console.log("No matching documents.");
            //set feedings to an empty array and stop the loading sign
            setLoading(false);
            setFeedings([]);
            //is return needed here?
            return;
          }
          //otherwise there are feedings, map over the data and return the json
          const allFeedings = snapshot.docs.map(doc => doc.data());
          //stop loading and store the data.
          setLoading(false);
          setFeedings(allFeedings);
          //is return needed here?
          return;
        })
        //catch the error
        .catch(err => {
          //log the error
          console.log(err);
          //set feedings to an empty array and stop the loading sign
          setLoading(false);
          setFeedings([]);
          //is return needed here?
          return;
        });
    }
    //call the function after defining can also do:
    //(async func name())() to call the func
    grabData();
    //return nothing as we fetch after every update
    return () => {};
  }, []); //not sure what i'm supposed to pass into this array

  return (
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
  );
}

export default Table;
