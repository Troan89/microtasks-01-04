import React from 'react';

type Button2Type = {
    name: string
    callBack:() => void
}

export const Button2 = (props:Button2Type) => {

    const OnClickButtonHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={OnClickButtonHandler}>{props.name}</button>
    );
};

