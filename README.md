# A Basic React Application With AWS Amplify using Auth0 as Authentication

## Installation

```
npm install

```

Configure `aws-exports.js` with your own data as shown below:

```js

const awsmobile = {
    "aws_project_region": "us-east-1",
    "aws_cognito_identity_pool_id": "us-east-1:04a0c944-8017-4d88-a563-080a61dd2d38",
    "aws_cognito_region": "us-east-1",
    "aws_user_pools_id": "us-east-1_dhen52ZSw",
    "aws_user_pools_web_client_id": "261oisqotkglra9vrecci78qim",
    "Auth": {
        "secure": "false"
    },
    "API": {
        "endpoints": [
            {
                "name": "random",
                "endpoint": "https://w07fsl2.execute-api.us-east-1.amazonaws.com",
                "service": "lambda",
                "region": "us-east-1"
            }
        ]
    },
    "federationTarget": "COGNITO_USER_POOLS"
};


export default awsmobile;
```

Run the API `npm start`

