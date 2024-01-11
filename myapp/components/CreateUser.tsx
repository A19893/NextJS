"use client"


import { useState, useEffect } from "react"
import {Button, Input} from '@material-tailwind/react';

const CreateUser= ()=>{
    const [id,setId]= useState("");
    const [name,setName]= useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState(""); 
    const [age,setAge]= useState(""); 
    const createUser= async()=>{
      const response = await fetch('fakeUsers/api',{
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify({id,name,email,password,age})
      });
      const json = await response.json();
      if(json.ok==true){
        alert("User Created Successfully!!");
        return;
      }
      else{
        alert("User Not Created");
        return;
      }
    }
    return (
        <div>
            <div>
                <form>
                    <Input  label="ID" type="text" placeholder="ID" onChange={(e: any) => setId(e.target.value)} value={id} crossOrigin={undefined}/><br/>
                    <Input  label="Name" type="text" placeholder="Name" onChange={(e: any) => setName(e.target.value)}value={name} crossOrigin={undefined}/><br/>
                    <Input  label="Email" type="email" placeholder="Email" onChange={(e: any) => setEmail(e.target.value)}value={email} crossOrigin={undefined}/><br/>
                    <Input  label="Password" type="password" placeholder="Password"onChange={(e: any) => setPassword(e.target.value)} value={password} crossOrigin={undefined}/><br/>
                    <Input  label="Age" type="number" placeholder="Age"onChange={(e: any) => setAge(e.target.value)} value={age} crossOrigin={undefined}/><br/>
                    <Button  onClick={() => createUser()} placeholder={undefined}>Create New User</Button>
                </form>
            </div>
        </div>
    )
}

export default CreateUser;