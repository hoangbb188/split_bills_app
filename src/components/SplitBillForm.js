import React,{useState} from "react";
function SplitBillForm({friend}) {
  
  return (
    <div className="split-bill">
      <h2>SPLIT A BILL WITH {friend?friend.name.toUpperCase():" ... "} </h2>
      <label>
        Bill value
        <input type="number" value="" />
      </label>
      <label>
        Your expense
        <input type="number" />
      </label>

      <label>
        Huy's expense
        <input type="number" />
      </label>
      <label>
        Who is paying the bill?
        <select>
          <option value="you">You</option>
          <option value="Liv">Liv</option>
        </select>
      </label>
      <button className="btn split">Split bill</button>
    </div>
  );
}
export default SplitBillForm;
