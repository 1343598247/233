<template>
  <div>{{info}}</div>
</template>
<script>
import axios from 'axios'
import bus from '@/bus'
export default {
  data () {
    return {
      info: null,
    }
  },
  beforeMount () {
    bus.$emit('isShow', false)
  },
  mounted () {
    console.log(this.$route, this.$route.params.myid)
    console.log('https://m.maizuo.com/gateway?filmId=' + this.$route.params.myid + '&k=6792955')
    axios({
      url: `https://m.maizuo.com/gateway?filmId=` + this.$route.params.myid + `&k=6792955`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15803835704114578669587","bc":"341200"}',
        'X-Host': 'mall.film-ticket.film.info',
        'X-Requested-With': 'XMLHttpRequest',
        'X-Token': 'undefined'
      }
    }).then(res => {

      this.info = res.data.data;
      console.log(res.data.data)
    })
  },

  beforeDestroy () {
    bus.$emit('isShow', true)
  },
}
</script>
<style lang="less">
</style>