"use client";

import { useState } from "react";

const Purchase_Options = () => {
  const [count, setCount] = useState<number>(1);
  const increment = () => setCount((prev) => Math.min(prev + 1, 5));
  const decrement = () => setCount((prev) => Math.max(prev - 1, 1));
  return (
    <div>
      <div className="flex items-center gap-4 border-t pt-3">
        <h1>Quantity:</h1>
        <div className="flex">
          <button
            onClick={decrement}
            className="bg-tertiaryLite hover:bg-tertiary text-white font-bold py-2 px-4 rounded-l"
          >
            -
          </button>
          <input
            type="text"
            value={count}
            readOnly
            className="w-12 text-center border border-gray-300 outline-none"
          />
          <button
            onClick={increment}
            className="bg-tertiaryLite hover:bg-tertiary text-white font-bold py-2 px-4 rounded-r"
          >
            +
          </button>
        </div>
      </div>
      <div className="flex  gap-4 pt-4">
        <button className="bg-fifth py-3 w-full uppercase text-primary">
          BUY NOW
        </button>
        <button className="bg-tertiaryLite py-3 w-full uppercase text-primary">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Purchase_Options;
