import { useEffect, useState } from 'react'
import { useAuthenticator } from '@aws-amplify/ui-react'
import { fetchUserAttributes } from '@aws-amplify/auth'
import type { Schema } from '../amplify/data/resource'
import { generateClient } from 'aws-amplify/data'
import TodoUpdateForm from '../amplify-components/ui-components/TodoUpdateForm'
import TodoCreateForm from '../amplify-components/ui-components/TodoCreateForm'

const client = generateClient<Schema>()

function App() {
  const { user, signOut } = useAuthenticator()
  const [todos, setTodos] = useState<Array<Schema['Todo']['type']>>([])
  console.log({ user })
  fetchUserAttributes().then(attr => console.log(attr))

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: data => setTodos([...data.items])
    })
  }, [])

  function createTodo() {
    client.models.Todo.create({ content: window.prompt('Todo content') })
  }

  function deleteTodo(id: string) {
    client.models.Todo.delete({ id })
  }

  return (
    <main>
      <h1>{user?.signInDetails?.loginId}'s todos</h1>
      <br />
      <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <button onClick={() => deleteTodo(todo.id)}></button>
            {todo.content}
          </li>
        ))}
      </ul>
      {todos.map(todo => (
        <TodoUpdateForm key={todo.id} todo={todo}>
          {todo.content}
        </TodoUpdateForm>
      ))}
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
      </div>
      <TodoCreateForm />
      <button onClick={signOut}>Sign out</button>
    </main>
  )
}

export default App
