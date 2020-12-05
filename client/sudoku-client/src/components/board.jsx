import React from 'react';
import './board.css';

function Board({board}) {
    let rows = []
    for(let i = 0; i < board.length; i++) {
        let rowID = `row${i}`;
        let cell = []
        for (let idx = 0; idx < board[i].length; idx++){
            let cellID = `cell${i}-${idx}`
            cell.push(<td key={cellID} id={cellID}>{board[i][idx] === 0? " ": board[i][idx]}</td>)
        }
        rows.push(<tr key={i} id={rowID}>{cell}</tr>)
    }
    return(
        <div className="container">
            <table id="board">
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );
}

export default Board;
