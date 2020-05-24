import React from 'react';

import {Switch,Route,Redirect} from "react-router-dom"
import Index from "./page/Index"
// import Assets from "./component/Assets"
// import Inventory from "./component/Inventory"
// import System from "./component/System"
// import Statement from "./component/Statement"



function App() {
  return (
    <div>
      {/* {一级路由出口} */}
      <Switch>
        {/* {路由规则} */}
        <Route path='/index' component={Index}></Route>
        {/* <Route path='/assets' component={Assets}></Route>
        <Route path='/inventory' component={Inventory}></Route>
        <Route path='/system' component={System}></Route>
        <Route path='/statement' component={Statement}></Route> */}
        <Redirect to='/index'></Redirect>
      </Switch>
    </div>
  );
}

export default App;
