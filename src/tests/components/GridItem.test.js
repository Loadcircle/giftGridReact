import React from 'react';
const { shallow } = require("enzyme");
import {GridItem} from '../../components/GridItem';

describe('Pruebas a Grid Item', ()=>{

    const title = 'Un Titulo';
    const url = 'https://localhost/algo.jpg'
    const wrapper = shallow(<GridItem
        title={title}
        url={url}
    />)

    test('Renderizado del componente', ()=>{
        expect(wrapper).toMatchSnapshot();
    });

    test('Validar valores correctos', ()=>{

        const parrafo = wrapper.find('p');
        expect(parrafo.text().trim()).toBe(title);

    });

    test('Validar imagen', ()=>{

        const img = wrapper.find('img');
        expect(img.props().src).toBe(url)


    });

    test('Debe tener una clase equis', ()=>{
        const div = wrapper.find('div');
        
        const className = div.prop('className');
        
        expect(className.includes('card')).toBe(true)
    })

});