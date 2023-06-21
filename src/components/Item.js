import React, { useState, useEffect } from "react";

function Item({ name, category, item }) {
  const [onCart, setOnCart] = useState(item.onCart);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart && storedCart[item.id]) {
      setOnCart(storedCart[item.id]);
    }
  }, []);

  const addHandler = () => {
    setOnCart(prev => !prev);
    item.onCart = !item.onCart;
    const storedCart = JSON.parse(localStorage.getItem("cart")) || {};
    storedCart[item.id] = !onCart;
    localStorage.setItem("cart", JSON.stringify(storedCart));
  };



  const liClassName = onCart ? "style in-cart" : "style";

  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addHandler} className="add">
        Add to Cart
      </button>
    </li>
  );
}

export default Item;
