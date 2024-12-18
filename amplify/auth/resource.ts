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
      callbackUrls: ['http://localhost:5173/profile'],
      logoutUrls: ['http://localhost:5173/']
    }
  }
})
