import { AwsStaticHostingStack } from '../lib/aws-static-hosting-stack'
import { Stage, StageProps } from 'aws-cdk-lib'
import { Construct } from 'constructs'

export class AwsStaticHostingStage extends Stage {
  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props)

    new AwsStaticHostingStack(this, 'static-hosting-stack', {
      env: {
        account: process.env.CDK_DEFAULT_ACCOUNT,
        region: process.env.CDK_DEFAULT_REGION,
      },

      /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
    })
  }
}
