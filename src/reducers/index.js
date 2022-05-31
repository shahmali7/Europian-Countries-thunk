const initialState ={
    countries: [],
    errMessage:''
}

export const reducer =(state=initialState,action)=>{
    switch(action.type){
        case 'get':
            return {...state,countries:action.payload}
        case 'error':
        return  {...state,errMessage:action.payload}
       default: return state
    }
}