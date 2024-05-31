import { PageProps } from "$fresh/server.ts";
import Sudoku from "../islands/Sudoku.tsx";

const Home = ({ params }: PageProps) => {
  return (
    <div>
      <Sudoku />
    </div>
  );
};

export default Home;
