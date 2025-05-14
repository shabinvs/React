import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterslice";

export const Count = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="bg-green-400 min-h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-[400px] h-[200px] bg-slate-50 rounded-2xl shadow-xl">
        <h2 className="text-[34px]">{count}</h2>
        <div className="flex flex-row gap-3 mt-8">
          <button onClick={() => dispatch(increment())} className="w-[120px] h-10 bg-teal-400 rounded-md">increment</button>
          <button onClick={() => dispatch(decrement())} className="w-[120px] h-10 bg-teal-400 rounded-md">decrement</button>
        </div>
      </div>
    </div>
  );
};
