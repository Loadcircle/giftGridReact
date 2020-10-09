const { shallow } = require("enzyme")
const { GifExpertApp } = require("../GifExpertApp")
import React from 'react';
import '@testing-library/jest-dom';

describe('Pruebas en gif expert app', ()=>{

    const wrapper = shallow(<GifExpertApp/>);

    test('Snapshot match', ()=>{

        expect(wrapper).toMatchSnapshot();

    })

    test('Debe de mostrar una lista de categoris', ()=>{

        const categories = ['One Punch', 'DBZ']
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toMatchSnapshot(categories.length);

    });

})