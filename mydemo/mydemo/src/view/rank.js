import React from 'react';
import './rank.css'
import imgq from '../assest/images/q.png'
import moo from '../assest/images/moo.png'
import { NavLink } from 'react-router-dom'
import { hot } from '../utils/index'
import sq from '../assest/images/sq.png'
class Rank extends React.Component {
    constructor() {
        super()
        this.state = {
            a: (new Date()).getMonth() + 1,
            b: (new Date()).getDate(),
            songlist: []
        }
    }
    componentDidMount() {
        hot({ id: 3778678 }).then(res => {
            console.log(res.playlist)
            this.setState({
                songlist: res.playlist.tracks.splice(0, 25)
            })
        })
    }
    render() {
        const { songlist, a, b } = this.state;
        return (<div>

            <div className='mg'>
                <img src={imgq} />
                <p className='timer'>更新时间:{a}月{b}日</p>
            </div>
            <ul>
                {songlist.map((item, i) => {
                    return (<li key={item.id}><NavLink to='/play'>
                        <div className={i + 1 <= 3 ? 'pd' : 'pt'} >{i >= 0 && i <= 8 ? '0' + (i + 1) : i + 1}</div><div className='mo'>  <p className='p1'>{item.name}</p>
                            <p className='p2'><img className='sq' src={sq} />{item.name}</p></div>
                        <div className='ih'><img src={moo} /></div>
                    </NavLink>
                    </li>)
                })
                }
            </ul>
        </div>)
    }
}
export default Rank;