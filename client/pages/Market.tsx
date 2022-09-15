import * as React from "react";
import { Link } from "react-router-dom";
import { IconMenu2 } from "@tabler/icons";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import {
  Input,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'


export default function Market() {
  const publicListings = useSelector((state: RootState) => state.markets.userListings);
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
      <Input color='white' placeholder='Search' _placeholder={{ opacity: 0.4, color: 'inherit' }}/>
      <div id="market">
        <div id="market-container">
          {publicListings}
        </div>
        <div id="filters">
          Filters
        </div>
      </div>
    </>
  );
}
