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


## Testing
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
NOTE: There is also a Postman collection file (`backend/TheLunchIsRight-API.postman_collection.json`) with tests that can be imported and used with Postman.  

To run the tests form your terminal change directory into the `backend` directory

Then to run the test suite you can use the following command:
```shell
npm run test
```


## Deployment
Deployment scripts are included to automate deployment of this project to AWS utilizing S3 and Cloudfront for the frontend and ECS for the the backend.

### Prerequisites
1. AWS CLI version 2 installed
2. Infrastructure set up on AWS to host project
   - ECR repository to store api images
   - ECS Cluster and service set up to run task definition prepared from ECR repo
   - Load Balancer to direct traffic to port 5000 to EC2 instance where cluster exists
   - S3 Bucket with static website hosting enabled to host frontend build files
   - Cloudfront sourcing from S3 bucket to quickly and securly serve application (optional)

### Deploying application to infrastructure
1. First remove `.sample` from the `.env.deploy.sample` file in the root of the project.
2. Fill in `.env.deploy` file with appropriate variables as they pertain to your aws account and infrastructure
3. ECR repository receives its version tag from the `./backend/package.json` so if you are pushing a changed version you can first update the version utilizing npm's versioning or by running:
   ```shell
   cd backend
   npm version patch
   ```

4. Run the deploy script to build and deploy app to infrastructure with the following command:  
NOTE: By default the deploy script will redeploy the frontend and api portion of the application. If it is only neccessary to deploy one module of the appliction it is possible by first setting the MODULE variable with
   either `MODULE=frontend` or `MODULE=api` prior to running the deploy script.
   ```shell
   sh deploy.sh
   ```