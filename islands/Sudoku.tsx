import { FunctionalComponent } from "preact";
import { useState } from "preact/hooks";
import SudokuGrid from "../components/SudokuGrid.tsx";
import NumberSelector from "../components/NumberSelector.tsx";
import SudokuResponseSchema from "../model/SudokuResponseSchema.tsx";

const initialGrid = Array.from({ length: 9 }, () => Array(9).fill(0));

const Sudoku: FunctionalComponent = () => {
  const [grid, setGrid] = useState(initialGrid);
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

  const handleCellClick = (row: number, col: number) => {
    if (selectedNumber !== null) {
      const newGrid = grid.map((r, rowIndex) =>
        r.map((cell, colIndex) => (rowIndex === row && colIndex === col ? selectedNumber : cell))
      );
      setGrid(newGrid);
    }
  };

  const handleNumberSelect = (number: number) => {
    setSelectedNumber(number);
  };

  const encodeGrid = (grid: number[][]) => {
    return encodeURIComponent(JSON.stringify(grid));
  };

  const handleSolve = async () => {
    const encodedGrid = encodeGrid(grid);
    const response = await fetch(`https://sudoku-oj3fqx44ka-uc.a.run.app/api/v1/solve?prob=${encodedGrid}`);
    const data = await response.json();

    const parsed = SudokuResponseSchema.safeParse(data);

    if (parsed.success) {
      setGrid(parsed.data.result);
    } else {
      console.error(parsed.error);
      alert("Failed to solve the puzzle. Please try again.");
    }
  };

  return (
    <div class="sudoku-container">
      <h1>Sudoku</h1>
      <SudokuGrid grid={grid} onCellClick={handleCellClick} />
      <NumberSelector
        selectedNumber={selectedNumber}
        onNumberSelect={handleNumberSelect}
      />
      <div class="button-container">
        <button onClick={() => setGrid(initialGrid)}>Reset</button>
        <button onClick={handleSolve}>Solve</button>
      </div>

    </div>
  );
};

export default Sudoku;
