#!/bin/sh

VERSION=$(grep -m1 version package.json | awk -F: '{ print $2 }' | sed 's/[", ]//g')
echo Building and pushing version: $VERSION

AWS_ACCOUNT_NUMBER="$(cut -d'.' -f1 <<<"$AWS_ECR_REPO")"

aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin $AWS_ACCOUNT_NUMBER.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com

docker build -t thelunchisright-api .

docker tag thelunchisright-api:latest $AWS_ECR_REPO:latest
docker tag thelunchisright-api:latest $AWS_ECR_REPO:$VERSION

docker push $AWS_ECR_REPO:latest
docker push $AWS_ECR_REPO:$VERSION

aws ecs update-service --cluster $AWS_ECS_CLUSTER --service $AWS_ECS_SERVICE --force-new-deployment > /dev/null