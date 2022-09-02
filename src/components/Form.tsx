export const Form = () => {
    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center mb-10">Creación de tareas </h2>
            <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" action="">
                <div className="mb-5 ">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="titulo">Titulo</label>
                    <input
                        id="titulo"
                        className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                        type="text"
                        placeholder="Titulo de la tares"
                    />
                </div>

                <div className="mb-5 ">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="fecha">Fecha</label>
                    <input
                        id="fecha"
                        className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                        type="date"
                    />
                </div>

                <div className="mb-5 ">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="descr">Descripción</label>
                    <textarea
                        id="descr"
                        className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                        placeholder="Descripción de la tarea"
                    />

                </div>
                <input
                    type="submit"
                    className="bg-blue-600 w-full p-3 text-white uppercase font-bold hover:bg-blue-700 transition-colors cursor-pointer"
                    value="Crear tare"
                />
            </form>
        </div>
    )
}