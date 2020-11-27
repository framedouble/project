import React from "react"
import Home from '../view/home'
import Rank from '../view/rank'
import Search from '../view/search'
import './index.css'
import '../assest/cs/reset.css'
import '../assest/js/index'
import { Switch, Route, Redirect, NavLink } from "react-router-dom"
import te from '../assest/images/te.png'
class Index extends React.Component {
    render() {
        return (<div>
            <div className='index'>
                <div className='top'>
                    <span className='de'><img src={te}/></span><span className='fonttitle'>网易云音乐</span>
                    <button className="btnone">
                        <span className="fit">下载App</span>
                    </button>
                </div>
                <div className='nav'>
                    <NavLink activeClassName='active' to="/index/home"><span>推荐音乐</span></NavLink>
                    <NavLink activeClassName='active' to='/index/rank'><span>热歌榜</span></NavLink>
                    <NavLink activeClassName='active' to='/index/search'><span>搜索</span></NavLink>
                </div>
            </div>
            <hr />
            <div className='hg'>
            <Switch>
                <Route path='/index/home' component={Home}></Route>
                <Route path="/index/rank" component={Rank}></Route>
                <Route path="/index/search" component={Search}></Route>
                <Redirect to='/index/home'></Redirect>
            </Switch></div>
        </div>)
    }
}
export default Index