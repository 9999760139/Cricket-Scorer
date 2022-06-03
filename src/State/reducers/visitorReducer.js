
const  reducer = (state='',action) =>{
    if(action.type==='VisiorTeam'){
        return state = action.payload
    }
    else {
        return state;
    }
}

export default reducer;