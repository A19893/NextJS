"use client"


import { useState, useEffect } from "react"
import {Button, Input} from '@material-tailwind/react';

const UpdateUser= ()=>{
    const [id,setId]= useState("");
    const [name,setName]= useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState(""); 
    const [age,setAge]= useState(""); 
    const updateUser= async()=>{
      const response = await fetch(`fakeUsers/api/${id}`,{
        method:'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify({name,email,password,age})
      });
      const json = await response.json();
      if(json.ok==true){
        alert("User Updated Successfully!!");
        return;
      }
      else{
        alert("User Not Updated");
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
                    <Button  onClick={() => updateUser()} placeholder={undefined}>Update User</Button>
                </form>
            </div>
        </div>
    )
}

export default UpdateUser;