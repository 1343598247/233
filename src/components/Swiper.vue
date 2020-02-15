<template>
  <div class="swiper-container homeswiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {
  data () {
    return {}
  },
  mounted () {
    new Swiper('.homeswiper', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
    //   autoplay: {
    //     delay: 2000,
    //     //当用户滑动图片后继续自动轮播
    //     disableOnInteraction: false,
    //   },

    })
  }
}
</script>