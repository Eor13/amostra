import { useEffect, useState } from 'react';
import './functionComponentCard.css'

export function FunctionComponentCard(props) {
    //Para realizar uma manipulação de eventos em react ,Devemos primeiro definir uma função ou um estado e depois passa-ló como uma prop para o elemento JSX desejado
    // Declare uma função chamada "........." dentro do seu componente Button.
    // Implemente a lógica dentro dessa função.
    // Adicione onClick={handleClick} ao JSX do elemento <button>.
    
    const [toogle, setToogle] = useState();
    const [display, setDisplay] = useState();

    const showText = (props) =>{
        return <p className='text'> {props.CardFunction} Exemplo de Evento </p>
    }

    useEffect(() => { 
        setDisplay(
            () =>  toogle ?'showBox': 'ocultBox')
    }, [toogle])

    return(
        <div className='cards'>
            <h3>Cartão {props.CardNumber}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorem quisquam, neque ipsam corrupti impedit animi.</p>
            <br/>
            <button onClick={e => {setToogle(state => !state)}}>Mostrar</button>
            <div className={display}> 👍 {showText(props)} </div>
            
        </div>
    )
}