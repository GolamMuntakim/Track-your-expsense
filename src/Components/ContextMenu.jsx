

const ContextMenu = ({menuPosition , setMenuPosition, setExpenses, rowId}) => {
    if (!menuPosition.left) return
    return (
        <div>
            <div className="context-menu" style={{...menuPosition}}>
            <div onClick={()=>{
                setMenuPosition({})
            }}>Edit</div>
            <div onClick={()=>{
                setExpenses((prevState)=>
                    prevState.filter((expense) => expense.id !== rowId)
                )
               setMenuPosition({})
            }}>Delete</div>
        </div>
        </div>
    );
};

export default ContextMenu;