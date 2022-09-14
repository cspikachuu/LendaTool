import React, { Component } from "react";
import { Listings, User,  } from "../types";

type State = {
  publicListings: Listings,
  userListings: Listings
  userInfo: User,
  searchBar: string,
  savedItems: Listings,
}

const initialState: State = {
  publicListings : [],
  userListings : [],
  userInfo: {
    userID: "",
    firstName: "",
    lastName: "",
    email: ""
  },
  searchBar: "",
  savedItems: []
};

const marketReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_PUBLIC_LISTING":
      const { publicListings }= action.payload;
      return Object.assign({}, state, {
        publicListings: publicListings
        });

    case "GET_USER_LISTING":
        let newListings = action.payload;
        return Object.assign({}, state, {
          userListings: newListings
        });
        
    case "GET_USER_INFO":
      const { userInfo } = action.payload;
      return Object.assign({}, state, {
        userInfo: userInfo
      });

    case "GET_SAVED_ITEMS":
       let newSavedItems = action.payload;
        return Object.assign({}, state, {
          savedItems: newSavedItems
        });

    case "UPDATE_SEARCHBAR":
      const { searchBarState } = action.payload;
      return Object.assign({}, state, {
        searchBar: searchBarState
      });

    default: {
      return state;
    };
  };
};

export default marketReducer;

