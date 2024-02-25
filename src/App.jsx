import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);
  let totalTip = (((+tip1 + +tip2) / 2) * Number(bill)) / 100;
  function handleReset() {
    setBill(0);
    setTip1(0);
    setTip2(0);
  }

  return (
    <div>
      <Bill bill={bill} setBill={setBill} />
      <ServiceLevel tip={tip1} setTip={setTip1}>
        How did you like the service?
      </ServiceLevel>
      <ServiceLevel tip={tip2} setTip={setTip2}>
        How did your friend like the service?
      </ServiceLevel>
      <Total bill={bill} totalTip={totalTip} onReset={handleReset} />
    </div>
  );
}
function Bill({ bill, setBill }) {
  return (
    <label>
      How much was the bill?{" "}
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
    </label>
  );
}
function ServiceLevel({ children, tip, setTip }) {
  return (
    <div>
      <span>{children}</span>
      <select onChange={(e) => setTip(e.target.value)} value={tip}>
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was okay(5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">Absolutely amazing!(20%)</option>
      </select>
    </div>
  );
}

function Total({ bill, totalTip, onReset }) {
  let total = Number(bill) + Number(totalTip);
  return (
    <div>
      <p>{`You pay ${total} (${bill}+${totalTip})`}</p>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
