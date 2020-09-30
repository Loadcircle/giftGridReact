import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    //si useState() se deja vacio, el valor inicial sera undefined, asi que utilizar un string vacio
    const [inputValue, setInputValue] = useState(''); 

    const handleInputChange = (e)=>{
        if(inputValue.length < 15){
            setInputValue(e.target.value)
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(inputValue.trim().length > 2){
            
            //aca llamamos el callback que enviamos
            setCategories(cat=>[inputValue]);
            setInputValue('')
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}