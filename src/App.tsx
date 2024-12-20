import { useAuthenticator } from '@aws-amplify/ui-react'
import { fetchUserAttributes } from '@aws-amplify/auth'
import { useState } from 'react'

const App = () => {
  const { user, signOut } = useAuthenticator()
  const [email, setEmail] = useState('')
  let userData = {
    email: ''
  }

  const getUserData = async ({ attr, user }: { attr: never; user: never }) => {
    console.log({ attr })
    console.log({ user })
    userData = attr || user
    //setUserData({ email: 'test' })
    console.log({ userData })
    setEmail(userData?.email ? userData?.email : 'test@email')
  }

  fetchUserAttributes().then(attr => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    getUserData({ attr, user })
  })

  return (
    <main>
      <p> user {email || 'Loading...'}</p>
      <button onClick={signOut}>Sign out</button>
    </main>
  )
}

export default App
