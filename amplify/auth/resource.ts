import { defineAuth, secret } from '@aws-amplify/backend'

export const auth = defineAuth({
  loginWith: {
    email: true,
    externalProviders: {
      google: {
        clientSecret: secret('GOOGLE_CLIENT_SECRET'),
        clientId: secret('GOOGLE_CLIENT_ID'),
        scopes: ['email']
      },
      callbackUrls: [
        'https://main.d3h2vmfooi95l9.amplifyapp.com',
        'http://localhost:5173/'
      ],
      logoutUrls: [
        'https://main.d3h2vmfooi95l9.amplifyapp.com',
        'http://localhost:5173/'
      ]
    }
  }
})
