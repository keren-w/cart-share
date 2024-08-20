# Cart-share Design

## Model

#### Users
*   id
*   name
*   activeCarts: [{
    *   id, 
    *   isOwner\
    }]

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