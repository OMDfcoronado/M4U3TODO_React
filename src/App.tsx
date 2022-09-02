import { Form } from "./components/form"
import { Header } from "./components/header"
import { List_task } from "./components/list_task"

function App() {

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form />
        <List_task />
      </div>
    </div>
  )
}

export default App
