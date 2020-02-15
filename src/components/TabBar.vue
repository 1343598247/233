<template>
 
    <ul class="tab">
      <router-link to="/films" tag="li" activeClass="myactive"><span class="icon iconfont icon-home"></span><p>首页</p></router-link>
      <router-link to="/course" tag="li" activeClass="myactive"><span class="icon iconfont icon-course"></span><p>课程</p></router-link>
      <router-link to="/problem" tag="li" activeClass="myactive"><span class="icon iconfont icon-problem"></span><p>题库</p></router-link>
      <router-link to="/person" tag="li" activeClass="myactive"><span class="icon iconfont icon-person"></span><p>个人中心</p></router-link>
    </ul>
 
</template>
<script>
export default {

}
</script>
<style lang='less'>
.tab{
  position: fixed;
  bottom: 0;
  width: 100%;
  // line-height: 1rem;
 
  box-shadow: 0px -1px 5px #d3cfcf;
  display: flex;
  li{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
     padding: 0.2rem 0;
         color: #333;
    span{
      
      width: auto;
      height: 0.4rem;
      line-height: 0.4rem;
      font-size: 0.4rem;
      margin-bottom:0.1rem ;
  
    }
    p{
      line-height: 0.28rem;
    }
  }
  li.myactive{
    color: #f00;
  }
}
</style>