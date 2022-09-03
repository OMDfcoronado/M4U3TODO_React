import { useState, useEffect } from "react"
import { Form } from "./components/form"
import { Header } from "./components/header"
import { List_task } from "./components/list_task"

function App() {

  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState({});

  useEffect(() => {
    const getTaskLocal = () => {
      const tareasLocales = JSON.parse(localStorage.getItem('tareas')) ?? [];
      setTareas(tareasLocales);
    }

    getTaskLocal();
  }, []);

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }, [tareas]);

  // OJO
  const eliminarTarea = (id) => {
    const tareasFiltradas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasFiltradas);
  }


  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          tarea={tarea}
          tareas={tareas}
          setTareas={setTareas}
          setTarea={setTarea}
        />
        <List_task
          tareas={tareas}
          setTarea={setTarea}
          eliminarTarea={eliminarTarea}
        />
      </div>
    </div>
  )
}

export default App
