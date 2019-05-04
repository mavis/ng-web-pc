<template>
    <div class="slider-box">
        <slider ref="slider" :options="options">
            <slideritem class="slider-item">
                <div class="card" v-for="item in list" :key="item.date">
                    <div class="title">{{item.dateString}}</div>
                    <div class="flex">
                        <div class="flex-item pro-item">
                            <div class="pro-img"><img :src="item.img"></div>
                            <div class="pro-info">
                                <div>
                                    <span>价格：</span>
                                    <span>{{item.price}}万元</span>
                                </div>
                                <div>
                                    <span>库存：</span>
                                    <span>{{item.stock}万吨}</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex-item  pro-item">
                            
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
        list:[]
    },
    data(){
        return{
            
        }
    },   
    methods:{

    },
    created(){

    },

}
</script>
<style lang="less" scoped>
    .slider-box{
        width:1120px;
        margin-left: 160px;
        position: absolute;
        top:950px;
        height:288px;
        .slider-img{
            width: 23%;
            
            img{
                width: 95%;
                margin-right: 5%;
            }
        } 
    }
</style>

