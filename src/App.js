import React from "react";
import Contacts from "./Components/Contacts/Contacts";
import { Box } from "@chakra-ui/react";

const App = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" pt="100px">
      <Contacts />
    </Box>
  );
};

export default App;
