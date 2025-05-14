import React, { useState } from "react";

export const Calcu = () => {
  const [data, setData] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setData((prev) => prev + value);
  };

  const clearInput = () => {
    setData("");
    setResult("");
  };

  const calculateResult = () => {
    try {
      const evalResult = eval(data).toString();
      setData(evalResult);
      setResult(evalResult);
    } catch (error) {
      setData("Error");
      setResult("Error");
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col justify-center items-center">
      <div className="grid grid-cols-4 max-h-[450px] h-[450px] max-w-[300px] w-[300px] bg-slate-100 gap-1 p-2 shadow-xl rounded-lg">
        <input type="text" className="col-span-4 my-2 rounded-lg text-right py-1 px-3 text-2xl outline-none" value={data} readOnly />
        <button onClick={clearInput} className="bg-white rounded-xl">C</button>
        <button onClick={() => handleButtonClick("*")} className="bg-white rounded-xl">x</button>
        <button onClick={() => handleButtonClick("/")} className="bg-green-500 rounded-xl">/</button>
        <button onClick={() => setData(data.slice(0, -1))} className="bg-green-500 rounded-xl">👈</button>
        <button onClick={() => handleButtonClick("7")} className="bg-white rounded-xl">7</button>
        <button onClick={() => handleButtonClick("8")} className="bg-white rounded-xl">8</button>
        <button onClick={() => handleButtonClick("9")} className="bg-white rounded-xl">9</button>
        <button onClick={() => handleButtonClick("-")} className="bg-green-500 rounded-xl">-</button>
        <button onClick={() => handleButtonClick("4")} className="bg-white rounded-xl">4</button>
        <button onClick={() => handleButtonClick("5")} className="bg-white rounded-xl">5</button>
        <button onClick={() => handleButtonClick("6")} className="bg-white rounded-xl">6</button>
        <button onClick={() => handleButtonClick("+")} className="bg-green-500 rounded-xl">+</button>
        <button onClick={() => handleButtonClick("1")} className="bg-white rounded-xl">1</button>
        <button onClick={() => handleButtonClick("2")} className="bg-white rounded-xl">2</button>
        <button onClick={() => handleButtonClick("3")} className="bg-white rounded-xl">3</button>
        <button onClick={calculateResult} className="bg-green-500 rounded-xl row-span-2">=</button>
        <button onClick={() => handleButtonClick("%")} className="bg-white rounded-xl">%</button>
        <button onClick={() => handleButtonClick("0")} className="bg-white rounded-xl">0</button>
        <button onClick={() => handleButtonClick(".")} className="bg-white rounded-xl">.</button>
      </div>
    </div>
  );
};
