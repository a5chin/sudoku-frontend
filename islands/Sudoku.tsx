import { FunctionalComponent } from "preact";
import { useState } from "preact/hooks";
import SudokuGrid from "../components/SudokuGrid.tsx";
import NumberSelector from "../components/NumberSelector.tsx";

const initialGrid = Array.from({ length: 9 }, () => Array(9).fill(0));

const Sudoku: FunctionalComponent = () => {
  const [grid, setGrid] = useState(initialGrid);
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

  const handleCellClick = (row: number, col: number) => {
    if (selectedNumber !== null) {
      const newGrid = grid.map((r, rowIndex) =>
        r.map((
          cell,
          colIndex,
        ) => (rowIndex === row && colIndex === col ? selectedNumber : cell))
      );
      setGrid(newGrid);
    }
  };

  const handleNumberSelect = (number: number) => {
    setSelectedNumber(number);
  };

  return (
    <div class="sudoku-container">
      <h1>Sudoku</h1>
      <SudokuGrid grid={grid} onCellClick={handleCellClick} />
      <NumberSelector
        selectedNumber={selectedNumber}
        onNumberSelect={handleNumberSelect}
      />
      <button onClick={() => setGrid(initialGrid)}>Reset</button>
    </div>
  );
};

export default Sudoku;
