import { Box } from '@chakra-ui/react';

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
  
return(<Box textAlign="center" p="5" color="gray.600" borderTop="1px" borderColor="gray.100">
   {year} Realtor, Inc.
</Box>)
};

export default Footer;
