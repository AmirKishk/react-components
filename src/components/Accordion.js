import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedindex] = useState(-1);

  const handleClick = (nextIndex) => {
    if (expandedIndex === nextIndex) {
      setExpandedindex(-1);
    } else {
      setExpandedindex(nextIndex);
    }
  };

  const renderItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="ml-3 text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}{" "}
      </span>
    );

    return (
      <div key={item.id}>
        <h3
          className="flex p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </h3>

        <div>
          {isExpanded && <div className="border-b p-5">{item.content}</div>}
        </div>
      </div>
    );
  });
  return <div className="border-x border-t rounded">{renderItems}</div>;
}

export default Accordion;
