import { useState } from "react";

//#region Teste 1
type Props = {
    texto:      string,
    cor:        any,
    corTexto:   any,
} 

function handleClick(texto: string) {
    alert(texto);
}

export const Button = (props: Props) => {
    return (
        <button
            onClick={() => handleClick(props.texto)}
            style={{
                backgroundColor: props.cor,
                color: props.corTexto,
            }}
        >Dizer {props.texto}</button>
    );
}
//#endregion

interface Props2 {
    initNumber: number,
    razao:      number,
    cor:        any,
}

export const ButtonCont = ({initNumber, razao, cor}: Props2) => {
    const [count, setCount] = useState(initNumber);

    return (
        <button
            onClick={() => setCount(count + razao)}
            style={{
                backgroundColor: cor,
            }}    
        >Valor atual: {count} | Razão: {razao}</button>
    )
}