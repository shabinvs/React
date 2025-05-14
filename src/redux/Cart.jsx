import React from "react";
import { useDispatch } from "react-redux";
import { addData } from "./counterslice";
import { Link } from "react-router-dom";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";

const Cart = () => {
  const data = [
    {
      id: 0,
      image: img2,
      pname: "Jordan FC34",
      price: 8965.0,
      brand: "Nike",
      detail: "High-quality sports shoes designed for comfort and performance.",
    },
    {
      id: 1,
      image: img1,
      pname: "Air Max 270",
      price: 10250.0,
      brand: "Nike",
      detail: "Stylish and lightweight sneakers with superior cushioning technology.",
    },
    {
      id: 2,
      image: img3,
      pname: "Adidas Ultraboost",
      price: 11500.0,
      brand: "Adidas",
      detail: "Premium running shoes engineered for maximum energy return and support.",
    },
  ];

  const dispatch = useDispatch();

  return (
    <div className="h-full p-5 bg-white">
      <nav className="mt-4 ml-3">
        <h1 className="text-3xl font-mono font-bold">Shopping Cart</h1>
      </nav>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="p-5 border rounded-lg shadow-md bg-gray-100 flex flex-col justify-evenly h-full w-[300px] text-center mx-auto"
          >
            <div className="w-full flex justify-center">
              <img
                src={item.image}
                alt={item.pname}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>

            <h2 className="text-xl font-bold my-4">{item.pname}</h2>
            <p className="text-gray-600">Brand: {item.brand}</p>
            <p className="text-gray-800 font-semibold">Price: ${item.price}</p>
            <p className="text-sm text-gray-500 my-3">{item.detail}</p>

            <div className="mt-auto w-full flex justify-center">
              <Link to={`/item/${item.id}`}>
                <button
                  className="w-[200px] rounded-full h-14 bg-yellow-300 hover:bg-yellow-400 transition"
                  onClick={() => dispatch(addData(item))}
                >
                  Add to Cart
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
