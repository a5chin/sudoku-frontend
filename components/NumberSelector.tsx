import { FunctionalComponent } from "preact";

interface NumberSelectorProps {
  selectedNumber: number | null;
  onNumberSelect: (number: number) => void;
}

const NumberSelector: FunctionalComponent<NumberSelectorProps> = (
  { selectedNumber, onNumberSelect },
) => {
  const numbers = Array.from({ length: 10 }, (_, i) => i);

  return (
    <div class="number-selector">
      {numbers.map((number) => (
        <button
          key={number}
          class={selectedNumber === number ? "selected" : ""}
          onClick={() => onNumberSelect(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default NumberSelector;
