# 🧩 Project Delta – IAM + S3 Access Management

## 🎯 Objective

This project explores **identity management**, **permissions**, and **storage access control** using AWS **IAM** and **S3**.  
You’ll create users, groups, and policies, and configure them so that only specific users can upload files to a bucket while others can read or manage it.

---

## 🧠 Concepts Covered

- IAM Users, Groups, and Policies
- Principle of Least Privilege
- S3 Buckets and Object Permissions
- Bucket Policies vs. IAM Policies
- Access via AWS CLI and Console

---

## 🧰 AWS Services Used

| Service     | Purpose                               |
| ----------- | ------------------------------------- |
| **IAM**     | Manage users, groups, and permissions |
| **S3**      | Store and retrieve files (objects)    |
| **AWS CLI** | Command-line access to AWS resources  |

---

## ⚙️ Setup Steps

### 1. Create IAM Users and Groups

1. Go to **IAM → Users → Add User**

   - Name: `admin`
   - Permissions: attach existing policy → `AdministratorAccess`

2. Add another user:

   - Name: `uploader`
   - Permissions: **no permissions yet**

3. Go to **IAM → User Groups → Create Group**
   - Name: `uploaders`
   - Attach a **custom policy** (we’ll create it next).

---

### 2. Create an S3 Bucket

1. Go to **S3 → Create bucket**
   - Bucket name: `delta-project-bucket-[your-unique-id]`
   - Region: choose your closest (e.g., `eu-west-1`)
   - Block public access: **keep enabled**
   - Versioning: optional (recommended for version tracking)

---

### 3. Create a Custom IAM Policy for Uploaders

1. In **IAM → Policies → Create Policy**
2. Choose **JSON** and paste the following:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:ListBucket"],
      "Resource": "arn:aws:s3:::delta-project-bucket-123456789"
    },
    {
      "Effect": "Allow",
      "Action": ["s3:PutObject", "s3:GetObject"],
      "Resource": "arn:aws:s3:::delta-project-bucket-123456789/*"
    }
  ]
}
```

3. Name the policy: UploaderS3AccessPolicy
4. Attach this policy to the uploaders group.

### 4. Test Access via AWS CLI

1. Log in as uploader and generate Access Keys:
   • IAM → Users → uploader → Security Credentials → Create access key
   (Store both the Access Key ID and Secret Key securely.)
2. Configure AWS CLI locally:

```bash
aws configure
```

Enter the credentials for the uploader user.

3. Test the permissions:

```bash
# List the bucket
❯ aws s3 ls s3://delta-project-bucket-123456789

# Upload a file
echo "Project Delta Test" > test.txt
❯ aws s3 cp test.txt s3://delta-project-bucket-123456789/
upload: ./test.txt to s3://delta-project-bucket-123456789/test.txt

# List again
❯ aws s3 ls s3://delta-project-bucket-123456789
2025-10-04 18:30:25         19 test.txt

# Try deleting (should fail)
❯ aws s3 rm s3://delta-project-bucket-123456789/test.txt
delete failed: s3://delta-project-bucket-123456789/test.txt An error occurred (AccessDenied) when calling the DeleteObject operation: User: arn:aws:iam::209479262675:user/uploader is not authorized to perform: s3:DeleteObject on resource: "arn:aws:s3:::delta-project-bucket-123456789/test.txt" because no identity-based policy allows the s3:DeleteObject action
```

## 📚 Lessons Learned

• The principle of least privilege ensures users only have necessary permissions.
• IAM policies can be scoped narrowly to resources and actions.
• S3 bucket policies are resource-based and can complement IAM user policies.
• Using the AWS CLI is essential for validating real-world permissions and automation.

---

Let’s sharpen that a bit more so it’s crystal clear in your notes:
• IAM Policy → “Who the user is allowed to be.”
It defines what actions a user or group can perform on specific resources.
✅ Example: “User uploader can PutObject in delta-project-bucket.”
• Bucket Policy → “Who the bucket allows in.”
It defines who can access that specific bucket or object, even users from other AWS accounts.
✅ Example: “This bucket allows uploads only from account 123456789012.”

In short:

IAM policies attach to identities (users, roles, groups).
Bucket policies attach to resources (buckets, objects).
