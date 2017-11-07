
<template>
    <div>
        <header class="index_head">
            <div class="address">
                <select class="address_sel" name="" id="">
                    <option value="">朝阳区2</option>
                    <option value="">房山区</option>
                </select>
                <input type="text" placeholder="请输入商家 / 商品名称" />
                <i class="icon icon_scan"></i>
            </div>
        </header>
        <div class="banner_index"><img src="../../static/img/banner_index.jpg" alt="中秋钜惠" width="100%"/></div>
        <ul class="nav_menu">
            <li>
                <a href="" @click="router('agent')">
                    <i class="icon icon_line"></i>
                    <span>线上商城</span>
                </a>
            </li>
            <li>
                <a href="" @click="router('agent2')">
                    <i class="icon icon_nearby"></i>
                    <span>附近商家</span>
                </a>
            </li>
            <li>
                <a href="">
                    <i class="icon icon_safe"></i>
                    <span>保险专区</span>
                </a>

            </li>
            <li>
                <a href="">
                    <i class="icon icon_convert"></i>
                    <span>兑换专区</span>
                </a>
            </li>
            <li>
                <a href="">
                    <i class="icon icon_support"></i>
                    <span>商品扶持</span>
                </a>
            </li>
            <li>
                <a href="">
                    <i class="icon icon_gift"></i>
                    <span>新人有礼</span>
                </a>
            </li>
            <li>
                <a href="">
                    <i class="icon icon_feature"></i>
                    <span>特色产品</span>
                </a>
            </li>
            <li>
                <a href="">
                    <i class="icon icon_share"></i>
                    <span>分享好友</span>
                </a>
            </li>
        </ul>
        <div class="news">
            <p><span>今日<i>快讯 </i>:</span> 关于全国各地服务中心 积分兑换汽车...  <span class="more"><a href="">更多</a></span></p>
        </div>
        <div class="hot_product">
            <div class="title">热销商品<i class="hot_icon"></i></div>
            <ul class="product">
                <li>
                    <div class="product_pic">
                        <img src="../../static/img/product_07.jpg" alt="" width="100%"/>
                        <p>凤禧（Phoenisess）和田玉吊坠白玉平安扣男女情侣款玉坠</p>
                    </div>
                    <p class="price">￥3999.00</p>
                    <p class="jade_ticket"><i class="icon_give"></i>玉票:20000.00</p>
                </li>
                <li>
                    <div class="product_pic">
                        <img src="../../static/img/product_07.jpg" alt="" width="100%"/>
                        <p>凤禧（Phoenisess）和田玉吊坠白玉平安扣男女情侣款玉坠</p>
                    </div>
                    <p class="price">￥3999.00</p>
                    <p class="jade_ticket"><i class="icon_give"></i>玉票:20000.00</p>
                </li>
                <li>
                    <div class="product_pic">
                        <img src="../../static/img/product_07.jpg" alt="" width="100%"/>
                        <p>凤禧（Phoenisess）和田玉吊坠白玉平安扣男女情侣款玉坠</p>
                    </div>
                    <p class="price">￥3999.00</p>
                    <p class="jade_ticket"><i class="icon_give"></i>玉票:20000.00</p>
                </li>
                <li>
                    <div class="product_pic">
                        <img src="../../static/img/product_07.jpg" alt="" width="100%"/>
                        <p>凤禧（Phoenisess）和田玉吊坠白玉平安扣男女情侣款玉坠</p>
                    </div>
                    <p class="price">￥3999.00</p>
                    <p class="jade_ticket"><i class="icon_give"></i>玉票:20000.00</p>
                </li>
            </ul>
        </div>
        <div class="nearby">
            <div class="title">附近商家<i class="icon_near"></i></div>
            <div class="h_merchant">
                <a href="">
                    <div>
                        <img class="h_merchant_product" src="../../static/img/product_07.jpg" alt="玫琳凯工作室"/>
                    </div>
                    <div class="h_merchant_text">
                        <p class="h_text_studio">玫琳凯女子形象工作室</p>
                        <p class="h_text_business">主营业务：女子形象</p>
                        <p class="h_text_adress">地址：金星路长安花园10号楼601</p>
                    </div>
                    <!--<div class="h_merchant">-->
                    <!--<img src="../../img/" alt=""/>-->
                    <!--</div>-->
                </a>
            </div>
        </div>
        <navlist></navlist>
  </div>
</template>

<script>
    //引入组件
    import navlist from '../components/Nav.vue'

    //1.如果下面不想复制css就直接这样import进来
    import '../../static/css/home.css'

    //2.如果想使用less就安装一下less-loder包然后这样引用就行
    import '../../static/css/home.less'

    export default {
        name: 'Hello',
        data () {
            return {
            msg: '郝硕'
            }
        },
        methods:{
            router:function(){
                this.$router.push({path:'/agent'})
            }
        },
        components:{
            navlist
        }
    }

</script>
