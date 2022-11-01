export const useContador = (initialState) =>{
    const [valor, setValor] = useState(10)//Sirve para disparar estados

    

    const modificarEstado = (num) => {
        //el mayor entre 0 y numero futuro
        setValor(Math.max(valor + num, 0))
        
    }

    const reset = () => {

        setValor(10)
    }
    return(
       valor,
       modificarEstado,
       reset
    )
}