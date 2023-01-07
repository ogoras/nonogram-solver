import React from "react";


class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: props.rows,
            columns: props.columns
        };
    }
    
    render() {
        return (
        <div>
            <table>
            <tbody>
                {this.createTable()}
            </tbody>
            </table>
        </div>
        );
    }
    
    createTable() {
        let table = [];
        for (let i = 0; i < this.props.rows; i++) {
        let children = [];
        for (let j = 0; j < this.props.columns; j++) {
            children.push(<td key={j}>x</td>);
        }
        table.push(<tr key={i}>{children}</tr>);
        }
        return table;
    }
}

export default Board;