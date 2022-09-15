export type publicListingsAction = {
  type: String,
  payload: Listing[],
}

export type userlistingsAction = {
  type: string,
  payload: Listing[],
}


export type searchbarAction = {
  type: string,
  payload: string,
}

export type savedItemsAction = {
  type: string,
  payload: Listing[],
}

export type userInfoAction = {
  type: string,
  payload: User
}
//update publiclistings
//update userlistings
//update searchbar
//update savedItems
//update userInfo
//update filters
export type Listing = {
  listingName: string,
  photo: string,
  description: string,
  price: Number,
  lister: string,
  status: Boolean,
  dateCreated: Date,
  category: string
}
export type Listings = Listing []

export type User = {
    userID: string,
    firstName: string,
    lastName: string,
    email: string,
}