import React, {
  Component,
  Fragment
} from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home/index';
import Detail from './pages/detail/index';
import SignUp from './pages/sign_up/index';
import SignIn from './pages/sign_in/index';
import BackTop from './pages/home/components/BackTop';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <BrowserRouter>
            <Fragment>
              <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
              <Route path='/sign_up' exact component={SignUp}></Route>
              <Route path='/sign_in' exact component={SignIn}></Route>
            </Fragment>
          </BrowserRouter>
          <BackTop />
        </Fragment>
      </Provider>
    );
  }
}

export default App;