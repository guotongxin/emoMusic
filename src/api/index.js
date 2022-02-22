import request from '@/utils/request.js'
// 推荐歌单
export const recommendSongListAPI = ({ limit }) =>
  request({
    url: '/personalized',
    params: {
      limit
    }
  })
// 最新音乐
export const newSongListAPI = ({ limit }) =>
  request({
    url: '/personalized/newsong',
    params: {
      limit
    }
  })
// 热门搜索
export const hotSearchAPI = () =>
  request({
    url: '/search/hot',
  })
// 最佳匹配 
export const hotSearchResultAPI = ({ keywords, offset }) =>
  request({
    url: '/cloudsearch',
    params: {
      keywords,
      // 分页偏移量
      offset
    }
  })
// 播放音乐的接口
export const getSongByIdAPI = (id) => request({
  url: `/song/detail?ids=${id}`,
  method: "GET"
})
// 播放页 - 获取歌词
export const getLyricByIdAPI = (id) => request({
  url: `/lyric?id=${id}`,
  method: "GET"
})

