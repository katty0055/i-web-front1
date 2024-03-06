//componente donde estan las rutas
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Inicio from "../views/Inicio";
import { useRoutes } from "../state/useState";
import Principal from "../views/Principal";


const MyRoutes = () => {
        
    const {
        inicio, principal
    } = useRoutes()

    const router = createBrowserRouter(
        [
            // Definición de rutas
            {
                path: inicio,
                element: <Inicio/>
            },
            {
                path: principal,
                element: <Principal/>,   
            //     children:[
            //         {
            //             path: postulacion,
            //             element: <Postulacion/>,   
            //         }, 
            //         {
            //             path: crearPlantilla,
            //             element: <CreacionPlantillas/>        
            //         } 
            //     ]       
            },  
        ]
    );
    return (
        <RouterProvider router = {router}/>
    );
};

export default MyRoutes;
