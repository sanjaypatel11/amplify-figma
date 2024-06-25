Create git repo amplify-figma
clone git repo amplify-figma

npx create-react-app amplify-figma
cd amplify-figma

npm start

Install amplify cli: curl -sL https://aws-amplify.github.io/amplify-cli/install | bash && $SHELL

amplify init
Create: VS Code, Javascript, React project.
Choose AWS profile.
Deploys root application CloudFormation template with following resources:
DeploymentBucket  AWS::S3::Bucket
AuthRole          AWS::IAM::Role
UnauthRole        AWS::IAM::Role  

npm install aws-amplify @aws-amplify/ui-react

Login to AWS Amplify console to enable Amplify Studio for the app.
Access Amplify Studio for the app.

Look up local setup instructions on the Amplify studio to do a pull.
amplify pull --appId d14pkyvfmypkl4 --envName dev

Create Pet Data model in Amplify studio, save and deploy.
Creates AppSync GraphQL API backed back DynamodB table.

amplify pull --appId d14pkyvfmypkl4 --envName dev

Click 'Content' in Amplify Studio, Actions, Auto-generate data.

Click 'UI Library' in Amplify Studio, Sync with Figma, 

Click 'Use our Figma Template' to use AWS Amplify component template in Figma. Login to Figma.

Under 'MyComponents' find 'ProfileCard' Component and rename it to 'PetProfile'.

Copy Figma template link under 'Share' button and paste it back in Amplify studio.
Accept all changes.

Find 'PetProfile' component in Amplify Studio and Configure it.
Link 'Name' sub-component value to pet.Name
Link 'About' sub-component value to pet.About

Click 'CreateCollection' and name it Pets
Change Pets layout to be Grid of size 3. Add 1rem distance all around.
Click to include Search and Pagination for Pets.

amplify pull --appId d14pkyvfmypkl4 --envName dev
Note: Components are retrieved under src/ui-Components

amplify update api
To set conflict merge strategy to 'Auto Merge'

amplify push


Iteratively:
Configure Amplify UI components in Figma.
Sync Figma Components back into Amplify Studio.
Configure Components in Amplify Studio by setting component and child properties.
Do 'amplify pull' to retrieve configured components to cli.
Use components in App.js
Set various component properties in App.js
Run 'npm start' to test


Add Authentication either via Amplify Studio - Authentication or via cli using 'amplify add auth'
Will deploy Amazon Cognito via CloudFormation 

amplify pull - to retrieve auth configurations
amplify status - to validate auth resources


Push code to remote Git repo.

Connect remote Git repo to Amplify app by setting Hosting environment for the app in Amplify Studio.
Save configurations and deploy the app on Amplify platform.
Open deployed app's web link to test.









