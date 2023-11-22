import React, {MouseEventHandler} from 'react'
import { nameButtonState } from '../App'

type newMoneyFilterType = {
    banknots: string
    value: number
    number: string
}

type NewComponentType = {
    newMoneyFilter: Array<newMoneyFilterType>
    onClickHandlerFilterMoney: (nameButton: nameButtonState) => void
}

export const NewComponent = (props: NewComponentType) => {

    return (
        <div>
            <ul>
                {props.newMoneyFilter.map((m, index) => {
                    return (
                        <li key={index + 1}>
                            <span> {m.banknots}</span>
                            <span> {m.value}</span>
                            <span> {m.number}</span>
                        </li>
                    )
                })}
            </ul>
            <button onClick={() => props.onClickHandlerFilterMoney("All")}>All </button>
            <button onClick={() => props.onClickHandlerFilterMoney("Dollars")}>Dollars </button>
            <button onClick={() => props.onClickHandlerFilterMoney("RUBLS")}>RUBLS </button>
        </div>
    )
}