import * as React from "react";
import { Listing } from "../types"
import { 
  Image,
  Box,
  Badge,
  Button
} from "@chakra-ui/react"

export default function Listing(props: Listing){
  const {
    listingName,
    photo,
    description,
    price,
    lister,
    status,
    dateCreated,
    type
  } = props;

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" className="listing">
      <Image src={photo} alt={listingName}/>
      
      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme={status === true ? 'teal' : 'red'}>
            {status === true ? 'Available' : 'Reserved'}
          </Badge>
          <Badge borderRadius="full" px="2" colorScheme="brown">
            {type}
          </Badge>
          <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
            Provided by {lister}
          </Box>
        </Box>   
      </Box>

      <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1}>
        {description}
      </Box>
      
      <Box>
        {price}
        <Box as='span' color='gray.600' fontSize='sm'>
          / day
        </Box>
      </Box>
      <Button style={{margin: '25px 0px', padding: 'auto'}} colorScheme="orange" >Reserve db write to tools** and borrowers</Button>
      
    </Box>
  );
}