import { useState } from "react";
import { sculptureList } from "./sculptureList";

export default function Gallery() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    if (index >= 0) {
      setIndex(index + 1);
    }
  }
  function handlePrevClick() {
    if (index <= sculptureList.length - 1) {
      setIndex(index - 1);
    }
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button
        onClick={handleClick}
        disabled={index === sculptureList.length - 1}
      >
        Next
      </button>
      <button onClick={handlePrevClick} disabled={index === 0}>
        Prev
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </>
  );
}
