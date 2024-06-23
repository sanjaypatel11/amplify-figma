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







