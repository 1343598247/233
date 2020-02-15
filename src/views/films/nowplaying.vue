<template>
  <div v-if="info" class="film-list-content">
    <div class="nowPlayingList-wrap">
      <ul>
        <li class="nowPlayingFilm-item" v-for="item in info.films" :key="item.filmId" @click='showdetail(item.filmId)'>
          <a class="nowPlayingFilm-wrap">
            <div
              class="lazy-img nowPlayingFilm-img"
              style="width: 66px; height: 94px; background: rgb(249, 249, 249); float: left;"
            >
              <img :src="item.poster" alt />
            </div>
            <div class="nowPlayingFilm-info" style="float: left;">
              <div class="nowPlayingFilm-name info-col">
                <span class="name">{{item.name}}</span>
                <span class="item">{{item.item.name}}</span>
              </div>
              <div class="nowPlayingFilm-grade info-col" style="visibility: visible;">
                <span class="label">观众评分</span>
                <span class="grade">{{item.grade}}</span>
              </div>
              <div class="nowPlayingFilm-actors info-col">
                <span class="label">主演：柯汶利 肖央 谭卓 陈冲 姜皓文</span>
              </div>
              <div class="nowPlayingFilm-detail info-col">
                <span class="label">{{item.nation}} | {{item.runtime}}</span>
              </div>
            </div>
            <div class="nowPlayingFilm-buy" style="float: right;">购票</div>
          </a>
        </li>
      </ul>
    </div>
    <!-- {{info}} -->
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data () {
    return {
      info: null,
    }
  },
  mounted () {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=341200&pageNum=1&pageSize=10&type=1&k=2335895',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15803835704114578669587","bc":"341200"}',
        'X-Host': 'mall.film-ticket.film.list',
        'X-Requested-With': 'XMLHttpRequest',
        'X-Token': 'undefined'
      }
    }).then(res => {

      this.info = res.data.data;
      console.log(this.info.films)
    })
  },
  methods:{
    showdetail(filmId){
          this.$router.push(`/films/${filmId}`)
    }
  }
}

</script>
<style lang="less" >
.nowPlayingList-wrap ul {
  list-style: none;
  padding: 0;
  margin-left: 15px;
  margin-bottom: 0;
  margin-top: 0;
  text-align: left;
}
.nowPlayingList-wrap li {
  padding: 15px 15px 15px 0;
  height: 94px;
  position: relative;
  a{
    text-decoration: none;
  }
.grade {
    color: #ffb232;
    font-size: 14px;
}
 .nowPlayingFilm-info .nowPlayingFilm-name .name {
    max-width: calc(100% - 25px);
    color: #191a1b;
    font-size: 16px;
    height: 22px;
    line-height: 22px;
    margin-right: 5px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.nowPlayingFilm-info .nowPlayingFilm-name .item {
    font-size: 9px;
    color: #fff;
    background-color: #d2d6dc;
    height: 14px;
    line-height: 14px;
    padding: 0 2px;
    border-radius: 2px;
    display: inline-block;
    vertical-align: middle;
}
  .nowPlayingFilm-wrap {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    .lazy-img {
      position: relative;
    }
  
  }
    .nowPlayingFilm-info {
      width: calc(100% - 116px);
     padding: 0 10px; 
      .info-col {
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
        .label{
          
    color: #797d82;
        }
      }
    }
   .nowPlayingFilm-buy {
    line-height: 25px;
    height: 25px;
    width: 50px;
    color: #ff5f16;
    font-size: 13px;
    text-align: center;
    border-radius: 2px;
    position: relative;
}
 .nowPlayingFilm-buy:after {
    content: " ";
    -webkit-transform: scale(.5);
    -ms-transform: scale(.5);
    transform: scale(.5);
    position: absolute;
    border: 1px solid #ff5f16;
    top: -50%;
    right: -50%;
    bottom: -50%;
    left: -50%;
    border-radius: 4px;
}
}
</style>