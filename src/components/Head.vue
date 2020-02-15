<template>

<header>
    <div class="logo"><img :src="logo"></div>
</header>
</template>
<script>
export default {
    data(){
     return{
         logo:'https://img.233.com/m/css/2018m/233logo-wap.png',
     }
    },
}
</script>
<style lang='less'>
header{
    background: #eb4a2c;
    background: linear-gradient(to right,#e13b29,#f45930);
    padding: 0px 10px;
    .logo{
        width: 0.8rem;
        height: 0.8rem;
        line-height:0.8rem;
        img{
            width: 0.62rem;
             height: 0.62rem;
        }
    }
}
</style>
