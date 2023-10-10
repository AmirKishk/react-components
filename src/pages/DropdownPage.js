import { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropDownPage() {
  const [selection, setSelection] = useState(null);

  const handleSelection = (option) => {
    setSelection(option);
  };

  const options = [
    { label: "Red", value: "red" },
    { label: "Yellow", value: "yellow" },
    { label: "Green", value: "green" },
  ];

  return (
    <div className="flex">
      <Dropdown
        options={options}
        value={selection}
        onChange={handleSelection}
      />
    </div>
  );
}

export default DropDownPage;
