import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import HomePage from './components/HomePage';
import NewsDetails from './components/NewsDetails';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/:newsId" component={NewsDetails} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;