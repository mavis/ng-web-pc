<template>
    <div class="slider-box">
        <div class="arrow arrow-left" @click="toPre">
            <a-icon type="left" />
        </div>
        <div class="arrow arrow-right"  @click="toNext">
            <a-icon type="right" />
        </div>
        <slider ref="slider" :options="options" class="slider">           
            <slideritem class="slider-item" v-for="item in list" :key="item.date">
                <div class="card" >
                    <div class="title">{{item.dateString}}</div>
                    <div class="flex" style="padding-top:10px;">
                        <div class="flex-item pro-item" v-for="pro in item.list" :key="pro.proName"
                        @click="proClick(pro,item)">
                            <div class="pro-img"><img :src='pro.img'></div>
                            <div class="pro-name"><span>{{pro.proName}}</span></div>
                            <div class="pro-info">
                                <div class="caret"><a-icon type="caret-up" theme="filled" /></div>
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
                pagination: false
            } 
        }
    },   
    methods:{
        proClick:function(pro,item){
            this.$emit('pro-area',pro.proId,item.date);
        },
        toNext:function(){
            this.$refs.slider.$emit('slideNext')
        },
        toPre:function(){
            this.$refs.slider.$emit('slidePre')
        }
    },
    created(){

    },

}
</script>
<style lang="less" scoped>
@import url(../../assets/css/variable.less);
    .slider-box{
        width:100%;
        position: relative;
        .arrow{
            position: absolute;
            top: 100px;
            font-size: 18px;
            color: @f-grey;
            cursor: pointer;
            cursor: pointer;
            &.arrow-left{
                left: 0;
            }
            &.arrow-right{
                right: 0;
            }
        }
        .slider{
            width: 97%;
            margin: 0 1.5%;
            
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
                        background-color: @col-main ;
                        color: #fff;
                    } 
                    .pro-item{
                        cursor: pointer;
                        font-size: 12px; 
                        .pro-name{
                            >span{
                                display: inline-block;
                                color: #fff;
                                width: 60px;
                                text-align: center;
                                padding:2px 0;
                                background-color: @col-main;
                                border-radius:13px;
                            }
                        }                       
                    }
                    .pro-item:not(:first-child){
                        margin:30px 10px 0 0;
                        .pro-info{
                             color: @col-main;
                         }
                    }
                    .pro-item:first-child{
                         margin: 0 10px;
                         .pro-info{
                             color: @col-orange;
                         }
                    }
                    .pro-info{
                        text-align: left;
                        padding:10px 0 10px 10px;
                        background-color: #f2f2f2;
                        border-radius: 3px;                       
                        margin-top:15px;
                        position: relative;
                        .caret{
                            position: absolute;
                            top: -10px;
                            left: 45%;
                            color: #f2f2f2;
                        }
                    }
                } 
            } 
        }

    }
</style>

