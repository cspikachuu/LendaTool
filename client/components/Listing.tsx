import * as React from "react";
import { Listing } from "../types"
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { 
  Image,
  Box,
  Badge,
  Button
} from "@chakra-ui/react"

export default function Listing(props: Listing){
  const {
    name,
    photo,
    description,
    price,
    lister,
    status,
    dateCreated,
    type
  } = props;
  
  const currentUser = useSelector((state: RootState) => state.markets.userInfo);
  
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" className="listing">
      <Image src={photo} alt={name}/>
      
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
      { (currentUser.user_id !== lister) ? <Button style={{margin: '25px 0px', padding: 'auto'}} colorScheme="orange" >Reserve</Button> : null}
      { (currentUser.user_id === lister ) ?<Button style={{margin: '25px 0px', padding: 'auto'}} colorScheme="orange" variant="ghost">Delete</Button> : null}
    </Box>
  );
}