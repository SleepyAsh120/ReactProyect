import { useState } from "react";
import { useContador } from "../hooks/useContador";

export const FirstPage = () => {
    const {valor, modificarEstado, reset} = useContador(200)
    console.log(valor)
    return(
        <>
            <h1>Contador 2.0</h1>
            <hr/>
            <h1>{valor}</h1>
            <button onClick={() => modificarEstado(+1)}>SUMA</button>  
            <button onClick={() => modificarEstado(-1)}>RESTA</button> 
            <button onClick={reset}>RESETEA CONTADOR</button> 
        </>
    )

    

}