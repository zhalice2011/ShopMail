
<template>
    <div>
       <!-- 头部-->
        <div class="mHeader">
            <div class="mHeader_top">
                <img class="mHeader_tImg" src="../../static/img/controller.png">

                <p class="mHeader_tP">用户中心</p>
            </div>
            <div class="mHeader_bottom">
                <img class="mHeader_bImg" src="../../static/img/customer.png">

                <div class="mHeader_bPBox">
                    <p class="mHeader_bP">18811467730</p>

                    <p class="mHeader_bP">飞翔的企鹅</p>

                    <p class="mHeader_bP">18811467730</p>
                </div>
                <span class="mHeader_bHong"></span>
            </div>
        </div>
        <div class="mBox">
            <a class="mBox_left">
                <p class="mBox_lMoney">钱包余额</p>

                <p class="mBox_lMon">1100.00</p>
                <span class="mBox_Look">查看</span>
            </a>
            <a class="mBox_right">
                <p class="mBox_lMoney">玉票余额</p>

                <p class="mBox_lMon">1100.00</p>
                <span class="mBox_Look">查看</span>
            </a>
        </div>
        <div class="mBox">
            <a class="mBox_left">
                <p class="mBox_lMoney">信誉额度</p>

                <p class="mBox_lMon">1100.00</p>
                <span class="mBox_Look">查看</span>
            </a>
            <a class="mBox_right">
                <p class="mBox_lMoney">钻石额度</p>

                <p class="mBox_lMon">1100.00</p>
                <span class="mBox_Look">查看</span>
            </a>
        </div>
        <!-- 管理-->
        <div class="mMessage">
            <div class="mMessage_title">
                <img class="mMessage_icon" src="../../static/img/icon_give.png"/>
                <span class="mMessage_zi">管理</span>
            </div>
            <div class="mMessage_box">
                <a class="mMessage_boxLi">
                    <img src="../../static/img/nav_btn_car.png">

                    <p>我的订单</p>
                </a>
                <a class="mMessage_boxLi">
                    <img src="../../static/img/nav_btn_car.png">

                    <p>我的订单</p>
                </a>
                <a class="mMessage_boxLi">
                    <img src="../../static/img/nav_btn_car.png">

                    <p>我的订单</p>
                </a>
                <a class="mMessage_boxLi">
                    <img src="../../static/img/nav_btn_car.png">

                    <p>我的订单</p>
                </a>
                <a class="mMessage_boxLi">
                    <img src="../../static/img/nav_btn_car.png">

                    <p>我的订单</p>
                </a>
                <a class="mMessage_boxLi">
                    <img src="../../static/img/nav_btn_car.png">

                    <p>我的订单</p>
                </a>
                <a class="mMessage_boxLi">
                    <img src="../../static/img/nav_btn_car.png">

                    <p>我的订单</p>
                </a>
                <a class="mMessage_boxLi">
                    <img src="../../static/img/nav_btn_car.png">

                    <p>我的订单</p>
                </a>
                <a class="mMessage_boxLi">
                    <img src="../../static/img/nav_btn_car.png">

                    <p>我的订单</p>
                </a>
                <a class="mMessage_boxLi">
                    <img src="../../static/img/nav_btn_car.png">

                    <p>我的订单</p>
                </a>
                <a class="mMessage_boxLi">
                    <img src="../../static/img/nav_btn_car.png">

                    <p>我的订单</p>
                </a>
                <a class="mMessage_boxLi">
                    <img src="../../static/img/nav_btn_car.png">

                    <p>我的订单</p>
                </a>

            </div>
        </div>
        <!-- 管理-->
        <div class="mMessage">
            <div class="mMessage_title">
                <img class="mMessage_icon" src="../../static/img/icon_give.png"/>
                <span class="mMessage_zi">资讯</span>
            </div>
            <div class="mMessage_box">
                <a class="mMessage_boxLi">
                    <img src="../../static/img/nav_btn_car.png">
                    <p>我的订单</p>
                </a>
                <a class="mMessage_boxLi">
                    <img src="../../static/img/nav_btn_car.png">
                    <p>我的订单</p>
                </a>
                <a class="mMessage_boxLi">
                    <img src="../../static/img/nav_btn_car.png">
                    <p>我的订单</p>
                </a>
                <a class="mMessage_boxLi">
                    <img src="../../static/img/nav_btn_car.png">
                    <p>我的订单</p>
                </a>

            </div>
        </div> 
    </div>
  
</template>

<script>
    import Nav from '../components/Nav.vue'

    export default {
        name: 'main',
        data () {
            return {
            }
        },
        methods:{
            
        }
    }
</script>
<style scoped>
.mBody {
  width: 100%;
  height: 26.68rem;
}
.mHeader {
  width: 100%;
  height: 4.5rem;
  background: -moz-linear-gradient(top, #fea843 0%, #ff6c00 100%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #fea843), color-stop(100%, #ff6c00));
  background: -webkit-linear-gradient(top, #fea843 0%, #ff6c00 100%);
  background: -o-linear-gradient(top, #fea843 0%, #ff6c00 100%);
  background: -ms-linear-gradient(top, #fea843 0%, #ff6c00 100%);
  background: linear-gradient(to bottom, #fea843 0%, #ff6c00 100%);
}
.mHeader_top {
  width: 100%;
  height: 1.76rem;
  position: relative;
}
.mHeader_tImg {
  width: 0.8rem;
  height: 0.8rem;
  position: absolute;
  left: 0.4rem;
  top: 0.4rem;
}
.mHeader_tP {
  text-align: center;
  font-size: 0.6rem;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.76rem;
}
.mHeader_bottom {
  margin-top: 0.2rem;
}
.mHeader_bImg {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-left: 0.8rem;
  float: left;
  margin-right: 0.6rem;
}
.mHeader_bPBox {
  float: left;
}
.mHeader_bP {
  font-size: 0.48rem;
  color: #ffffff;
}
.mHeader_bHong {
  width: 2.2rem;
  height: 2.2rem;
  float: right;
  margin-right: 1rem;
  background: url("../../static/img/image_red@1x.png");
}
.mBox {
  width: 100%;
  height: 2.56rem;
  background-color: #ffffff;
  margin-bottom: 0.4rem;
}
.mBox_left,
.mBox_right {
  display: block;
  width: 7.5rem;
  height: 2.56rem;
  float: left;
  position: relative;
  text-align: center;
}
.mBox_left:after {
  content: '';
  width: 0.04rem;
  height: 2.2rem;
  background-color: #cccccc;
  position: absolute;
  right: 0;
  top: 0.2rem;
}
.mBox_lMoney {
  font-size: 0.48rem;
  line-height: 1.6rem;
}
.mBox_lMon {
  font-size: 0.48rem;
  line-height: 0.6rem;
  color: #ff6d21;
}
.mBox_Look {
  font-size: 0.4rem;
  color: #ffffff;
  background-color: #ff6d21;
  padding: 0.06rem 0.16rem;
  position: absolute;
  right: 1rem;
  top: 1.5rem;
  border-radius: 0.1rem;
}
.mMessage {
  width: 100%;
  background-color: #ffffff;
  margin-bottom: 0.4rem;
}
.mMessage_title {
  width: 100%;
  height: 1.76rem;
}
.mMessage_icon {
  width: 0.76rem;
  height: 0.76rem;
  margin: 0.36rem 0.3rem 0 0.3rem;
  float: left;
}
.mMessage_zi {
  font-size: 0.44rem;
  line-height: 1.76rem;
}
.mMessage_box {
  overflow: hidden;
}
.mMessage_boxLi {
  width: 3.74rem;
  height: 2.6rem;
  text-align: center;
  float: left;
  display: block;
}
.mMessage_boxLi img {
  width: 1rem;
  height: 1rem;
  margin-top: 0.3rem;
}
.mMessage_boxLi p {
  font-size: 0.48rem;
}

</style>


