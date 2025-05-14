import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addData, decrement } from "./counterslice";

const Items = () => {
  const { id } = useParams();
  const cartItems = useSelector((state) => state.counter.addData);
  const dispatch = useDispatch();
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const foundItem = cartItems.find((i) => i.id === Number(id));
    if (foundItem) {
      setItem(foundItem);
      setQuantity(foundItem.quantity);
    }
  }, [id, cartItems]);

  if (!item)
    return <p className="text-center mt-10 text-xl">Item not found.</p>;

  const handleIncrease = () => {
    dispatch(addData(item));
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      dispatch(decrement(item.id));
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="min-h-screen bg-slate-400 p-5 flex flex-col items-center">
      <div className="py-6 px-5 rounded-sm w-[330px] bg-green-200 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">{item.pname}</h1>
        <img
          src={item.image}
          alt={item.pname}
          className="w-[300px] h-auto my-4 rounded-2xl"
        />
        <p className="text-lg mt-4 p-2 text-center">{item.detail}</p>
        <p className="text-xl font-semibold mt-2">Price: ${item.price}</p>

        <div className="flex items-center mt-4">
          <button
            onClick={handleDecrease}
            className="px-4 py-2 bg-red-500 text-white rounded-l-lg hover:bg-red-600"
          >
            -
          </button>
          <span className="px-6 py-2 bg-white text-xl font-bold">
            {quantity}
          </span>
          <button
            onClick={handleIncrease}
            className="px-4 py-2 bg-green-500 text-white rounded-r-lg hover:bg-green-600"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Items;
