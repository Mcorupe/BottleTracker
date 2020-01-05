import React, { useState } from "react";
import { withFirebase } from "../components/withFirebase";

export function FormPage(props) {
  const sendData = feeding => {props.firebase && 
    props.firebase
      .firestore()
      .collection("feeding")
      .add({
        ...feeding,
        userId: props.firebase.auth().currentUser.uid,
        //no user is logged in currently, will have to add this later
        // authorFirstName: firstName,
        // authorLastName: lastName,
        // authorId: authorId,
        createdAt: new Date()
      });
  };
  //hooks to update form values and set in "state"
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");

  const submitForm = e => {
    e.preventDefault();
    //if one field is empty, alert the user and stop
    if (!name || !type || !amount) {
      alert("please fill out the form");
      return;
    }
    //send the data to firestore
    sendData({ name, type, amount });
    setName("");
    setType("");
    setAmount("");
  };
  return (
    <form
      className="flex flex-wrap content-center md:flex-no-wrap bg-blue-400 rounded-lg p-8 mx-auto"
      onSubmit={submitForm}
    >
      <div className="flex flex-row items-center w-full p-4 sm:px-2">
        <label className="font-bold mb-1 md:mb-0 pr-2">Name:</label>
        <input
          className="rounded-full w-full md:text-center border border-grey-400 hover:border-gray-500"
          onChange={e => setName(e.target.value)}
          placeholder={" Baby"}
          value={name}
        />
      </div>
      <div className="flex flex-row items-center w-full p-4 sm:px-2">
        <label className="font-bold md:text-center md-1 md:mb-0 pr-4">
          Type:{" "}
        </label>
        <select
          className="rounded-full appearance-none w-full text-center bg-white border border-grey-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline rounded"
          onChange={e => setType(e.target.value)}
          placeholder={"Food"}
          value={type}
        >
          <option value="" />
          <option value="milk">Milk</option>
          <option value="formula">Formula</option>
        </select>
      </div>
      <div className="flex flex-row items-center w-full p-4 sm:px-2">
        <label className="font-bold md:text-center px-2">Amount (oz): </label>
        <select
          className="rounded-full appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline rounded"
          onChange={e => setAmount(e.target.value)}
          value={amount}
        >
          <option value=""></option>
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
      <div className="flex flex-row items-center w-full mx-auto justify-center">
        <button
          className="rounded-full text-white bg-teal-700 px-10 mx-2 p-3 hover:bg-teal-600 "
          type={"submit"}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
export default withFirebase(FormPage);
