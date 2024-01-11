"use client";
import AccordionUI from "@/components/AccordionUI";
import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { AllUsers } from "@/components/AllUsers";
const Users = () => {
  const [open, setOpen] = useState <number>(1);
  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);
  return (
    <section className="w-[40rem]">
      <Accordion open={open === 1} placeholder={undefined}>
        <AccordionHeader onClick={() => handleOpen(1)} placeholder={undefined}>
          All Users
        </AccordionHeader>
        <AccordionBody>
          <AllUsers/>
        </AccordionBody>
        <AccordionHeader onClick={() => handleOpen(1)} placeholder={undefined}>
          Search for Specific Users
        </AccordionHeader>
        <AccordionBody>
          <AllUsers/>
        </AccordionBody>
      </Accordion>
    </section>
  );
};

export default Users;
