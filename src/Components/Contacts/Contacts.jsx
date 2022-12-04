import { useState } from "react";
import {
  Box,
  Heading,
  Input,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";

import List from "./../ContactList/List";
import Form from "./../Form/Form";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Contacts = () => {
  const [contact, setContact] = useState([]);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box w={["80%", "80%", "500px", "500px"]}>
      <Box display="flex" justifyContent="space-between">
        <Heading pb="30px" fontWeight="400" fontSize="18px">
          Mobile Contacts List
        </Heading>

        <IconButton
          rounded="100%"
          onClick={toggleColorMode}
          icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
          bg="none"
          _hover={{ bg: "transparent" }}
        />
      </Box>

      <Box mb="20px">
        <Input
          borderColor="orange"
          type="text"
          fontSize="14px"
          placeholder="Filter Users...."
        />
      </Box>

      <Box mb="50px">
        <List mycontacts={contact} setMycontacts={setContact} />
      </Box>

      <Box>
        <Form addContact={setContact} mycontacts={contact} />
      </Box>
    </Box>
  );
};

export default Contacts;
