### Installation & Configuration
Download, compile and install  "Bees with Machine Guns" Node.js fork

```bash
$ git clone https://github.com/jugglinmike/beeswithmachineguns.git
$ cd beeswithmachineguns
$ mkvirtualenv --no-site-packages bees
$ easy_install pip
$ pip install -r requirements.txt
```

Configure your ~/.boto file with your AWS credentials

```bash
[ Credentials ]
aws_access_key_id = < INSERT_ACCESS_KEY_ID >
aws_secret_access_key = < INSERT_SECRET_ACCESS_KEY >
[ Boto ]
ec2_region_name = eu-west-1
ec2_region_endpoint = ec2.eu-west-1.amazonaws.com
```bash

### Quickstart

Create a bunch of EC2 instances on the fly

```bash
$ bees up --key <PEM-KEY> --zone <AWS_ZONE> --group <AWS_SECURITY_GROUP> --servers 10 -- instance <AWS_AMI>  --login ubuntu
```bash

For more info, check out this blog post: https://bocoup.com/weblog/node-stress-test-procedure/



