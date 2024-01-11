"use client";
import AccordionUI from "@/components/AccordionUI";
import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { AllUsers } from "@/components/AllUsers";
import CreateUser from "@/components/CreateUser"
import SpecificUser from "@/components/SpecificUser";
import UpdateUser from "@/components/UpdateUser";
import DeleteUser from "@/components/DeleteUser";
const Users = () => {
  const [open, setOpen] = useState<number | null>(null);
  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);
  return (
    <section className="w-[40rem]">
      <Accordion open={open === 1} placeholder={undefined}>
        <AccordionHeader onClick={() => handleOpen(1)} placeholder={undefined}>
          All Users
        </AccordionHeader>
        <AccordionBody>
          <AllUsers />
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} placeholder={undefined}>
      <AccordionHeader onClick={() => handleOpen(2)} placeholder={undefined}>
          Search for Specific Users
        </AccordionHeader>
        <AccordionBody>
          <SpecificUser />
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} placeholder={undefined}>
      <AccordionHeader onClick={() => handleOpen(3)} placeholder={undefined}>
          Create new Users
        </AccordionHeader>
        <AccordionBody>
           <CreateUser/>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} placeholder={undefined}>
      <AccordionHeader onClick={() => handleOpen(4)} placeholder={undefined}>
          Update a specific Users
        </AccordionHeader>
        <AccordionBody>
           <UpdateUser/>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} placeholder={undefined}>
      <AccordionHeader onClick={() => handleOpen(5)} placeholder={undefined}>
          Delete a specific Users
        </AccordionHeader>
        <AccordionBody>
           <DeleteUser/>
        </AccordionBody>
      </Accordion>
    </section>
  );
};

export default Users;
