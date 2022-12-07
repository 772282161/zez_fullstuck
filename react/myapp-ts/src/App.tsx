import React from 'react';
import styles from './App.module.css'
import 'antd/dist/antd.css';
// BrowserRouter 路由导航，Route 路由的路径解析器，Switch 切换的路径以页面为单位，不要页面堆叠。
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { HomePage,SingInPage ,RegisterPage,DetailPage} from './pages';


function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/signIn" component={SingInPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/detail/:touristRouteId" component={DetailPage} />
          <Route render={() => <h1>找不到此页面 404 NOT FOUND</h1>} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
