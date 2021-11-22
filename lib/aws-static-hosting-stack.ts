import * as cdk from "@aws-cdk/core";
// import * as sqs from '@aws-cdk/aws-sqs';
import { Bucket, BucketAccessControl } from "@aws-cdk/aws-s3";

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
  }
}
