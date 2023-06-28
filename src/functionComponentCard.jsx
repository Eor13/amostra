import { useEffect, useState } from 'react';
import './functionComponentCard.css'
/* eslint-disable react/prop-types */

export function FunctionComponentCard(props) {
    const [toogle, setToogle] = useState(true);
    const [cor, setCor] = useState('#c3c3c3');
    useEffect(() => { setCor((state) => toogle ? '#c3c3c3': '#446677');
    }, [toogle])

    return(
        <div>
            <h3>Nome do Cartão {props.CardNumber}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorem quisquam, neque ipsam corrupti impedit animi.</p>
            <br/>
            <button onClick={e => setToogle(state => !state)}>Mostrar</button>
            <p className='option'  style={{backgroundColor:cor}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sed esse sint quasi voluptates cum optio incidunt et dignissimos amet corporis, tempore praesentium autem, voluptate consectetur placeat nam eos voluptatum?</p>
        </div>
    )
}