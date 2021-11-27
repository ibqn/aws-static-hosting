# AWS static hosting with CloudFront and S3 Bucket!

## Bootstraping this project

This project needs to be bootstraped, try to deploy first to find this out

```sh
cdk bootstrap aws://<account-id>/<region>
```

where

- `account id` is a string of digits
- `region` can be for example: eu-central-1

## Stack Deployment for multiple stages

This stack can be deployed on multiple stages like for exampled `dev` or `prod`.

```sh
cdk destroy -c stage=dev */static-hosting-stack
```
