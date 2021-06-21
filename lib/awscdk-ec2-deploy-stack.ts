import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';

export class AwscdkEc2DeployStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, 'TheVPC', {
      cidr: "10.0.0.0/16"
    })

    const i = new ec2.Instance(this, id, {
      instanceType: new ec2.InstanceType("t2.medium"),
      machineImage: new ec2.AmazonLinuxImage,
      vpc: vpc,
    })
  }
}
