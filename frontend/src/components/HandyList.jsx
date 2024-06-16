import React, { useState } from "react";
import { Card } from "@chakra-ui/react";
const HandyList = ({ title, initialItems }) => {
  const [items, setItems] = useState(initialItems);

  const handleDelete = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 border border-gray-300">
      <div className="font-bold text-xl mb-2">{title}</div>
      <ul className="list-disc list-inside">
        {items.map((item, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>{item}</span>
            <button
              className="text-red-500 hover:text-red-700 ml-4"
              onClick={() => handleDelete(index)}
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const initialItems = ["Item 1", "Item 2", "Item 3"];

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card title="My Card" initialItems={initialItems} />
    </div>
  );
};

export default HandyList;
