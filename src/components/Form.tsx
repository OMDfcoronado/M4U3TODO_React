import { useState, useEffect } from "react"

export const Form = ({ setTareas, setTarea, tareas, tarea }) => {

    const [titulo, setTitulo] = useState('');
    const [fecha, setFecha] = useState('');
    const [descrip, setDescrip] = useState('');
    const [error, setError] = useState(false);
    const generateId = () => {
        return Math.random().toString(20).substr(2);
    }

    useEffect(() => {
        if (Object.keys(tarea).length > 0) {
            setTitulo(tarea.titulo)
            setFecha(tarea.fecha)
            setDescrip(tarea.descrip)
        }
    }, [tarea]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([titulo, fecha, descrip].includes('')) {
            setError(true)
            return;
        }

        setError(false);

        const task = {
            titulo,
            fecha,
            descrip,
            id: ''
        }

        if (tarea.id) {
            const tareasActualizadas = tareas.map((tareaState) => tareaState.id === tarea.id ? task : tareaState);
            setTareas(tareasActualizadas)
            setTarea({})
        } else {
            task.id = generateId();
            setTareas([...tareas, task]);
        }

        //tareas.push(task)
        //setTareas(tareas);

        setTitulo('');
        setFecha('');
        setDescrip('');
    }


    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center mb-10">Creación de tareas </h2>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" action="">

                {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Hay un error!</strong>
                    <span className="block sm:inline">faltan campos</span>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                        <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                    </span>
                </div>}

                <div className="mb-5 ">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="titulo">Titulo</label>
                    <input
                        id="titulo"
                        className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                        type="text"
                        placeholder="Titulo de la tares"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                </div>

                <div className="mb-5 ">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="fecha">Fecha</label>
                    <input
                        id="fecha"
                        className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                        type="date"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>

                <div className="mb-5 ">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="descr">Descripción</label>
                    <textarea
                        id="descr"
                        className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                        placeholder="Descripción de la tarea"
                        value={descrip}
                        onChange={(e) => setDescrip(e.target.value)}
                    />

                </div>

                {tarea.id ? (
                    <input
                        type="submit"
                        className="bg-orange-600 w-full p-3 text-white uppercase font-bold hover:bg-blue-700 transition-colors cursor-pointer"
                        value="Actualizar tarea"
                    />) :
                    (<input
                        type="submit"
                        className="bg-blue-600 w-full p-3 text-white uppercase font-bold hover:bg-blue-700 transition-colors cursor-pointer"
                        value="Crear tarea"
                    />)}


            </form>
        </div>
    )
}