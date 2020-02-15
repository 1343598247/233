<template>
  <div id="app">
      <tabbar v-if='isShow'></tabbar>
    <router-view/>
  </div>
</template>

<script>
import tabbar from '@/components/TabBar'
import bus from '@/bus'
export default {
  data () {
    return {
      isShow:true,
    }
  },
  components: {
     tabbar,
  },
  mounted(){
    bus.$on("isShow",(data)=>{
     
     this.isShow=data;
      console.log(data)
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  width:100%;
  height: 100vh;
}
</style>
