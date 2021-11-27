#!/usr/bin/env node

import 'source-map-support/register'
import * as cdk from '@aws-cdk/core'
import { AwsStaticHostingStage } from '../lib/aws-static-hosting-stage'

const STAGE = 'stage'
const DEFAULT_STAGE = 'dev'

const app = new cdk.App()

const stageName: string = app.node.tryGetContext(STAGE) || DEFAULT_STAGE

new AwsStaticHostingStage(app, stageName)

app.synth()
