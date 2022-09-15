import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { IconMenu2 } from "@tabler/icons";
import * as actions from "../actions/actions"
import { RootState } from "../store";
import { Listings, Listing } from "../types"
import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Button,
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react'

export default function Profile () {

  const userListings = useSelector((state: RootState) => state.markets.userListings);
  const userInfo = useSelector((state: RootState) => state.markets.userInfo);

  const [reservedListings, updateReservedListings] = useState([]);
  const [nonReservedListings, updateNonReserveListings] = useState([]);
  const [listingName, updateListingName] = useState("")
  const [description, updateDescription] = useState("")
  const [price, updatePrice] = useState(0)
  const [category, updateCategory] = useState("")
  const [photoURL, updatePhotoURL] = useState("")
  const [condition, updateCondition] = useState("")
    
  function separateListings(listings: Listings): void {
    const reserved: Listings = [];
    const nonReserved: Listings = [];
    listings.forEach((listing) => {
      if (listing.status === true) reserved.push(listing);
      else nonReserved.push(listing);
    });
    updateReservedListings(reserved);
    updateNonReserveListings(nonReserved);
  }
  
  useEffect(() => {separateListings(userListings)},[])
  
  
  async function addListing(){
    try {
      const listing: Listing = {
        //condition
        listingName: listingName,
        lister: userInfo.userID,
        photo: photoURL,
        description: description,
        price: price,
        status: false,
        type: category,
        dateCreated: new Date(Date.now()),
        condition: condition
      } 
      const post = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          listing: listing
        })
      }
      // const updatedListing = await fetch('/tools', post);
      // const parsedUpdatedListing = await updatedListing.json()
      // dispatch(actions.GetUserListing(parsedUpdatedListing))
    }
    // {type: 'GET_USER_LISTING', payload: updatedListing}
    catch(error){
      console.log(error);
    }
  }
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch();

  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<IconMenu2/>}
          aria-label='Menu'
          variant='outline'
          />
        <MenuList>
          <MenuItem><Link to="/profile">Profile</Link></MenuItem>
          <MenuItem><Link to="/market">Marketplace</Link></MenuItem>
          <MenuItem>Saved Items</MenuItem>
        </MenuList>
      </Menu>

      <Button style={{margin: '25px 0px', padding: 'auto'}} colorScheme="orange" onClick={onOpen}>Add a Listing</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Tool Details</ModalHeader>
          <ModalCloseButton />

          <FormControl id="create-tool-form" style={{padding:"10px"}}>
            <FormLabel>Listing Name</FormLabel>
            <Input id="listing-name" type="text" onChange={(e)=>{updateListingName(e.target.value)
              }}/>
            <FormLabel>Description</FormLabel>
            <Input id="description" type="text" onChange={(e)=>{updateDescription(e.target.value)}}/>
            <FormLabel>Condition</FormLabel>
            <Input id="condition" type="text" onChange={(e)=>{updateCondition(e.target.value)}}/>
            <FormLabel>Price / day</FormLabel>
            <Input id="price" type="number" onChange={(e)=>{updatePrice(Number(e.target.value))}}/>
            <FormLabel>Category</FormLabel>
            <Input id="category" type="text" onChange={(e)=>{updateCategory(e.target.value)}}/>
            <FormLabel>Image URL</FormLabel>
            <Input id="image-url" type="text" onChange={(e)=>{updatePhotoURL(e.target.value)}}/>
          </FormControl>

          <ModalFooter>
            <Button style={{margin: '25px 0px', padding: 'auto'}} colorScheme="orange" variant="ghost" onClick={onClose}>Close</Button>
            <Button style={{margin: '25px 0px', padding: 'auto'}} colorScheme="orange" onClick={() => addListing()}>Submit</Button>
          </ModalFooter>

        </ModalContent>
      </Modal>
      <Divider />
      <div id="profile-listings">
        <div id="reserved-profile-listings">
          reserved add delete button 
          {reservedListings}
        </div>
        <Divider />
        <div id="non-reserved-profile-listings">
          non-reserved
          {nonReservedListings}
        </div>
        <Divider />
      </div>
    </>
  )
}
