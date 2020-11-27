import React from 'react'
import './search.css'
import moo from '../assest/images/moo.png'
import sq from '../assest/images/sq.png'
import { search, hotsearch } from '../utils/index'
import { NavLink } from 'react-router-dom'
class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            songList: [],
            marklist: [],
        }
        this.inpval = React.createRef();
    }
    clear() {
        document.getElementById('kl').value = '';
        this.setState({
            songList: []

        });
    }
    getInfo(e) {
        if (e.keyCode == 13) {

        }
        if (e.target.value != false) {
            search({
                keywords: e.target.value
            }).then(res => {
                console.log(res)
                if (res.code == 200) {
                    this.setState({
                        songList: res.result.songs
                    })
                }

            }).catch((err) => {
                console.log(err);
            })

        } else {
            this.setState({
                songList: [],
            })
        }

    }
    toplay(id) {
        this.props.history.push(`/play?id=${id}`)
    }
    componentWillMount() {
        hotsearch().then((res) => {
            // console.log(res)
            if (res.code == 200) {
                this.setState({
                    marklist: res.data.splice(0, 10)
                })
            }
        })
            .catch((err) => {
                console.log(err);
            })
    }

    dfuent(id) {
        this.props.history.push('/list/' + id)

    }
    render() {
        let flge = ''
        if (this.inpval.current) {
            flge = this.inpval.current.value
        }
        const { songList, marklist } = this.state
        let hotInfo = <div>  <p className='mooo'>热门搜索</p>
            <div className='aslv'>{
                marklist.map(item => {
                    return (<div onClick={this.toplay.bind(this, item.id)} key={item.content}>
                        {item.searchWord}
                    </div> )
                })
            }</div></div>

        return (<div>
            <div className='inp'>
                <svg className='na' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                    <path fillRule="evenodd" fill="#c9c9ca" d="M25.181 23.535l-1.414 1.414-7.315-7.314A9.966 9.966 0 0 1 10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10c0 2.342-.811 4.49-2.16 6.195l7.341 7.34zM10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16z" /></svg>
                <input ref={this.inpval} autoComplete='off' id='kl' type="text" onChange={(e) => this.getInfo(e)} placeholder='搜索歌曲、歌手、专辑' />
                <i className={flge ? 'show' : 'hid'}><svg onClick={this.clear.bind(this)} className='pop' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><g fillRule="evenodd"><path fill="#bcbdbd" d="M14 0c7.732 0 14 6.268 14 14s-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0z" /><path d="M19 9L9 19M9 9l10 10" fill="none" stroke="#ebeceb" strokeWidth="2.5" strokeMiterlimit="10" /></g></svg></i>
            </div>{/*  */}



            <ul>{
                songList.splice(0, 4).map(item => {
                    return <li onClick={this.dfuent.bind(this, item.searchWord)} className='lli' key={item.id}>

                        <svg className='as' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                            <path fillRule="evenodd" fill="#c9c9ca" d="M25.181 23.535l-1.414 1.414-7.315-7.314A9.966 9.966 0 0 1 10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10c0 2.342-.811 4.49-2.16 6.195l7.341 7.34zM10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16z" /></svg>
                        {item.name}
                    </li>
                })}</ul>{/*  */}



            {songList.length == 0 ? hotInfo : ''}


            <div>
                <ul>
                    {
                        songList.map(item => {
                            return (<li onClick={this.toplay.bind(this, item.id)}>
                                <li key={item.id}>
                                    <div>
                                        <p className='p1'>{item.name}</p>
                                        <p className='p2'>
                                            <img className='sq' src={sq} />{item.artists[0].name}-{item.album.name}
                                        </p>
                                    </div>
                                    <div className='ihi'><img src={moo} /></div>
                                </li>
                            </li>)
                        })
                    }
                </ul>
            </div>
        </div>)
    }
}

export default Search