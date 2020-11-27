import http from './axios'
export function recMusic(params) {
    return http.get('/personalized', { params });
}


export function newSong() {
    return http.get('/personalized/newsong')
}
export function banner() {
    return http.get('/banner')
}
export function hot(params) {
    return http.get('/top/list', {
        params
    })
}

export function search(params) {//搜索
    return http.get('/search', {
        params
    })
}

export function hotsearch() {//热门搜索
    return http.get('/search/hot/detail')
}

export function playDetail(params) {//热门搜索
    return http.get('/playlist/detail',{
        params
    })
}


//获取歌曲详情
export function songDetail(params){
    return http.get('/song/detail',{
        params
    })
}

//获取歌词
export function getLyric(params){
    return http.get('/lyric',{
        params
    })
}

//获取音乐URL
export function playUrl(params){
    return http.get('/song/url',{
        params
    })
}