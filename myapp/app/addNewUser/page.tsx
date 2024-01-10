"use client";
import React, { useState } from "react";

const AddNewUser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const addNewUserHandler = async() => {
    let response = await fetch("/users",{
      method: 'POST',
      body:JSON.stringify({name,age,email})
    })
    response = await response.json();
    if(response.ok){
      alert('User created successfully!!')
    }
    else{
      alert("Error while creating new user")
    }
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="Please Enter Your Name"
        className="ml-2 mr-4 mt-4"
      />
      <br />
      <input
        type="number"
        onChange={(e) => setAge(e.target.value)}
        value={age}
        placeholder="Please Enter Your Age"
        className="ml-2 mr-4 mt-4"
      />
      <br />
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="Please Enter Your Email"
        className="ml-2 mr-4 mt-4"
      />
      <br />
      <button
        className="bg-black text-white border p-2"
        onClick={() => addNewUserHandler()}
      >
        Submit
      </button>
    </div>
  );
};

export default AddNewUser;
