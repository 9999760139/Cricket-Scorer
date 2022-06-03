const reducer = (state='',action) =>{
    if (action.type==='Nonstriker'){
        return state = action.payload
    }
    else{
        return state;
    }
}
export default reducer;