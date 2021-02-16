# The Lunch Is Right
Application is to pick a random place for lunch based on a location and a few preferences. This app utilized the Yelp 
GraphQl API for the restaurant data.

## Tech Stack
#### Frontend
1. React
2. Redux
3. Apollo Client
4. Styled-component
5. Ant Design

#### Backend
1. Express.js
2. Apollo Server
3. Yelp GraphQl API


## Running Locally
### Prerequisites
1. Docker installed - https://www.docker.com/products/docker-desktop
2. Yelp API Key - https://www.yelp.com/developers/graphql/guides/intro

### Running Locally
1. You must first rename the `backend/.env.sample` file to `backend/.env` and replace the `YELP_API_KEY` placeholder 
with an actual api key.
2. You can now use Docker compose to build the images by running the following command in your terminal in the root of 
   the project directory:
   ```shell
   docker-compose build
   ```
3. If the build was successful you can now run the application with the following command:
    ```shell
    docker-compose run
    ```
4. You should now be able to navigate to `http://localhost` to view the application


##Testing
#### Frontend
First change directory into the `frontend` directory

While in development you can run the tests in an interactive mode with the following command in your terminal:
```shell
npm test
```


To run the test suite normally you can use the following command:
```shell
npm run test-app
```  

#### Backend
NOTE: There is also a Postman collection file with tests that can be imported and used with Postman.  

First change directory into the `backend` directory

To run the test suite you can use the following command:
```shell
npm run test
```
