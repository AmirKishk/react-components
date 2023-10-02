import { useState } from "react";

function Accordion({ items }) {
  const [expandedIndex, setExpandedindex] = useState(0);

  const renderItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    return (
      <div key={item.id}>
        <h3
          onClick={() => {
            setExpandedindex(index);
          }}
        >
          {item.label}
        </h3>
        <div>{isExpanded && <div>{item.content}</div>}</div>
      </div>
    );
  });
  return <div>{renderItems}</div>;
}

export default Accordion;
