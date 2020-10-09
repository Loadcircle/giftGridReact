const { shallow } = require("enzyme");
const { GifGrid } = require("../../components/GifGrid");
import React from 'react';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import '@testing-library/jest-dom'

//esto es para simular la entrada a este archivo
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en gif grid',()=>{

    //simulamos el valor inicial de nuestro custom hook
    useFetchGifs.mockReturnValue({
        data: [],
        loading: true,        
    });
    const category = '';    
    const wrapper = shallow(<GifGrid category={category}/>)

    test('match con el esnapshot', () => {

        expect(wrapper).toMatchSnapshot();
        
    });

    test('Debe de mostrar items cuando se cargan imagenes con useFetchGifs', ()=>{

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost:8000/cosa.jpg',
            title: 'Cualquier cosa'
        }]
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,        
        });
        const wrapper = shallow(<GifGrid category={category}/>)
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GridItem').length).toBe( gifs.length);

        

    });
    

});