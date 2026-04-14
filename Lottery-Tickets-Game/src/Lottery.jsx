import { useState } from 'react'
import './Lottery.css'
import { genRandomNumber, sum } from './helper'
import Ticket from './Ticket'


export default function Lottery({n , winCondition}){ 
    let [ticket, setTicket] = useState(genRandomNumber(n));
    let isWinning = winCondition(ticket);

    let buyNewTicket = () => {
        setTicket(genRandomNumber(n));
    }
    return (

        <div className='Lottry'>
            <h1>Lottery Ticket</h1>
                <Ticket ticket={ticket} />
            <button onClick={buyNewTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulations! You won!"}</h3>


        </div>
    );
}