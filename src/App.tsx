import { useAuthenticator } from '@aws-amplify/ui-react'
import { fetchUserAttributes } from '@aws-amplify/auth'

const App = () => {
  const { user, signOut } = useAuthenticator()
  let userData = {}

  const getUserData = async ({ attr, user }: { attr: never; user: never }) => {
    console.log({ attr })
    console.log({ user })
    userData = attr || user
    //setUserData({ email: 'test' })
    console.log({ userData })
  }

  fetchUserAttributes().then(attr => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    getUserData({ attr, user })
  })

  return (
    <main>
      <button onClick={signOut}>Sign out</button>
    </main>
  )
}

export default App
