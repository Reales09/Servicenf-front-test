import { usePais } from "../hooks/useServicenf";
import { Servicenfpais } from "../interfaces/reqSServiceNF";

export const Pais = () => {
    const {paises, cargarPais} = usePais();

    const renderItem = (pais: Servicenfpais ) => {

        return(
        <tr key={pais.id_pais.toString()}>
            <th>{pais.pais} </th>
            <th>{pais.ultima_actualizacion}</th>
        </tr>
        )
    }



  return (
    <>
        <h3>Paises:</h3>
        <table className="table">
            <thead>
                <tr>
                    <th>Pais</th>
                    <th>Ultima actualización</th>                    
                </tr>

            </thead>
            <tbody>
                {                    
                    Array.isArray(paises) && paises.map(renderItem)
                }
            </tbody>
        
        </table>

        <button className="btn btn-primary" onClick={cargarPais}>Cargar paises</button>

    </>
  )
}
