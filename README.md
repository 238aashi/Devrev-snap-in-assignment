
Step 1: Utilizing DevRev API to Create a Work Item

1.Project Setup
Initialize the Project

```
mkdir devrev-work-item
cd devrev-work-item
npm init -y
```
2.Install Dependencies
```
npm install axios 

```
3.Configure Environment Variables
Create a .env file and add your DevRev API credentials:

To create a new organization in DevRev:

Click on your profile picture on the top left corner.
Go to the Orgs section and click on +.
Fill in the details and click Create.

Login into your demo org and obtain the PAT token. Now you can use this PAT token to make test API calls and try building something new.

```
DEVREV_API_URL=https:<Org URL>
DEVREV_PAT=<PAT>

```

You’re all set to explore our platform. You are ready to browse through our APIs and build your first integration with DevRev.
For Reference https://developer.devrev.ai/api-reference/getting-started

