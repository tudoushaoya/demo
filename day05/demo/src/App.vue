<template>
  <div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="lazy" v-show="!loaded"></div>
    <img
      :src="imageSrc"
      alt="Lazy Loaded Image"
      v-if="loaded"
      @load="onImageLoad"
    />
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loaded: false,
      imageSrc: require('@/assets/logo.png'),
    }
  },
  mounted() {
    this.addScrollListener()
  },
  methods: {
    addScrollListener() {
      window.addEventListener('scroll', this.lazyLoadImage)
    },
    lazyLoadImage() {
      const rect = this.$el.getBoundingClientRect()
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight

      if (rect.top <= windowHeight) {
        this.loaded = true
        window.removeEventListener('scroll', this.lazyLoadImage)
      }
    },
    onImageLoad() {
      // 图片加载完成的回调函数，可在这里移除加载动画等
    },
  },
  destroyed() {
    window.removeEventListener('scroll', this.lazyLoadImage)
  },
}
</script>

<style>
/* 根据实际需要设置图片的宽度和高度 */
img {
  width: auto;
  height: auto;
}

/* 添加 lazy 类的样式，例如显示占位符图片 */
.lazy {
  background-color: #f5f5f5;
  width: 100%;
  height: auto;
  padding-top: 100%; /* 控制占位符的高度，可以根据需要进行调整 */
  position: relative;
}

.lazy::after {
  content: '';
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px; /* 加载动画的宽度 */
  height: 40px; /* 加载动画的高度 */
  background-color: #ccc; /* 加载动画的颜色 */
  border-radius: 50%;
  animation: spin 1s infinite linear; /* 加载动画的动画效果 */
}

@keyframes spin {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.box {
  height: 400px;
}
</style>
