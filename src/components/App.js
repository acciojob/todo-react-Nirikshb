import React, { useState } from 'react';

function TodoList() {
  // Use state to store the list of items
  const [items, setItems] = useState([]);

  // Use state to store the input value
  const [inputValue, setInputValue] = useState('');

  // Function to handle adding an item to the list
  const handleAddItem = () => {
    if (inputValue !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  // Function to handle removing an item from the list
  const handleRemoveItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      {/* Input field to add new items */}
      <input
        type="text"
        placeholder="Enter a task"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={handleAddItem}>Add</button>
      {/* Display the list of items */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
