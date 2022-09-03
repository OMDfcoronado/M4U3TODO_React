import { Task } from "./Task"

export const List_task = ({ tareas }) => {

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5 mb-10 md:h-screen overflow-scroll">
            <h2 className="font-black text-3xl text-center mb-10">
                Lista de tareas
            </h2>

            {tareas.map((tarea) => {

                return (<Task
                    key={tarea.id}
                    titulo={tarea.titulo}
                    fecha={tarea.fecha}
                    descrip={tarea.descrip}
                />)
            })}


        </div>
    )
}