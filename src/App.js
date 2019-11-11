import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/Burgerbuilder';
import CheckOut from './containers/CheckOut/CheckOut';
import ContactData from './containers/CheckOut/ContactData/ContactData';

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact >
              <BurgerBuilder />
            </Route>
            <Route path="checkout" >
              <CheckOut />
            </Route>
            <Route path="con" >
              <ContactData />
            </Route>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
