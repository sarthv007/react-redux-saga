const reducer = (state = {}, action) => {

 switch (action.type) {
   case 'GET_POSTS':
        return { ...state, loading: true };
   case 'POSTS_RECEIVED':
        return { ...state, posts: action.posts, loading: false }
   default: 
        return state;
 }
};
export default reducer;