
import { useState } from "react";


interface Props {
  items: string[];
  heading: string;
  onSelection: (item: string) => void;
}

export default function ListGroup({heading, items, onSelection}: Props) {

  const [selectedIndex, setselectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
                setselectedIndex(index);
                onSelection(item)
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
