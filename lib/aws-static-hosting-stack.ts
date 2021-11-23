import * as cdk from "@aws-cdk/core";
// import * as sqs from '@aws-cdk/aws-sqs';
import { Bucket, BucketAccessControl } from "@aws-cdk/aws-s3";
import { BucketDeployment, Source } from "@aws-cdk/aws-s3-deployment";
import * as path from "path";

export class AwsStaticHostingStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'AwsStaticHostingQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    const bucket = new Bucket(this, "Bucket", {
      accessControl: BucketAccessControl.PRIVATE,
    });

    new BucketDeployment(this, "BucketDeployment", {
      destinationBucket: bucket,
      sources: [Source.asset(path.resolve(process.cwd(), "dist"))],
    });
  }
}
