// ##TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'cds28mmq5e'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  domain: 'dev-4jl6m2yxgl6fsk7z.us.auth0.com',            // Auth0 domain
  clientId: 'unl6PxWRizVCruis7PlK5vRgle9ddlyL',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
