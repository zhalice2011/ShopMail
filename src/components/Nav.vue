
<template>
    <div>
        <!--底部导航栏-->
        <div class="lFooter">
            <a class="lFooter_list" @click="router('/')">
                <img class="lFooter_img" src="../../static/img/icon_home1.png">
                <p class="lFooter_p">首页</p>
            </a>
            <a class="lFooter_list" @click="router('/list')">
                <img class="lFooter_img" src="../../static/img/icon_home1.png">
                <p class="lFooter_p">分类</p>
            </a>
            <a class="lFooter_list" @click="router('/agent')">
                <img class="lFooter_img" src="../../static/img/icon_home1.png">
                <p class="lFooter_p">购物车</p>
            </a>
            <a class="lFooter_list" @click="router('/list')">
                <img class="lFooter_img" src="../../static/img/icon_home1.png">
                <p class="lFooter_p">订单</p>
            </a>
            <a class="lFooter_list" @click="router('/mine')">
                <img class="lFooter_img" src="../../static/img/icon_home1.png">
                <p class="lFooter_p">我的</p>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'navlist',
        data () {
            return {
            msg: '郝硕'
            }
        },
        methods:{
            // router:function(){
            //     this.$router.push({path:'/agent'})
            // }
        }
    }

</script>

<style scoped>
/* 底部导航 */
.lBody {
    width: 100%;
    height: 26.68rem;
  }
  .lHeater {
    width: 100%;
    height: 1.76rem;
    background-color: #ffffff;
    position: relative;
    border-bottom: 1px #cccccc solid;
  }
  .lHeater .lCart {
    width: 1.8rem;
    height: 1.76rem;
    position: absolute;
    left: 0;
    top: 0;
  }
  .lHeater .lCart img {
    width: 0.8rem;
    height: 0.8rem;
    margin: 0.4rem 0.4rem;
  }
  .lHeater .lTitle {
    font-size: 0.72rem;
    line-height: 1.76rem;
    text-align: center;
  }
  .lHeater .lSearch {
    width: 1.8rem;
    height: 1.76rem;
    position: absolute;
    right: 0;
    top: 0;
  }
  .lHeater .lSearch img {
    width: 0.8rem;
    height: 0.8rem;
    margin: 0.4rem 0.4rem;
  }
  .lLeft_lists {
    width: 3.7rem;
    height: 22.96rem;
    background-color: #d0d0d0;
    float: left;
  }
  .lLeft_lists .lLeft_list {
    width: 100%;
    height: 1.8rem;
    text-align: center;
    box-shadow: 0 3px 3px #cccccc;
  }
  .lLeft_lists .lLeft_list a {
    font-size: 0.6rem;
    line-height: 1.8rem;
  }
  .lLeft_lists .lLeft_listAc {
    background-color: #ffffff;
    color: #ff7f21;
    box-shadow: none;
  }
  .lLeft_lists .lLeft_listAc a {
    color: #ff7f21;
  }
  .lRight_lists {
    width: 10.9rem;
    float: left;
    background-color: #ffffff;
    height: 22rem;
    padding: 0.96rem 0.2rem 0;
  }
  .lRight_lists .lRight_wrap {
    width: 3.34rem;
    margin: 0 0.1rem 0.4rem;
    float: left;
  }
  .lRight_lists .lRight_wrap .lRight_img {
    width: 3.34rem;
    height: 2.6rem;
  }
  .lRight_lists .lRight_wrap .lRight_P {
    line-height: 0.8rem;
    font-size: 0.52rem;
    text-align: center;
    margin-bottom: 0.2rem;
  }
  .lFooter {
    width: 100%;
    height: 1.96rem;
    position: fixed;
    left: 0;
    bottom: 0 ;
    background-color: #ffffff;
    z-index: 399;
  }
  .lFooter .lFooter_list {
    width: 20%;
    height: 1.96rem;
    text-align: center;
    float: left;
  }
  .lFooter .lFooter_list .lFooter_img {
    width: 1rem;
    height: 0.8rem;
    text-align: center;
  }
  .lFooter .lFooter_list .lFooter_p {
    line-height: 0.6rem;
    font-size: 0.36rem;
  }
  
</style>
