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


