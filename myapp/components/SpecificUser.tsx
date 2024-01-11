"use client";
import React, { useState } from "react";
import { Button, Card, Input, List, ListItem } from "@material-tailwind/react";
const SpecificUser = () => {
  const [userId, setUserId] = useState();
  const [userData, setUserData] = useState<[] | null>(null);
  const fetchUserData = async () => {
    const response = await fetch(`fakeUsers/api/${userId}`);
    const usersInfo = await response.json();
    console.log(usersInfo);
    if (usersInfo) {
      console.log(usersInfo);
      setUserData(usersInfo);
    } else {
      setUserData(null);
    }
  };
  return (
    <div>
      <div className="flex">
        <div className="w-72">
          <Input
            label="Enter User ID"
            type="text"
            value={userId}
            onChange={(e: any) => setUserId(e.target.value)}
            crossOrigin={undefined}
          />
          <Button className="mt-4"onClick={() => fetchUserData()} placeholder={undefined}>
            Search
          </Button>
        </div>
      </div>
      {userData ? (
        userData.map((item: any) => (
          <>
            <Card key={item.id} className="w-96 mt-5" placeholder={undefined}>
              <List placeholder={undefined}>
                <ListItem placeholder={undefined}>ID: {item.id}</ListItem>
                <ListItem placeholder={undefined}>Name: {item.name}</ListItem>
                <ListItem placeholder={undefined}>Age: {item.age}</ListItem>
                <ListItem placeholder={undefined}>Email: {item.email}</ListItem>
              </List>
            </Card>
          </>
        ))
      ) : (
        ""
      )}
    </div>
  );
};

export default SpecificUser;
