import React, {ChangeEvent} from 'react';

type Iput2Type = {
    setTitle:(title:string) => void
    title: string
}

export const Input2 = (props:Iput2Type) => {
    const OnChangeInputHandler = (e:ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value)
    }

    return (
        <input value={props.title} onChange={OnChangeInputHandler}/>
    );
};

