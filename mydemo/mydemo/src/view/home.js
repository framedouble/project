import React from 'react'
import './home.css'
import { NavLink } from 'react-router-dom'
import imgn from '../assest/images/n.jpg'
import moo from '../assest/images/moo.png'
import sq from '../assest/images/sq.png'
import { recMusic, newSong, banner } from '../utils/index'
import Swiper from 'swiper'
import 'swiper/js/swiper'
import 'swiper/css/swiper.css'
class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            songList: [],
            titlist: [],
            bannersList: []
        }
    }
    componentDidMount() {
        recMusic({ limit: 6 }).then(res => {
            // console.log(res)
            if (res.code == 200) {
                this.setState({
                    songList: res.result
                })

            }
        })
        newSong().then(res => {
            if (res.code == 200) {
                this.setState({
                    titlist: res.result
                })

            }
        })
        banner().then(res => {
            // console.log(res)
            if (res.code == 200) {
                this.setState({
                    bannersList: res.banners
                })

            }


        })

    }
    componentDidUpdate() {
        let swiper = new Swiper('.swiper-container', {
            spaceBetween: 30,
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
    getInfo(id) {
        this.props.history.push(`/list?id=${id}`)
    }
    render() {
        const { songList, titlist, bannersList } = this.state;
        return (<div>
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {bannersList.map(item => {
                        return (<div key={item.imageUrl} className="swiper-slide"><img src={item.imageUrl} /></div>)
                    })}
                </div>
                <div className="swiper-pagination"></div>
                {/* <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div> */}
            </div>
            <h2>推荐歌单</h2>
            <div>
                <ul className='uli'>
                    {

                        songList.map(item => {
                            return (<li key={item.id} onClick={this.getInfo.bind(this, item.id)}>
                                <NavLink to='/list'> < img className='er' src={item.picUrl} />
                                    <div className='pdd'><svg className='ds' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 20">
                                        <path fillRule="evenodd" fill="#040000" d="M22 16.777c0 1.233-1.121 2.233-2.506 2.233-1.384 0-2.506-1-2.506-2.233v-2.553c0-1.234 1.122-2.233 2.506-2.233.174 0 .343.017.506.046v-1.37h-.033c.017-.22.033-.441.033-.666a8 8 0 0 0-16 0c0 .225.016.446.034.666H4v1.37c.163-.029.333-.046.505-.046 1.384 0 2.506.999 2.506 2.233v2.553c0 1.233-1.122 2.233-2.506 2.233S2 18.011 2 16.777v-2.553c0-.258.059-.501.148-.73A.982.982 0 0 1 2 13.001v-2.667c0-.023.012-.043.013-.067-.004-.088-.013-.176-.013-.266 0-5.523 4.477-10 10-10s10 4.477 10 10c0 .09-.009.178-.014.266.002.024.014.044.014.067v2a.988.988 0 0 1-.36.753c.224.334.36.72.36 1.138v2.552" opacity=".15" /><path fillRule="evenodd" fill="#fff" d="M20 16.777c0 1.233-1.121 2.233-2.506 2.233-1.384 0-2.506-1-2.506-2.233v-2.553c0-1.234 1.122-2.233 2.506-2.233.174 0 .343.017.506.046v-1.37h-.033c.017-.22.033-.441.033-.666a8 8 0 0 0-16 0c0 .225.016.446.034.666H2v1.37c.163-.029.333-.046.505-.046 1.384 0 2.506.999 2.506 2.233v2.553c0 1.233-1.122 2.233-2.506 2.233S0 18.011 0 16.777v-2.553c0-.258.059-.501.148-.73A.982.982 0 0 1 0 13.001v-2.667c0-.023.012-.043.013-.067-.004-.088-.013-.176-.013-.266 0-5.523 4.477-10 10-10s10 4.477 10 10c0 .09-.009.178-.014.266.002.024.014.044.014.067v2a.988.988 0 0 1-.36.753c.224.334.36.72.36 1.138v2.552" /></svg>
                                        <span id='as'>{((item.playCount) / 10000).toFixed(1) + '万'}</span></div>
                                    <p>{item.name}</p>
                                </NavLink>
                            </li>
                            )

                        })

                    }
                </ul>
            </div>
            <h2>最新音乐</h2>
            <ul className='uum'>
                {titlist.map(item => {

                    return (<li key={item.id}>
                        <NavLink to='/play'>
                            <div>
                                <p className='p1'>{item.name}</p>

                                <p key={item.id} className='p2'><img className='sq' src={sq} />{item.song.album.artists[0].name}-{item.song.album.name}</p>


                            </div>
                            <div className='ihi'><img src={moo} /></div></NavLink>
                    </li>)
                })}
            </ul>
            <div className='bottom'>
                <div>
                    <img src={imgn} /><span>网易云音乐</span>
                </div>
            </div>
            <div className='ll'>  <a className='kkd' href='https://m.music.163.com/m/applink/?scheme=orpheus%3A%2F%2Fopenurl'>打开App,发现更多好音乐&gt;</a></div>
            <p className='op'>网易公司版权所有©1997-2020   杭州乐读科技有限公司运营</p>
        </div >)
    }
}
export default Home