<template>
  <div>
    <van-search
      v-model="value"
      shape="round"
      placeholder="请输入搜索关键词"
      @input="inputSearchFn(value)"
    />
    <!-- 热门搜索 -->
    <div class="search_wrap" v-if="hotSearchResultList.length === 0">
      <p class="hot_title">热门搜索</p>
      <div class="hot_name_wrap">
        <span
          class="hot_item"
          v-for="(obj, index) in hotSearchList"
          :key="index"
          @click="SearchFn(obj.first)"
          >{{ obj.first }}</span
        >
      </div>
    </div>
    <!-- 最佳匹配 -->
    <div class="search_wrap" v-else>
      <p class="hot_title">最佳匹配</p>
      <van-cell-group>
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <SongItem
            v-for="obj in hotSearchResultList"
            :key="obj.id"
            :title="obj.name"
            :label="obj.ar[0].name + '-' + obj.al.name"
            :id="obj.id"
          ></SongItem>
        </van-list>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import SongItem from '@/components/SongItem';
import { hotSearchAPI, hotSearchResultAPI } from '@/api';
export default {
  components: {
    SongItem,
  },
  data() {
    return {
      value: '',
      hotSearchList: [], //热搜歌曲列表
      hotSearchResultList: [], //搜索返回的结果
      //加载更多
      loading: false,
      finished: false,
      //偏移量
      offset: 0,
    };
  },
  async created() {
    const res = await hotSearchAPI();
    console.log('热搜列表');
    console.log('热搜列表', res);
    this.hotSearchList = res.data.result.hots;
  },
  methods: {
    //点击热搜搜索出歌曲
    async SearchFn(word) {
      this.offset = 0;
      this.value = word;
      const res = await hotSearchResultAPI({ keywords: word });
      // console.log(res);
      this.hotSearchResultList = res.data.result.songs;
    },
    //输入关键词搜素歌曲
    async inputSearchFn(keywords) {
      this.offset = 0;
      // console.log(keywords);
      const res = await hotSearchResultAPI({ keywords });
      if (res.data.code == 400) {
        this.hotSearchResultList = [];
        return;
      }
      // console.log(res);
      this.hotSearchResultList = res.data.result.songs;
    },
    //加载更多
    async onLoad() {
      //触底发起异步操作,请求数据,请求回来的数据追加到原数据的后面
      console.log(this.offset);
      this.offset += 30;
      console.log(this.offset);
      const res = await hotSearchResultAPI({
        keywords: this.value,
        offset: this.offset,
      });
      console.log(res);
      if (
        res.data.result.songCount === 0 ||
        this.hotSearchResultList.length === res.data.result.songCount
      ) {
        this.finished = true;
        return;
      }
      this.hotSearchResultList = [
        ...this.hotSearchResultList,
        ...res.data.result.songs,
      ];
      this.loading = false;
    },
  },
};
</script>

<style scoped>
/* 搜索容器的样式 */
.search_wrap {
  padding: 0.266667rem;
}

/*热门搜索文字标题样式 */
.hot_title {
  font-size: 0.32rem;
  color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}
</style>
