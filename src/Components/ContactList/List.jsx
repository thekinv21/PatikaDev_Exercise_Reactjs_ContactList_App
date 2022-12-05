import { useState } from "react";
import {
  Box,
  Text,
  Card,
  CardBody,
  Heading,
  Input,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";

const List = ({ contactList, setContactList }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [filterUser, setFilterUser] = useState("");

  //-----------------Filter Users---------------------

  const filterText = contactList.filter((user) => {
    return Object.keys(user).some((key) => {
      return user[key]
        .toString()
        .toLowerCase()
        .includes(filterUser.toLocaleLowerCase());
    });
  });

  //-----------------Delete User------------------------
  const DeleteUser = (contact) => {
    const removeUser = contactList.filter(
      (deletingUser) => deletingUser !== contact
    );
    setContactList(removeUser);
  };

  //----------------Update User------------------------
  const UpdateUser = (contact) => {
    const update = contactList.find((user) => user === contact);

    update.firstname = window.prompt("Person name : ");
    update.phone = window.prompt("Person Number : ");

    setContactList([{ firstname: update.firstname, phone: update.phone }]);
  };

  return (
    <Box>
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
          value={filterUser}
          borderColor="orange"
          type="text"
          fontSize="14px"
          placeholder="Username or Phone Number"
          onChange={(e) => setFilterUser(e.target.value)}
        />
      </Box>

      <Box>
        <Text mb="20px" fontSize="2xl" textAlign="center">
          My Contacts
        </Text>

        {filterText.map((contact, index) => (
          <Card
            key={index}
            listStyleType="none"
            borderRadius="10px"
            margin="0"
            mb="20px"
            cursor="pointer"
          >
            <CardBody display="flex" justifyContent="space-between">
              <Text mb="10px" pl="20px">
                {contact.firstname} : {contact.phone}
              </Text>

              <Box>
                <EditIcon
                  onClick={() => UpdateUser(contact)}
                  fontSize="18px"
                  mr="10px"
                />
                <DeleteIcon
                  onClick={() => DeleteUser(contact)}
                  fontSize="18px"
                />
              </Box>
            </CardBody>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default List;
