import { useState } from "react";

export const Updating_objectsonArray = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleClick = () => {
    setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed: true} : bug));

    setBugs([...bugs, { id: 3, title: "Bug 3", fixed: false }]);
  };

  return (
    <div>
      <button onClick={handleClick}>Object in array update</button>
    </div>
  );
};
