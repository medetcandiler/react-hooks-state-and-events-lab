import { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategory = (e) => {
    setSelectedCategory(e.target.value)
  }

  const toDisplay = items.filter(item => {
    if(selectedCategory === 'All'){
      return true
    }

    return item.category === selectedCategory;
  })

  const onAddChart = () => {

  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleCategory} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {toDisplay.map((item) => (
          <Item key={item.id} onAddChart={onAddChart} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
