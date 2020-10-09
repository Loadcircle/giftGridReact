import React from 'react';
const { shallow } = require("enzyme");
const { AddCategory } = require("../../components/AddCategory");

describe('Pruebas en addCategory', ()=>{

    // const setCategories = ()=>{};
    //este es un metodo de jest que crea una función vacia
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('Debe de mostrarse correctamente', ()=>{

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de cambiar el valor del input', ()=>{

        const input = wrapper.find('input');

        //el 2do parametro estamos enviando el "evento" que existe en la función "e -> e.target.value"
        input.simulate('change', {target: {value: 'values'}});

        //aca se valida si cambio el valor del input, pero se esta limpiando luego de cambiar

    });

    test('No debe de postear la información en submit', ()=>{

        // wrapper.find('form').simulate('submit', {preventDefault: ()=>{}});
        //esta es una forma corta de asignar el preventDefult como una función
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect(setCategories).not.toHaveBeenCalled()

    });

    test('Debe de llamar el setCategories y limpiar la caja de texto', ()=>{

        const value ='Hola mundo';
        const input = wrapper.find('input').simulate('change', {target: {value}});

        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect(setCategories).toHaveBeenCalled();
        //este valida que ssetCategories se llame como una función
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(input.props().value).toBe('');

    });

    
});