import { useState } from 'react'
import { useAuthenticator } from '@aws-amplify/ui-react'
import { fetchUserAttributes } from '@aws-amplify/auth'
//import { generateClient } from 'aws-amplify/data'
//import TodoUpdateForm from '../amplify-components/ui-components/TodoUpdateForm'
//import TodoCreateForm from '../amplify-components/ui-components/TodoCreateForm'

//const client = generateClient()

const App = () => {
  const { user, signOut } = useAuthenticator()
  const [userData, setUserData] = useState([])

  const getUserData = async ({ attr, user }) => {
    console.log({ attr })
    console.log({ user })
    setUserData(attr || user)
    //setUserData({ email: 'test' })
    console.log({ userData })
  }

  fetchUserAttributes().then(attr => {
    getUserData({ attr, user })
  })

  return (
    <main>
      <h1>{userData}</h1>
      <button onClick={signOut}>Sign out</button>
    </main>
  )
}

export default App
/**
 * useEffect(() => {
 *     client.models.Todo.observeQuery().subscribe({
 *       next: data => setTodos([...data.items])
 *     })
 *   }, [])
 *
 *   const [todos, setTodos] = useState([])
 *   const createTodo = () => {
 *     client.models.Todo.create({ content: window.prompt('Todo content') })
 *   }
 *   const deleteTodo = id => {
 *     client.models.Todo.delete({ id })
 *   }
 *
 *
 *  <br />
 *       <button onClick={createTodo}>+ new</button>
 *       <ul>
 *         {todos.map(todo => (
 *           <li key={todo.id}>
 *             <button onClick={() => deleteTodo(todo.id)}></button>
 *             {todo.content}
 *           </li>
 *         ))}
 *       </ul>
 *       {todos.map(todo => (
 *         <TodoUpdateForm key={todo.id} todo={todo}>
 *           {todo.content}
 *         </TodoUpdateForm>
 *       ))}
 *       <TodoCreateForm />
 */
