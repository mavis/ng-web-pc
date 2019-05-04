<template>
    <div class="slider-box">
        <slider ref="slider" :options="options">
            <slideritem class="slider-item" v-for="item in list" :key="item.date">
                <div class="card" >
                    <div class="title">{{item.dateString}}</div>
                    <div class="flex" style="padding-top:10px;">
                        <div class="flex-item pro-item" v-for="pro in item.list" :key="pro.proName">
                            <div class="pro-img"><img :src='pro.img'></div>
                            <div class="pro-name">{{pro.proName}}</div>
                            <div class="pro-info">
                                <div>
                                    <span>价格：</span>
                                    <span>{{pro.price}}万元/吨</span>
                                </div>
                                <div>
                                    <span>库存：</span>
                                    <span>{{pro.stock}}万吨</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </slideritem>
            <!-- <slideritem class="slider-item">
                <div class="card" >
                    <div class="title">五月</div>
                    <div class="flex">
                        <div class="flex-item pro-item" >
                            <div class="pro-img"><img src=/static/u524.jpg></div>
                            <div class="pro-name">花生</div>
                            <div class="pro-info">
                                <div>
                                    <span>价格：</span>
                                    <span>3万元/吨</span>
                                </div>
                                <div>
                                    <span>库存：</span>
                                    <span>3万吨</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex-item pro-item" >
                            <div class="pro-img"><img src=/static/u524.jpg></div>
                            <div class="pro-img">花生</div>
                            <div class="pro-info">
                                <div>
                                    <span>价格：</span>
                                    <span>3万元</span>
                                </div>
                                <div>
                                    <span>库存：</span>
                                    <span>3万吨</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </slideritem>             -->
        </slider> 
    </div>
</template>
<script>
import { slider, slideritem } from 'vue-concise-slider'
export default {
    components: {
        slider,
        slideritem
    },  
    props:{
        list:{}
    },
    data(){
        return{
            options: {
                currentPage: 0,
                thresholdDistance:500,
                thresholdTime:100,
                autoplay:false,
                loop:false,
                loopedSlides:5,
                slidesToScroll:1,
                timingFunction: 'ease',
                speed: 500,
                itemAnimation: true,
                infinite: 8,
                preventRebound: false
            } 
        }
    },   
    methods:{

    },
    created(){

    },

}
</script>
<style lang="less" scoped>
@import url(../../assets/css/variable.less);
    .slider-box{
        width:1100px;
        .slider-item{
            width: 25%; 
            font-size:14px;
            color:#333;          
            img{
                width: 60px;
                height:45px
            }
            .card{
                border:1px solid #eee;
                 border-radius: 10px;
                 padding-bottom:15px;
                 height:213px;
                 width: 270px;
               .title{
                   height: 25px;
                   line-height: 25px;
                    border-radius: 10px 10px 0 0;
                    background-color: @col-main 
               } 
               .pro-item:not(:first-child){
                   margin-top:30px
               }
            } 
        } 
    }
</style>

