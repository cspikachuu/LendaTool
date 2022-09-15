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
  status: boolean,
  dateCreated: Date,
  type: string,
  condition: string,
  borrower?: string
}
export type Listings = Listing []

export type User = {
    userID: string,
    username: string,
    firstName: string,
    lastName: string,
    password: string,
}

/*
types:
Drills
Saws
Sanders
Grinders
Oscillating and rotary tools
Woodworking power tool
Concrete power tools
Compressors and accessories
Other


User
Career: string
*/