import React from 'react'
import ReactDOM from 'react-dom/client'
import { Authenticator, ThemeProvider } from '@aws-amplify/ui-react'
import App from './App.tsx'
import './index.css'
import { Amplify } from 'aws-amplify'
import '@aws-amplify/ui-react/styles.css' // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import outputs from '../amplify_outputs.json'

Amplify.configure(outputs)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Authenticator socialProviders={['google']}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Authenticator>
  </React.StrictMode>
)
