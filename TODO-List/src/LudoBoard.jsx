import{ useState} from 'react'
export default function LudoBoard() {
    let [moves, setMoves] = useState({
        blue: 0,
        yellow: 0,
        green: 0,
        red: 0
    });


    
    return (
        <>
            <p>game Board</p>
            <div className="board">
                <p>Blue moves= {moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={() => setMoves({...moves, blue: moves.blue + 1})}>+1</button>
                <p>Yellow moves= {moves.yellow}</p>
                <button style={{backgroundColor:"yellow"}} onClick={() => setMoves({...moves, yellow: moves.yellow + 1})}>+1</button>
                <p>Green moves= {moves.green}</p>
                <button style={{backgroundColor:"green"}}    onClick={() => setMoves({...moves, green: moves.green + 1})}>+1</button>
                <p>Red moves= {moves.red}</p>
                <button style={{backgroundColor:"red"}} onClick={() => setMoves({...moves, red: moves.red + 1})}>+1</button>
            </div>
        </>
    )
    }