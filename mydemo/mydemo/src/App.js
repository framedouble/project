import React from 'react'
import Index from './page/index'
import List from './page/list'
import Play from './page/play'
// import Login from './page/login'
import { Switch, Route, Redirect } from "react-router-dom"
class App extends React.Component {
    render() {
        return (<div>
            <Switch>
                <Route path='/index' component={Index}></Route>
                <Route path='/list' component={List}></Route>
                <Route path='/play' component={Play}></Route>
                {/* <Route path='/login' component={Login}></Route> */}
                <Redirect to="/index"></Redirect>
            </Switch>
        </div>)
    }
}
export default App