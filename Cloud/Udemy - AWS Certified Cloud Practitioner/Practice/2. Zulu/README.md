# ⚙️ Project Zulu – EC2 Web Server Setup

## 🎯 Objective

In this project, you'll learn how to **launch, secure, and configure a virtual server** using **Amazon EC2** and **EBS**.  
You’ll deploy a lightweight web server, access it over SSH, and understand how AWS handles compute, networking, and storage.

---

## 🧠 Concepts Covered

- Amazon EC2 instances (Elastic Compute Cloud)
- Key pairs and SSH access
- Security groups (firewall rules)
- EBS volumes (Elastic Block Store)
- EC2 user data scripts (automated boot commands)
- Elastic IPs (optional)

---

## 🧰 AWS Services Used

| Service        | Purpose                                      |
| -------------- | -------------------------------------------- |
| **EC2**        | Launch and manage virtual servers            |
| **EBS**        | Persistent storage for EC2 instances         |
| **IAM**        | Access management and roles                  |
| **CloudWatch** | Monitor instance performance (basic metrics) |

---

## ⚙️ Setup Steps

### 1. Create a Key Pair

1. Go to **EC2 → Key Pairs → Create key pair**
   - Name: `zulu-key`
   - Type: RSA
   - File format: `.pem` (for Linux/macOS) or `.ppk` (for Windows PuTTY)
   - Save the file securely — you’ll need it for SSH access.

---

### 2. Launch an EC2 Instance

1. Navigate to **EC2 → Instances → Launch instance**
   - Name: `zulu-instance`
   - **AMI:** Amazon Linux 2 (Free Tier eligible)
   - **Instance type:** `t2.micro`
   - **Key pair:** `zulu-key`
   - **Network settings:**
     - Create or use a **new security group** named `zulu-sg`.
     - Add an **inbound rule**:
       - Type: SSH (port 22), Source: _My IP_
       - Type: HTTP (port 80), Source: _Anywhere (0.0.0.0/0)_
   - **Storage:** Keep default (8GB gp3 EBS volume).
   - **User Data:** Paste the script below.

```bash
#!/bin/bash
# User data script for Project Zulu
yum update -y
yum install -y httpd
systemctl start httpd
systemctl enable httpd
echo "<h1>Welcome to Project Zulu - EC2 is running!</h1>" > /var/www/html/index.html
```

2. Click Launch instance
3. Wait for the status to show Running, then copy the Public IPv4 address.

### 3. Access Your Instance via SSH

Using the terminal:

```bash
chmod 400 zulu-key.pem

❯ ssh -i zulu-key.pem ec2-user@51.49.83.224
The authenticity of host '51.49.83.224 (51.49.83.224)' can't be established.
ED25519 key fingerprint is SHA256:WLJxN+DRAJ4QynH/kBzQpUumHJcd8Yi5a3Cc4yFtVnI.
This key is not known by any other names.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added '51.49.83.224' (ED25519) to the list of known hosts.
   ,     #_
   ~\_  ####_        Amazon Linux 2023
  ~~  \_#####\
  ~~     \###|
  ~~       \#/ ___   https://aws.amazon.com/linux/amazon-linux-2023
   ~~       V~' '->
    ~~~         /
      ~~._.   _/
         _/ _/
       _/m/'
[ec2-user@ip-172-31-31-228 ~]$ uptime
 08:19:49 up 2 min,  1 user,  load average: 0.19, 0.27, 0.12
```

Open it on the browser: `http://ec2-51-49-83-224.eu-south-2.compute.amazonaws.com`

### 5. Explore EBS and Security Settings

• In EC2 → Volumes, locate your instance’s EBS volume.
• Observe: size, type (gp3), and attachment to your instance.
• Stop your instance and check that the EBS volume persists (data remains).
• Try creating a snapshot of your volume for backup.

## 📚 Lessons Learned

• EC2 instances are virtual servers you fully control — OS, software, and network.
• User data scripts are powerful for automating setup and configuration.
• Security groups act as virtual firewalls at the instance level.
• EBS volumes provide persistent storage, surviving reboots and stops.
