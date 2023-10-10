import { Dispatch, SetStateAction } from "react";

type CellProps = {
    id  : number;
    go: string;
    setGo: Dispatch<SetStateAction<string>>;
    cells: Array<string>;
    setCells: Dispatch<SetStateAction<Array<string>>>;
    cell: string;
}
const Cell = ({go, setGo ,id, cells, setCells, cell}: CellProps) => {
    const handleClick = () => {
        const taken = !!cells[id]
        if (taken) return
        setGo(go === "Circle" ? "Cross" : "Circle")
        cells[id] = go
        console.log(cells)
    }
    return <div className="square" onClick={handleClick}>
        <div className={cell}>{cell ? cell == "Circle" ? "O" : "X" : ""}</div>
        </div>
}
export default Cell;

