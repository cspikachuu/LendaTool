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
  listingID: String,
  listingName: String,
  photo: String,
  description: String,
  price: Number,
  lister: String,
  status: Boolean,
  dateCreated: Date,
  category: String
}
export type Listings = Listing []

export type User = {
    userID: String,
    firstName: String,
    lastName: String,
    email: String,
}