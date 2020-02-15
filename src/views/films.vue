<template>
  <div>
    <Head></Head>
    <Swiper>
      <div class="swiper-slide" v-for="item in DataImg" :key="item.id"><img :src="item.src" alt=""></div>
    </Swiper>
    <div class="nav clearfix">
      <router-link to="/films/nowplaying" tag="li" activeClass="myactive">
        <p>正在热映</p>
      </router-link>
      <router-link to="/films/comingsoon" tag="li" activeClass="myactive">
        <p>即将上映</p>
      </router-link>
      <div class="tab-ink-bar-wrapper" style="transform: translate3d(0%, 0px, 0px); width: 50%;"><span class="tab-ink-bar" style="width: 56px;"></span></div>
    </div>
    <router-view />
  </div>
</template>
<script>
import Head from '@/components/Head'
import Swiper from '@/components/Swiper'
import axios from 'axios'
export default {
  data () {
    return {
      DataImg: [
        {
          id:'0',
          src: 'http://wximg.233.com/mobilenews/image/2020/01/07/1614323781.png'
        },
        {
            id:'1',
           src: 'http://wximg.233.com/mobilenews/image/2019/12/06/1452391802.png'
        } 
      ]
    }
  },
  components: {
    Head, Swiper,
  },
  mounted () {
    // axios({
    //   url: "https://m.maizuo.com/gateway?type=2&cityId=110100&k=5553387",
    //   headers: {
    //     'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
    //     "X-Host": 'mall.cfg.common-banner'
    //   }
    // }).then(res => {
    //   console.log(res.data)
    // })
  }
}
</script>
<style lang="less">
    img{
        width: 100%;
    }
.nav {
    position: relative;
  li {
    width: 50%;
    float: left;
   list-style: none;
   height: 0.6rem;
   line-height: 0.6rem;
  }
  .myactive{
    color: #ff5f16;
  }
//   .tab-ink-bar-wrapper {
//     position: absolute;
//     margin: auto;
//     top: 30px;
//     left: 0;
//     -webkit-transform: translateZ(0);
//     transform: translateZ(0);
//     -webkit-transition: -webkit-transform .2s cubic-bezier(.35,0,.25,1);
//     transition: -webkit-transform .2s cubic-bezier(.35,0,.25,1);
//     -o-transition: transform .2s cubic-bezier(.35,0,.25,1);
//     transition: transform .2s cubic-bezier(.35,0,.25,1);
//     transition: transform .2s cubic-bezier(.35,0,.25,1),-webkit-transform .2s cubic-bezier(.35,0,.25,1);
// }
//  .tab-ink-bar {
//     border-bottom: 2px solid #ff5f16;
//     border-radius: 20px;
//     display: block;
//     margin: auto;
// }
}
</style>