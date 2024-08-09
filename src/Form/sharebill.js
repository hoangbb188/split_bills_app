function Share (props){
    const usfrs =  [{ id: 1,name:'Lan' }, { id: 2, name: 'Huy' }, { id: 3, name: 'Son' }];
    return (
        <form >
            <label>Bill value <input type="text" /></label>
            <br/>
            <label>Your expense <input type="text" /></label>
            <br/>
            <label>{props.name}'s expense</label>
            <br/>
            <label>Who is paying the bill
                <select>
                {usfrs.map((usf) => (<option key={usf.id} value={usf.name}>{usf.name}</option>))}

                </select>
            </label>
            <br/>
        </form>
    )
}
export default Share;