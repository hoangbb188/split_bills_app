import React,{useState} from "react";
function SplitBillForm({friend,updateValue}) {
  const [billValue, setBillValue] =useState("");
  const [yourExpense, setYourExpense] =useState("");
  const [payer,setPayer] =useState("you");
  const outputValue = Math.max(0,billValue-yourExpense);
  const buttonSpitBill =() =>{
    {yourExpense>billValue?alertChangeValue():handleSpitBill()}
  }
  const alertBan= () =>{friend?buttonSpitBill():alert('You must select a friend')}

  

  const handleSpitBill =() =>{ 
    // const amount = 0;
    // {payer=="you"?amount= outputValue:amount=-yourExpense};
    // updateValue(friend.id,amount);
    // alert(friend.id+"    "+amount);
    let amount= 1;
    {payer==="you"?amount=outputValue:amount=-yourExpense}
    updateValue(friend.id,amount);

}
  const alertChangeValue= () => {alert("Your expense must be less than the bill value.")}
  return (
    <div className="split-bill">
      <h2>SPLIT A BILL WITH {friend?friend.name.toUpperCase():" ..... "} </h2>
      <label>
      💰 Bill value
        <input type="number" value={billValue} 
        onChange={(e)=>setBillValue(e.target.value)}/>
      </label>
      <label>
      🧍  Your expense
        <input type="number" value={yourExpense}
        onChange={(e)=>setYourExpense(e.target.value)}/>
      </label>

      <label>
      🫰 {friend?`${friend.name}'s expense`: `Not Selected` }
        <input type="number" value={outputValue} min ="0" disabled/>
      </label>
      <label>
      💸 Who is paying the bill?
        <select value={payer} onChange={(e)=> setPayer(e.target.value)}>
          <option value="you">You</option>
          <option value={friend?friend.name:''}>{friend?friend.name:''}</option>
        </select>
      </label>
      <button className="btn split" onClick={()=>{alertBan()}}>Split bill</button>
    </div>
  );
}
export default SplitBillForm;

