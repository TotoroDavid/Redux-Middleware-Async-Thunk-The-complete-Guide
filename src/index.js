import ReactDOM from 'react-dom';
import App from './App';
import { applyMiddleware, createStore } from 'redux'
import postReducer from './reducer'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(postReducer, applyMiddleware(thunk))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)