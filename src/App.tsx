import { useState } from "react"
import { Form } from "./components/form"
import { Header } from "./components/header"
import { List_task } from "./components/list_task"

function App() {

  const [tareas, setTareas] = useState([]);


  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          tareas={tareas}
          setTareas={setTareas}
        />
        <List_task
          tareas={tareas}
        />
      </div>
    </div>
  )
}

export default App
