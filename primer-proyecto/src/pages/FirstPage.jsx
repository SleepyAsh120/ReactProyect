import { useState } from "react";

export const FirstPage = () => {
    const [valor, setValor] = useState(10)//Sirve para disparar estados

    

    const modificarEstado = (num) => {
        //el mayor entre 0 y numero futuro
        setValor(Math.max(valor + num, 0))
        
    }

    const reset = () => {

        setValor(10)
    }
    return(
        <>
            <h1>Contador</h1>
            <h1>{valor}</h1>
            <button onClick={() => modificarEstado(+1)}>SUMA 1</button>  
            <button onClick={() => modificarEstado(-1)}>RESTA 1</button> 
            <button onClick={reset}>RESETEA CONTADOR</button> 
        </>
    )

    

}