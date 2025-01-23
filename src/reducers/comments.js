const initialState = {
    byNewsId: {},
  };
  
  const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_COMMENTS_FOR_NEWS_SUCCESS':
        return {
          ...state,
          byNewsId: {
            ...state.byNewsId,
            [action.newsId]: action.payload,
          },
        };
      default:
        return state;
    }
  };
  
  export default commentsReducer;