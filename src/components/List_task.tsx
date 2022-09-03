import { useEffect } from "react"
import { Task } from "./Task"


export const List_task = ({ tareas, setTarea, eliminarTarea }) => {


    useEffect(() => {
        if (tareas.length > 0) {

        }
    }, [tareas]);

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5 mb-10 md:h-screen overflow-scroll">

            {tareas && tareas.length ?
                (<>
                    <h2 className="font-black text-3xl text-center mb-10">
                        Lista de tareas
                    </h2>


                    {tareas.map((tarea) => {

                        return (<Task
                            key={tarea.id}
                            tarea={tarea}
                            setTarea={setTarea}
                            eliminarTarea={eliminarTarea}
                        />)
                    })}
                </>) : (<h2 className="font-black text-3xl text-center mb-10">
                    No tengo Tareas Pendientes
                </h2>)}


        </div>
    )
}