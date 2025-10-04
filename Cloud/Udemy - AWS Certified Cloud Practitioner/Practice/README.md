# AWS Cloud Practitioner – Hands-On Projects

This repository contains a collection of **practical AWS projects** designed to solidify the core concepts required for the **AWS Certified Cloud Practitioner (CLF-C02)** exam.

Each project focuses on a specific set of AWS services and builds a small, real-world scenario.  
All projects are designed to be **Free Tier friendly** and can be completed with an AWS account configured for personal learning.

---

## 📁 Repository Structure

aws-practitioner-projects/
│
├── README.md # Overview (this file)
│
├── delta/ # Project 1: IAM + S3
├── zulu/ # Project 2: EC2 + EBS
├── echo/ # Project 3: Load Balancer + Auto Scaling
├── tango/ # Project 4: RDS + S3
├── sierra/ # Project 5: Lambda + API Gateway + DynamoDB
├── foxtrot/ # Project 6: CloudFront + S3
└── oscar/ # Project 7: CloudFormation Automation

Each project folder contains a `README.md` file with:

- The **objective** and **concepts** covered
- A list of **AWS services** used
- **Step-by-step setup instructions**
- **CLI commands** and **screenshots** (if applicable)
- A **Lessons Learned** section to summarize key takeaways

---

## 🧭 Projects Overview

| Key Name    | Focus Area             | AWS Services                  | Purpose                                                  |
| ----------- | ---------------------- | ----------------------------- | -------------------------------------------------------- |
| **Delta**   | Identity & Storage     | IAM, S3, AWS CLI              | Manage users, groups, permissions, and S3 access control |
| **Zulu**    | Compute                | EC2, EBS, Security Groups     | Launch, secure, and configure virtual machines           |
| **Echo**    | Scaling & Resilience   | ELB, Auto Scaling, CloudWatch | Build a scalable and fault-tolerant web app              |
| **Tango**   | Databases              | RDS, S3                       | Work with relational databases and data import/export    |
| **Sierra**  | Serverless             | Lambda, API Gateway, DynamoDB | Build a simple serverless API for data persistence       |
| **Foxtrot** | Content Delivery       | S3, CloudFront, Route 53      | Deploy a static website with CDN distribution            |
| **Oscar**   | Infrastructure as Code | CloudFormation, IAM, EC2, S3  | Automate resource provisioning using templates           |

---

## ⚙️ Prerequisites

Before starting:

1. Create an **AWS Free Tier account** → [https://aws.amazon.com/free](https://aws.amazon.com/free)
2. Install and configure the **AWS CLI**

```bash
   aws configure
```

3. Use a non-root IAM user for all operations (secure practice).
4. Enable MFA (Multi-Factor Authentication) on your root account.
5. Clone this repository and follow each project sequentially.
