import React, {useState} from 'react';
import './App.css';
import { Button2 } from './Components/Button2';
import {Input} from './Components/Input';
import {Input2 } from './Components/Input2';
import {NewComponent} from "./Components/NewComponent";

export type nameButtonState = "All" | "Dollars" | "RUBLS"

export type MessageType = {
    message: string
}



function App() {

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    let [nameButtonState, setNameButton] = useState<nameButtonState>('All')

    let newMoneyFilter = money
    if (nameButtonState === "Dollars") {
        newMoneyFilter = money.filter(m => m.banknots === nameButtonState)
    }
    if (nameButtonState === "RUBLS") {
        newMoneyFilter = money.filter(m => m.banknots === nameButtonState)
    }

    const onClickHandlerFilterMoney = (nameButton: nameButtonState) => {
        setNameButton(nameButton)
    }

    //...........................................

    let [message, setMessage] = useState<MessageType[]>([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])

    const onClickButtonHandler = (title:string) => {
        setMessage([{message: title}, ...message ])
    }

    //..............................................

    let [title, setTitle] = useState<string>('')

    const callBackButtonHandler = () => {
        onClickButtonHandler(title)
        setTitle("")
    }


    return (
        <>
            <NewComponent
                newMoneyFilter={newMoneyFilter}
                onClickHandlerFilterMoney={onClickHandlerFilterMoney}/>
            {/*<Input message={message} onClickButtonHandler={onClickButtonHandler}/>*/}
            <Input2 setTitle={setTitle} title={title}/>
            <Button2 callBack={callBackButtonHandler} name={'+'} />
            {message.map((m, index) => {
                return (
                    <div key={index}>{m.message}</div>
                )
            })}
        </>
    );
}

export default App;
