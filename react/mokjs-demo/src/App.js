// import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
// SPA   #/(兼容性更好)   /(后端路由)  路由选择
//  src/ 目录  架构意义  
    // /components      /pages     /api     /store   /layout 页面版式
import Frame from './layout/Frame'; //
import HookMovie from './pages/HookMovie';
import HookInfos from './pages/HookInfos';
import { Switch,Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Frame>
        <Switch>
          <Route  path="/" exact component={HookMovie}></Route>
          <Route path="/infos" component={HookInfos}></Route>
          
        </Switch>
      </Frame>
    </BrowserRouter>
  );
}

export default App;
