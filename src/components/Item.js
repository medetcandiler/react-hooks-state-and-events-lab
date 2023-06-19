import { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart ] = useState(false);

  const addHandler = () => {
    setCart(prev => !prev);
  }

  return (
    <li className={cart && 'in-cart'}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addHandler} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
