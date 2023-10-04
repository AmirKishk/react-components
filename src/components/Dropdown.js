import { useState } from "react";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (event) => {
    setIsOpen(false);

    onChange(event);
  };

  const renderOptions = options.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={options.value}>
        {option.label}
      </div>
    );
  });

  let content = "Select...";
  if (value) {
    content = value.label;
  }

  return (
    <div>
      <div onClick={handleClick}>{content}</div>
      {isOpen && <div>{renderOptions}</div>}
    </div>
  );
}

export default Dropdown;
