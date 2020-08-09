import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
// Switch,NavLink,Link
import './scss/style.scss';
import "antd/dist/antd.css";
import Customer from "./views/acustomer/Customer";
import Login from "./views/login/Login";
import Admin from "./views/admin/Admin"
import Details from "./views/acustomer/components/Details";


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route path="/login" component={Login} /> component小写！！！！！ */}
          <Route path="/customer" exact component={Customer}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/admin"exact component={Admin}></Route>
          <Route path="/customer/details" component={Details}></Route>
        </Switch>
        {/* <Link to="/login">go to login </Link>
        <Link to="/customer">go to customer </Link> */}
      </Router>
    )
  }
}

export default App;








//引入路由
// import routes from './Router' ;
// import { exact } from 'prop-types';


// const loading = (
//   <div className="pt-3 text-center">
//     <div className="sk-spinner sk-spinner-pulse"></div>
//   </div>
// )

// Containers
// const TheLayout = React.lazy(() => import('./containers/TheLayout'));
// const Customer = React.lazy(() => import('./views/acustomer/Customer'));

// Pages
// const Login = React.lazy(() => import('./views/pages/login/Login'));
// const Register = React.lazy(() => import('./views/pages/register/Register'));
// const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
// const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

// class App extends Component {

//   render() {
//     return (

      // <HashRouter>
      //     <React.Suspense fallback={loading}>
      //       <Switch>
      //         {/* <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
      //         <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
      //         <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
      //         <Route exact path="/login" name="login page" render={props => <Login {...props}/>} />
      //         <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} /> */}
      //         {/* <Route path="/" name="Home" render={props => <TheLayout {...props}/>} /> */}
      //         <Route path="/" name="customer" render={props => <Customer {...props}/>} />
      //         {/* <Route path="/login" Component={Login}></Route> */}

      //       </Switch>
      //     </React.Suspense>
      // </HashRouter>
//     );
//   }
// }

// export default App;
