const reducer = (state='',action) =>{
    if (action.type==='Bowler'){
        return state = action.payload
    }
    else{
        return state;
    }
}
export default reducer;