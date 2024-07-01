# Amplify React Figma app

### Install Pre-requisites.
- Node.sj v14.x or later
- npm v6.14.4 or later
- git v2.14.1 or later
- AWS Account


### Create a remote GIT repo and clone it locally.
```sh
git clone <repo>
```

### Create a local React app in the cloned repo.
```sh
npx create-react-app amplify-figma
cd amplify-figma
```

### Test new React app.
```sh
npm start
```
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.

### Install Amplify cli.
```sh
npm install -g @aws-amplify/cli
```

### Intialize Amplify in the new project.
```sh
amplify init
```
Select appropriate project specific configurations.<br/>
Deploys CloudFormation template to create:
- DeploymentBucket (S3)
- AuthRole (IAM)
- UnauthRole (IAM)

### Install Amplify library and UI components.
```sh
npm install aws-amplify @aws-amplify/ui-react
```

### Login to AWS Console and access Amplify Studio IDE.

### Create Pet Data Model and load it with some sample data.
Creates AppSync GraphQL API backed by DynamodB table.

### Pull Amplify Studio updates to the local app.
```sh
amplify pull --appId <appId> --envName <environment>
```

### Use Amplify component template in Figma.
- Navigate to Amplify Studio UI Library
- Connect your Figma file to Amplify Studio
- Create/Update UI components in Figma.
- Navigate back to Amplify Studio UI Library
- Sync UI components with Figma

### Configure your UI component properties in Amplify Studio.

### Pull Amplify Studio updates to the local app.
```sh
amplify pull --appId <appId> --envName <environment>
```

### Update your local apps Apps.js
Perform application updates iteratively.

### Push code changes to remote GIT repo.
```sh
git push
```

### Connect to your remote GIT repo from Amplify.

### Publish you Amplify app to the web.