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
        'https://main.d3w4s4sn9rnm2s.amplifyapp.com',
        'http://localhost:5173/'
      ],
      logoutUrls: [
        'https://main.d3w4s4sn9rnm2s.amplifyapp.com',
        'http://localhost:5173/'
      ]
    }
  }
})
