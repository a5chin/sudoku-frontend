import { FunctionalComponent } from "preact";

interface SudokuGridProps {
  grid: number[][];
  onCellClick: (row: number, col: number) => void;
}

const SudokuGrid: FunctionalComponent<SudokuGridProps> = (
  { grid, onCellClick },
) => {
  return (
    <table class="sudoku-grid">
      <tbody>
        {grid.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, colIndex) => (
              <td
                key={colIndex}
                onClick={() => onCellClick(rowIndex, colIndex)}
              >
                {cell !== 0 ? cell : ""}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SudokuGrid;
