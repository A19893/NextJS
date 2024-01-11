"use client";
import React, { useState } from "react";
import { Button, Card, Input, List, ListItem } from "@material-tailwind/react";
const SpecificUser = () => {
  const [userId, setUserId] = useState();
  const [userData, setUserData] = useState(null);
  const fetchUserData = async () => {
    const response = await fetch(`fakeUsers/api/${userId}`);
    const usersInfo = await response.json();
    if (usersInfo) {
      setUserData(usersInfo);
    } else {
      setUserData(null);
    }
  };
  return <div className="flex">
    <div className="w-72">
     <Input label="Enter User ID" type="text" value={userId} onChange={(e: any) => setUserId(e.target.value)} crossOrigin={undefined}/>
     <Button onClick={() => fetchUserData()}  placeholder={undefined}>Search</Button>
    </div>
  </div>;
};

export default SpecificUser;
