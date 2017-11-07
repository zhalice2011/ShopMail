
<template>
    <div>
<div class="mmBody">
    <!-- 头部-->
    <div class="mmHeater">
        <a class="mmCart"><</a>
        <p class="mmTitle">代理中心</p>
    </div>
    <div class="uamOne">
            <p class="uamOne_grade"><img src="../../static/img/grand.png">等级：社区服务中心</p>
            <p class="uamOne_grade"><img src="../../static/img/jiang.png">业绩奖励累积：<span>¥12368</span></p>
    </div>
    <div class="uamTwo">
        <div class="uamTwo_box">
            <img class="uamTwo_boxImg" src="../../static/img/people.png">
            <p class="uamTwo_boxNum">会员总数：20000</p>
            <p class="uamTwo_boxEve">每周更新</p>
        </div>
        <div class="uamTwo_boxs">
            <img class="uamTwo_boxImg" src="../../static/img/up.png">
            <p class="uamTwo_boxNum">上周新增：20000</p>
            <p class="uamTwo_boxEve">每周更新</p>
        </div>

    </div>
    <div class="uamThree">
        <img src="../../static/img/customer.png">
        <span>社区服务中心</span>
        <span>188***6543</span>
    </div>



</div>
    </div>
  
</template>

<script>
    import Nav from '../components/Nav.vue'

    export default {
        name: 'agent',
        data () {
            return {
                //msg: '郝硕'
            }
        },
        methods:{
            
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


/* 当一个人 */
.mmBody {
  width: 100%;
  height: 26.68rem;
}
.mmHeater {
  height: 1.76rem;
  background-color: #ff6c00;
  position: relative;
}
.upHeater {
  height: 1.76rem;
  background-color: #ffffff;
  position: relative;
}
.mmCart,
.upCart {
  position: absolute;
  left: 0.4rem;
  top: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  font-family: cursive;
  font-size: 1.2rem;
  color: #ffffff;
}
.upCart {
  color: #000000;
}
.mmTitle,
.upTitle {
  text-align: center;
  font-size: 0.72rem;
  line-height: 1.76rem;
  font-weight: 600;
  color: #ffffff;
}
.upTitle {
  color: #000000;
}
.uaBox {
  width: 12rem;
  height: 3.2rem;
  background-color: #393c5b;
  border-radius: 0.6rem;
  border: 0.06rem #c9a070 solid;
  margin: 0.6rem 0 0 1.4rem;
  text-align: center;
}
.uaBox_title {
  font-size: 0.72rem;
  line-height: 1.4rem;
  font-weight: 600;
  color: #c9a070;
}
.uaBox_titP {
  font-size: 0.6rem;
  line-height: 1.4rem;
  color: #c9a070;
}
.uaTitle {
  font-size: 0.72rem;
  font-weight: 600;
  line-height: 2.4rem;
  text-align: center;
  position: relative;
}
.uaTitle:after {
  content: '';
  width: 0.6rem;
  height: 0.12rem;
  background-color: #000000;
  position: absolute;
  left: 5rem;
  top: 1.2rem;
}
.uaTitle:before {
  content: '';
  width: 0.6rem;
  height: 0.12rem;
  background-color: #000000;
  position: absolute;
  right: 5rem;
  top: 1.2rem;
}
.uaBoxLi {
  width: 5.72rem;
  height: 3.24rem;
  background-color: #393c5b;
  border-radius: 0.6rem;
  border: 0.06rem #c9a070 solid;
  margin: 0.6rem 0.4rem 0 0.4rem;
  text-align: center;
  float: left;
}
.uaBoxLi p {
  font-size: 0.6rem;
  line-height: 3.24rem;
  color: #c9a070;
}
.uaBoxLi:last-child {
  float: right;
}
.uaMore {
  text-align: center;
  font-size: 0.48rem;
  line-height: 0.8rem;
  margin-top: 10rem;
}
.uaMore span {
  padding: 0 0.2rem;
}
.uaMore i {
  color: #d2b28e;
}
.uaMore_btn {
  width: 12.8rem;
  height: 1.8rem;
  border-radius: 0.9rem;
  background-color: #393c5b;
  font-size: 0.6rem;
  color: #c9a070;
  border: none;
  margin-top: 0.4rem;
  line-height: 1.8rem;
}
.uamOne {
  width: 100%;
  background-color: #ffffff;
  padding: 0.4rem 0 0.4rem 3.2rem;
}
.uamOne_grade {
  line-height: 1.4rem;
  font-size: 0.6rem;
}
.uamOne_grade img {
  width: 0.68rem;
  height: 0.68rem;
  margin-right: 0.4rem;
}
.uamOne_grade span {
  color: #ff8440;
}
.uamTwo {
  width: 100%;
  height: 4rem;
  background-color: #ffffff;
  margin-top: 0.6rem;
}
.uamTwo_box,
.uamTwo_boxs {
  width: 7.5rem;
  height: 4rem;
  float: left;
  position: relative;
  text-align: center;
}
.uamTwo_box:after {
  content: '';
  width: 0.04rem;
  height: 3.2rem;
  position: absolute;
  top: 0.4rem;
  right: 0;
  background-color: #cccccc;
}
.uamTwo_boxImg {
  width: 1.6rem;
  height: 1.4rem;
  margin-top: 0.2rem;
}
.uamTwo_boxNum {
  font-size: 0.6rem;
  line-height: 1.4rem;
}
.uamTwo_boxEve {
  font-size: 0.36rem;
}
.uamThree {
  width: 100%;
  height: 1.4rem;
  margin-top: 0.4rem;
  background-color: #ffffff;
}
.uamThree img {
  width: 0.9rem;
  height: 0.9rem;
  margin: 0.3rem 0.4rem;
  border-radius: 50%;
  float: left;
}
.uamThree span {
  font-size: 0.56rem;
  line-height: 1.4rem;
  margin-right: 0.4rem;
}
.upList {
  width: 100%;
  height: 1.4rem;
  background-color: #ffffff;
  margin-top: 0.4rem;
}
.upList .upList_li {
  width: 25%;
  float: left;
  height: 1.4rem;
  text-align: center;
}
.upList .upList_li a {
  font-size: 0.6rem;
  padding: 0 0.2rem;
  line-height: 1rem;
  display: inline-block;
}
.upList .upList_li .upList_liAcc {
  color: #c9a070;
  border-bottom: 0.04rem #c9a070 solid;
}
.upTest {
  border-top: 0.02rem #eeeeee solid;
  width: 100%;
  padding: 0.4rem 0.8rem;
  background-color: #ffffff;
  overflow: hidden;
}
.upTest_img {
  width: 2.8rem;
  height: 2.8rem;
  float: left;
  margin: 0 0.4rem 1rem 0;
}
.upTest_con {
  float: left;
  width: 10rem;
}
.upTest_con .upTest_conP {
  font-size: 0.48rem;
  line-height: 0.8rem;
}
.upTest_con .upTest_conBtn {
  float: right;
  margin-top: 0.4rem;
}
.upTest_con .upTest_conBtn input {
  border: 0.02rem #000000 solid;
  padding: 0.2rem 0.3rem;
  border-radius: 0.5rem;
  margin: 0 0.2rem;
  float: left;
  display: inline-block;
  font-size: 0.48rem;
  line-height: 0.6rem;
  background-color: #ffffff;
}

</style>
