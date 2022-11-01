import {useState} from "react"


export const useContador = (initialState) =>{
    const [valor, setValor] = useState(initialState)//Sirve para disparar estados
console.log(valor, initialState)
    

    const modificarEstado = (num) => {
        //el mayor entre 0 y numero futuro
        setValor(Math.max(valor + num, 0))
        
    }

    const reset = () => {
        setValor(10)
    }

    return{
       valor,
       modificarEstado,
       reset
    }
}