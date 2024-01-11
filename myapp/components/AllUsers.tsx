"use client";

import { List, ListItem, Card } from "@material-tailwind/react";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  age: number;
}
export const AllUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchAllUsers = async () => {
      const response = await fetch("fakeUsers/api");
      const usersInfo = await response.json();
      setUsers(usersInfo.data);
    };
    fetchAllUsers();
  }, []);
  return (
    <div>
      {users.map((user) => (
        <Card key={user.id} placeholder={undefined}>
          <List placeholder={undefined}>
            <ListItem placeholder={undefined}>{user.name}</ListItem>
            {/* <ListItem placeholder={undefined}>{user.email}</ListItem>
            <ListItem placeholder={undefined}>{user.password}</ListItem>
            <ListItem placeholder={undefined}>{user.age}</ListItem> */}
          </List>
        </Card>
      ))}
    </div>
  );
};
