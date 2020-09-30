import {useState, useEffect} from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category)=>{

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //esta función hace que esta fracción de código solo se ejecute 1 vez (gracias al [])    
    //Los hooks no pueden ser async
    useEffect(()=>{
        getGifs(category)
            .then(resp=>{
                setState({
                    data: resp,
                    loading: false
                });
            });
    }, [category])
    //con la [ category ] le decimos que si la categoria cambia vuelva a ejecutar el código
    //en este caso nunca va a ocurrir
    

    return state; // retornamos el objeto {data:  [], loading: true}

}