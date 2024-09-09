# Cart-share Design

## Model

#### Users
*   id
*   name: {
    *   firstName
    *   lastName\
    },
*   phone,
*   username
*   password
*   age
*   gender
*   location: {
    *   city
    *   state
    *   country\
    }
*   profession: {
    *   jobTitle
    *   company\
    }
*   socialMedia: {
    *   facebook\
    }
*   avatarUrl

#### Items
*   id
*   title
*   description
*   imageUrls
*   price

#### Carts
*   id
* items: [{
    *   id,
    *   addedBy: UserId,
    *   insertTime: *Timestamp*
    *   updateTime:*Timestamp*\
    }]
*   owner: *User*
*   following: *User*[]

## APIs: 

### login

#### getUserData
*   Method: GET
*   Payload:
    *   userId
*   Return Value: *User*

#### getItems
*   Method: GET
*   Payload:
    *   userId
    *   limit
    *   offset
*   Return Value: *item*[]

#### getCart
*    Method: GET
*   Payload: 
    *   cartId
*   Return Value: *Cart*

#### addToCart
*   Method: POST / UPDATE ?
*   Payload:
    *   userId
    *   productId
    *   cartId
    *   count
    *   insertTime
*   Return Value: *Cart*

#### updateCart
*   Method: POST / UPDATE
*   Payload: *Cart*
*   Return Value: *Cart*\
(Could be designed in an approach to set all cart changes at once. Send diff or entire cart details?)\

## Milestones

### Milestone 1
*   Initially we assume there's only one cart and one user

1. init database and hardcoded collections
2. getUser, getItems, getCart
3. display basic user, items and cart views
    1. recieve extended user detail
    2. profile page with user data and carts
    3. nav to cart
    4. nav to shop display

### Milestone 2
1. login+storage flow

### Milestone 3
1. updateCart

### Milestone 4
1. Daily expired delete job

### Milestone 5
1. docker

### Milestone 6
1. multiple carts
2. display following cart list choice for user
3. update different carts (everyone has access to all actions?)

### Milestone 7
1. followCart, unfollowCart

### Milestone 8
1. Cart permissions: fetch cart data by permission (according to cart sharing configurations: all users, shared users, praticipants only)

## Stack
*   Express.js (Nest, ReactNext)
*   MongoDB
*   Mongoose
*   React + Vite
*   Mantine (Tailwind)

## Further thoughts
*   login, 
*   auth,
*   createCart, 
*   removeCard,
*   followCart, unfollowCart
*   RequestCartAccess
*   setCartAccess (owner, modifier, viewer)
*   BackOffice