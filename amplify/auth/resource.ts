import { defineAuth, secret } from '@aws-amplify/backend'

export const auth = defineAuth({
  loginWith: {
    email: true,
    externalProviders: {
      google: {
        clientId: secret('GOOGLE_CLIENT_ID'),
        clientSecret: secret('GOOGLE_CLIENT_SECRET'),
        scopes: ['email']
      },
      callbackUrls: ['https://main.d3h2vmfooi95l9.amplifyapp.com'],
      logoutUrls: ['https://main.d3h2vmfooi95l9.amplifyapp.com']
    }
  }
})
