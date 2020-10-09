const { shallow } = require("enzyme")
import React from 'react';
import '@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en useFetchGifs', () => {
    
    test('Debe de retornar el estado inicial', async ()=>{
       
        //esto simula la creación de un componente para ejecutar el hook
        const {result, waitForNextUpdate} = renderHook( ()=> useFetchGifs('One punch') );
        //jau que acceder a restult.current 
        const {data, loading } = result.current;

        //hacemos esto para poder utilizarlo en las siguientes tests, para esperar la limpieza del componente
        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);

    });
    

    test('Debe de retornar un arreglo de imagenes y el loading en false', async ()=>{

        //waitForNextUpdate retorna una promesa
        const {result, waitForNextUpdate } = renderHook( ()=> useFetchGifs('One punch') );

        //como ya lo estamos llamando arriba esto da error(complciado), el componente se desmonta arriba
        //asi que ya no se puede revisar el estado
        await waitForNextUpdate();
        
        const {data, loading } = result.current;

    });

})
