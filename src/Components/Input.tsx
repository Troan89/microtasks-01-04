import React, {ChangeEvent, useState} from 'react';
import {MessageType} from "../App";

type InputType = {
    message: MessageType[]
    onClickButtonHandler: (title:string) => void
}

export const Input = (props:InputType) => {

    let [title, setTitle] = useState<string>('')

    const OnChangeInputHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onClickButton = () => {
        props.onClickButtonHandler(title)
        setTitle('')
    }

    return (
        <>
            <div>
                <input value={title} onChange={OnChangeInputHandler}/>
                <button onClick={onClickButton}>+</button>
            </div>
            {props.message.map((m, index) => {
                return (
                    <div key={index}>{m.message}</div>
                )
            })}
        </>

    )
}