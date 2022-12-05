import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  HStack,
} from "@chakra-ui/react";

const Form = ({ addContact, mycontacts }) => {
  const [form, setForm] = useState({ firstname: "", phone: "" });

  const InputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //-------------------Add User--------------------------

  const AddContact = (e) => {
    e.preventDefault();

    if (form.firstname !== "" && form.phone !== "") {
      addContact([...mycontacts, form]);
    } else {
      alert("İnputlar boş");
    }

    //--------------Clear İnput after Adding-----------------------

    setForm({ firstname: "", phone: "" });
  };

  return (
    <>
      <FormControl mb="20px">
        <FormLabel fontSize="14px">Firstname </FormLabel>
        <Input
          name="firstname"
          value={form.firstname}
          type="text"
          placeholder="Person name "
          onChange={InputChange}
          autoComplete="off"
          _placeholder={{ "fontSize ": "12px" }}
        />
      </FormControl>

      <FormControl>
        <FormLabel fontSize="14px">Phone Number </FormLabel>
        <Input
          name="phone"
          value={form.phone}
          type="text"
          placeholder="Person Phone number "
          onChange={InputChange}
          autoComplete="off"
          _placeholder={{ "fontSize ": "12px" }}
        />
      </FormControl>

      <HStack gap="20px" w="100%" mt="30px">
        <Button colorScheme={"green"} w="100%" onClick={AddContact} fontSize='14px'>
          Add Contact
        </Button>
      </HStack>
    </>
  );
};

export default Form;
