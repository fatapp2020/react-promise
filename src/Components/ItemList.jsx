import React from 'react'
import Item from './Item'

export default function ItemList({ productos }) {

    return (

        productos.map(producto =>
            <Item
                key={producto.id}
                title={producto.title}
                description={producto.description}
                price={producto.price}
                pictureUrl={producto.pictureUrl} />
        )
    )
}
