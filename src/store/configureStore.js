import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import newsReducer from '../reducers/news';
import commentsReducer from '../reducers/comments';

const rootReducer = combineReducers({
  news: newsReducer,
  comments: commentsReducer,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;