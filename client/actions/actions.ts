import {publicListingsAction, userlistingsAction, Listings, searchbarAction, savedItemsAction, User, userInfoAction} from "../types"
//update publiclistings
export const GetPublicListing = (publicListings: Listings): publicListingsAction => ({
    type: "GET_PUBLIC_LISTING",
    payload: publicListings
})

//update userlistings
export const GetUserListing = (userListings: Listings): userlistingsAction => ({
  type: "GET_USER_LISTING",
  payload: userListings,
})

//update searchbar
export const UpdateSearchBar = (string: string): searchbarAction => ({
  type: "UPDATE_SEARCHBAR",
  payload: string,
})

//update savedItems
export const GetSavedItems = (savedItems: Listings): savedItemsAction => ({
  type: "GET_SAVED_ITEMS",
  payload: savedItems,
})

//update userInfo
export const GetUserInfo = (newUserInfo: User): userInfoAction => ({
  type: "GET_USER_INFO",
  payload: newUserInfo,
})

//update filters