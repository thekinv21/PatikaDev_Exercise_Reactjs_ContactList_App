import { useState } from "react";
import { Box } from "@chakra-ui/react";
import List from "./../ContactList/List";
import Form from "./../Form/Form";

const Contacts = () => {
  const [contact, setContact] = useState([]);

  return (
    <Box w={["80%", "80%", "500px", "500px"]}>
      <List contactList={contact} setContactList={setContact} mb="50px" />
      <Form mycontacts={contact} addContact={setContact} />
    </Box>
  );
};

export default Contacts;
