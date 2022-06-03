const reducer = (state='',action) =>{
    if (action.type==='Striker'){
        return state = action.payload
    }
    else{
        return state;
    }
}
export default reducer;