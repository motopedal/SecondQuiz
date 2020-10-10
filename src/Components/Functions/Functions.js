

export const onDragStart = (e) => 
{
    e.dataTransfer.setData("id", e.target.id);
}

export const onDragOver = (e) => 
{
    e.preventDefault();
}

export const onDrop = (e, state, index , forceUpdate) => 
{
    let id = e.dataTransfer.getData("id");
    if(state["answer"][index] == null){
        state["answer"][index] = state["numbers"][id]
        state["numbers"][id] = undefined
    }
    forceUpdate()
}
