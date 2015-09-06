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
```

### Quickstart

Create a bunch of EC2 instances on the fly:

```bash
$ bees up --key <PEM-KEY> --zone <AWS_ZONE> --group <AWS_SECURITY_GROUP> --servers 10 -- instance <AWS_AMI>  --login ubuntu
```

You must create a customized AMI, so that your simulation can run immediately after being cloned. Create a EC2 micro instance, ssh into it, run `npm install -g forever` and `git clone git@github.com:pmichelberger/websocket-bee.git`. After that, create a AMI via the AWS console and paste the received AMI id into the `bees up --instance <AWS_AMI>` parameter and execute the command from your local machine.

For more info, check out this blog post: https://bocoup.com/weblog/node-stress-test-procedure/

Initiate the attack:

```bash
$ bees execute - 'forever start websocket-bee/index.js' 
```
