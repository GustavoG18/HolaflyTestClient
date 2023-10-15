import { GridPropsType } from "../types";
import Card from "./Card";

const Grid = ({ cards }: GridPropsType) => {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {cards.map((data, index) => {
        return <Card key={index} cardData={data} />;
      })}
    </ul>
  );
};

export default Grid;
