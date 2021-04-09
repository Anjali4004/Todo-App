import _posts from '../data/Posts'
const postReducer = function posts(state = [] ,action) {
    switch(action.type)
    {
        case 'REMOVE_LIST': return [...state.slice(0,action.index), ...state.slice(action.index + 1)]
        case 'ADD_LIST': console.log(state);
                    return [...state,action.list]
        default: return state
    }
   
}

export default postReducer