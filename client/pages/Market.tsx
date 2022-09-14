import * as React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { IconMenu2 } from "@tabler/icons";

import {Input,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider
} from '@chakra-ui/react'
import {Listings} from "../types"

export default function Market() {
  const listings: Listings = [];
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
          <MenuItem>Saved Items</MenuItem>
        </MenuList>
      </Menu>
      <Input color='white' placeholder='Search' _placeholder={{ opacity: 0.4, color: 'inherit' }}/>
      <div id="market">
        <div id="market-container">
          {listings}
        </div>
        <div id="filters">
          Filters
        </div>
      </div>
    </>
  );
}
