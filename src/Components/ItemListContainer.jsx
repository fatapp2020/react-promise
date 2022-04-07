import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import s from './ItemListContainer.module.css'

export default function ItemListContainer() {

    const [productos, setProductos] = useState([]);

    useEffect(() => {

        const stock = new Promise((resolve, reject) => {

            setTimeout(() => {

                resolve([
                    { id: '22oeep23jo32po4j2232', title: 'Producto 1', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, doloremque', price: 752, pictureUrl: 'https://web-static.wrike.com/blog/content/uploads/2015/12/errores-fatales-en-el-lanzamiento-de-un-producto.jpg?av=c15b07c7167f3b187a8ec309e3d76964' },
                    { id: '22oeep23dwdwdw4j5777', title: 'Producto 2', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, doloremque', price: 378, pictureUrl: 'https://www.holded.com/wp-content/uploads/2020/09/ciclo-de-vida-de-un-producto-4.png' },
                    { id: '22oeep23ddwd4j22wdw2', title: 'Producto 3', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, doloremque', price: 151, pictureUrl: 'https://blog.up.edu.mx/hubfs/Por%20qu%C3%A9%20el%20producto%20es%20lo%20m%C3%A1s%20importante%20para%20una%20estrategia%20comercial%20exitosa.png' }
                ])

            }, 2000)


            // reject(null)
        });

        stock
            .then((res) => {
                setProductos(res);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                console.log('Se agradece');
            })

    }, [])

    return (
        <div className={s.containerI}>
            <ItemList productos={productos} />
        </div>
    )
}
