function AddFriend (){
    return (
        <form className="form">
            <label>
                Friend name: 
                <input type="text" />
            </label>
            <br/>
            <button type="button" onClick={Addfr}>ADD</button>
        </form>
    )
}
function Addfr (){}
export default AddFriend