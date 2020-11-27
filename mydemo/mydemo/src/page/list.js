import React from "react"
import './list.css'
import q from 'querystring'
import { playDetail } from '../utils/index'
class Index extends React.Component {
  constructor() {
    super()
    this.state = {
      playList: {},
      songList: []
    };
  }
  componentDidMount() {
    let a = this.props.location.search.slice(1)
    playDetail({
      id: q.parse(a).id
    }).then(res => {
      if (res.code == 200) {
        this.setState({
          playList: res.playlist,
          songList: res.playlist.tracks,
        })
      }
    })


  }
  toPlay(id) {
    this.props.history.push(`/play?id=${id}`);
  }
  render() {
    const { playList, songList } = this.state
    return (
      <div className="list">
        <div className="top">
          <div className="left">
            <span>歌单</span>
            <img src={playList.coverImgUrl}></img>
          </div>
          <div className="right">
            <h3>{playList.name}</h3>
            <div className="nick">
              <img src={playList.creator ? playList.creator.avatarUrl : ''}></img>
              <p>{playList.creator ? playList.creator.nickname : ''}</p>
            </div>
          </div>
        </div>
        {/*  */}


        <div className="song">
          <h3>歌曲列表</h3>
          <ul className="songList">
            {songList.map((item, idx) => {
              return (
                <li key={item.id} onClick={this.toPlay.bind(this, item.id)}>
                  <h4>
                    {item.name}
                    <span style={{ color: "#ccc" }}>
                      {" "}
                      {item.alia.length > 0 ? `(${item.alia[0]})` : ""}
                    </span>
                  </h4>
                  <p>
                    {item.ar.map((ar) => {
                      return <span key={ar.id}>{ar.name}</span>;
                    })}
                    -<span>{item.name}</span>
                  </p>
                  <span className="player"></span>
                  <i className="numGray">{idx + 1} </i>
                </li>
              );
            })}
          </ul>
          <div className="store">
            <div>收藏歌单</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Index