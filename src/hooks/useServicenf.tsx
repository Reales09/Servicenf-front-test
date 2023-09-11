import { useEffect, useRef, useState } from "react";
import { Servicenfpais } from "../interfaces/reqSServiceNF";
import { Pais } from '../components/Pais';
import { servicenfApi } from "../api/servicenfapi";

export const usePais = () => {
    const [paises, setPais] = useState<Servicenfpais[]>()


    useEffect(() => {
        //llamado al API
        cargarPais();
        
    }, [])

    const cargarPais = async () => {

        const resp = await servicenfApi.get<Servicenfpais[]>('/pais')
         
        setPais(resp.data); 
        
        console.log(resp)
    }

    
    return(          
        {paises, cargarPais }
    );


}
