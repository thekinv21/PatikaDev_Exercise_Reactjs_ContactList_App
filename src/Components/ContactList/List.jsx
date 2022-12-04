import React from "react";
import { Box, Text, Card, CardBody } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const List = ({ mycontacts, setMycontacts }) => {




  //------------ User Silmek için----------------
  const RemoveContact = (contact) => {
    const newContacts = mycontacts.filter(
      (deleteContact) => deleteContact !== contact
    );

    setMycontacts(newContacts);
  };

  //-------------------User update----------------

  return (
    <Box>
      <Text mb="20px" fontSize="2xl" textAlign="center">
        My Contacts
      </Text>

      {mycontacts.map((contact, index) => (
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
              <EditIcon fontSize="18px" mr="10px" />
              <DeleteIcon
                onClick={() => RemoveContact(contact)}
                fontSize="18px"
              />
            </Box>
          </CardBody>
        </Card>
      ))}
    </Box>
  );
};

export default List;
