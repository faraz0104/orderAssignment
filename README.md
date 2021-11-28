# Order Anything
                        
There are many use cases when people need to get something urgently, without wanting to do things themselves - like getting vegetables from the local market to forgetting your laptop charger at home. Starbucks doesn’t deliver, but wouldn't it be nice if someone could grab your fav drink from there!

This API solves the very same problem. It lets customers sign up using their phone no, and order almost anything (From our catalogue), the order is assigned to a delivery person by admin, where he can see order details, and delivery person can update its status

## Requirements

- yarn or npm

To install yarn, follow the instructions from the [yarn website.](https://yarnpkg.com/lang/en/docs/install) To install npm, follow the instructions from the [npm website](https://www.npmjs.com/get-npm).

## Running Locally
* Clone the repo
* Run npm install or yarn in root folder to install dependencies
* Server listen on port 3000

## User Types -
* `Customer`
* `Delivery Person`
* `Admin`

## Login -
With Phone No/password which returns Auth token

## Order Stages
* `ORDER PLACED`
* `REACHED STORE` 
* `ITEMS PICKED`
* `ENROUTE`
* `DELIVERED`
* `CANCELLED`

