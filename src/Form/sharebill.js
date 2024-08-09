function Share (props){
    const usfrs =  [{ id: 1,name:'Lan' }, { id: 2, name: 'Huy' }, { id: 3, name: 'Son' }];
    return ( <div className="bill-splitter">

        <form className="form" >
            <div className="form-group" >

            <label className="form-label">Bill value <input className="form-input" type="text" /></label>
            <label className="form-label">Your expense <input className="form-input" type="text" /></label>

            <label className="form-label">{props.name}'s expense</label>
            <br/>

            <label className="form-label">Who is paying the bill
                <select>
                {usfrs.map((usf) => (<option key={usf.id} value={usf.name}>{usf.name}</option>))}

                </select>
            </label>
            <br/>
            </div>
        </form>
    </div>

    )
}
export default Share;