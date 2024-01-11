import { Button, Input } from '@material-tailwind/react'
import React, { useState } from 'react'

const DeleteUser = () => {
    const [userId, setUserId] = useState();
    const deleteUserData = async () => {
        const response = await fetch(`fakeUsers/api/${userId}`,{
            method:'DELETE',
            headers: {
                'Content-Type':'application/json'
            },
        });
        const json = await response.json();
        console.log(json);
        if (json.ok == true) {
          alert("User Deleted Successfully")
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
          <Button className="mt-4"onClick={() => deleteUserData()} placeholder={undefined}>
            Delete a Specific User
          </Button>
        </div>
      </div>
    </div>
  )
}

export default DeleteUser
