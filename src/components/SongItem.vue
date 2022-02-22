<template>
  <div>
    <van-cell center :title="title" :label="label">
      <!-- 使用 right-icon 插槽来自定义右侧图标 -->
      <template #right-icon>
        <van-icon
          name="play-circle-o"
          class="play-icon"
          size="0.6rem"
          @click="playFn"
        />
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    label: String,
    id: [String, Number],
  },
  methods: {
    playFn() {
      this.$router.push({
        path: "/play",
        query: {
          id: this.id,
        },
      });
    },
  },
};
</script>

<style>
</style>