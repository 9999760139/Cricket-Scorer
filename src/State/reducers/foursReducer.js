const reducer= (state=0,action) =>{
    if (action.payload==="fours"){
        return state + 1;
    }
    else{
        return state;
    }
}

export default reducer;