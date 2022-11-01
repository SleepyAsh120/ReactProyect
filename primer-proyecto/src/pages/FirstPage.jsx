import { useState } from "react";
import { useContador } from "../hooks/useContador";

export const FirstPage = () => {
    const {valor, modificarEstado, reset} = useContador(200)
    return(
        <>
            <h1>Contador mejorado</h1>
            <hr/>
            <h1>{valor}</h1>
            <button onClick={() => modificarEstado(+1)}>SUMA 1</button>  
            <button onClick={() => modificarEstado(-1)}>RESTA 1</button> 
            <button onClick={reset}>RESETEA CONTADOR</button> 
        </>
    )

    

}