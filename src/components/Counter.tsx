import { useState } from "react";

type Props = {
  initial?: number;
  interval?: number;
};

export default function Counter({ initial = 0, interval = 1 }: Props) {
  let [count, setCount] = useState(initial);
  let [sign, changeSign] = useState(interval < 0 ? -1 : 1);

  return (
    <div className="mt-10 border max-w-fit p-5 bg-purple-100">
      <p className="text-xl font-semibold mb-1">
        React Client Component Example
      </p>
      <div className="flex items-center mb-2">
        <button
          className="bg-gray-300 px-2 py-1 rounded-sm hover:bg-gray-400"
          onClick={() => setCount((prev) => prev + interval * -sign)}
        >
          Change count by {interval * -sign}
        </button>
        <div className="flex items-center gap-2 pl-2">
          <label htmlFor="sign">Change sign:</label>
          <input
            id="sign"
            type="checkbox"
            onChange={() => changeSign((prev) => (prev === -1 ? 1 : -1))}
          />
        </div>
      </div>
      <p className="px-2">
        <span className="underline pr-2">Current count:</span>
        <code className="bg-black text-cyan-300 px-1">{count}</code>
      </p>
    </div>
  );
}
