import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GridItem } from './GridItem';

export const GifGrid = ({category}) => {

    //para cambiar el nombre de data a images
    const { data:images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 key={category}>{category}</h3>
            {/* esto es un operador ternario simple, si el primero es cierto muestra */}
            {loading && <p>Loading...</p> }
            <div className="card_wrapper">
                {
                    images.map(image=>(
                        <GridItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}
