const initialState = {
    latestNews: [],
  };
  
  const newsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_LATEST_NEWS_SUCCESS':
        return {
          ...state,
          latestNews: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default newsReducer;