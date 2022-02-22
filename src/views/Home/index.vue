<template>
  <div>
    <!-- 推荐歌单 -->
    <div>
      <p class="title">推荐歌单</p>
      <van-row type="flex" justify="space-between" style="overflow: hidden">
        <van-col span="8" v-for="obj in reList" :key="obj.id">
          <van-image width="100" height="100" :src="obj.picUrl" fit="cover" />
          <p class="song_name">{{ obj.name }}</p>
        </van-col>
      </van-row>
    </div>

    <!-- 音乐列表 -->
    <div>
      <p class="title">最新音乐</p>
      <van-cell-group>
        <SongItem
          v-for="obj in songList"
          :key="obj.id"
          :title="obj.name"
          :label="obj.song.artists[0].name + '-' + obj.song.album.name"
          :id="obj.id"
        >
        </SongItem>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
//
import SongItem from "@/components/SongItem";
import { recommendSongListAPI, newSongListAPI } from "@/api";
export default {
  components: {
    SongItem,
  },
  //async用于修饰函数,await只能出现在async里面
  async created() {
    let res = await recommendSongListAPI({ limit: 6 });
    // console.log(res);
    this.reList = res.data.result;
    // console.log(this.reList);
    // 最新音乐
    let res1 = await newSongListAPI({ limit: 10 });
    console.log(res1);
    this.songList = res1.data.result;
  },
  data() {
    return {
      // 推荐歌单
      reList: [],
      // 推荐音乐
      songList: [],
    };
  },
};
</script>

<style scoped>
/* 标题 */
.title {
  padding: 0.266667rem 0.24rem;
  margin: 0 0 0.24rem 0;
  background-color: #eee;
  color: #333;
  font-size: 15px;
}
/* 推荐歌单 - 歌名 */
.song_name {
  font-size: 0.346667rem;
  padding: 0 0.08rem;
  margin-bottom: 0.266667rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 2; /** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
}
.play-icon {
  font-size: 16px;
  line-height: inherit;
}
</style>