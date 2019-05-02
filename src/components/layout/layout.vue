<template>
  <div  class="main">
      <a-layout>
        <a-layout-header>
            <slot name='header'>
                <div class="header-content">
                    <div class="fl">********平台</div>
                    <div class="fr">
                        <span>登录</span>
                        <span></span>
                    </div>
                </div>
            </slot>
        </a-layout-header>
        <a-layout-content>
            <div class="content-top"  id="main-top" :class="{'top-fixed':mainTopFixed}">
                <div class="content-top-inner  flex">
                    <div class="top-logo">
                        <div><img src='../../assets/img/u168.png' class="logo-img"></div>
                        <div><img src='../../assets/img/u180.png' class="logo-txt"></div>
                    </div>
                    <div class="top-title">
                        科技 · 融通 · 创新 · 求实
                    </div>
                    <div class="top-nav">
                        <span>
                            <router-link  tag="a" :to="{path:'/index'}" >首页</router-link>
                        </span>
                        <span>
                            <router-link  tag="a" :to="{path:'/index'}" >现货商城</router-link>
                        </span>
                        <span>
                            <router-link  tag="a" :to="{path:'/index'}" >预售专区</router-link>
                        </span>
                        <span>
                            <router-link  tag="a" :to="{path:'/index'}" >指数咨询</router-link>
                        </span>
                    </div>
                    <div class="top-search flex-item">
                        <div class="top-search-inner flex">
                            <div class="flex-item search-input"><a-input-search
                                placeholder="搜索"
                                style="width:100%"
                                /></div>
                            <div><a-button type="primary">我要买</a-button></div>
                            <div><a-button type="primary">我要卖</a-button></div>
                        </div>

                    </div>
                </div>
                <div class="content-top-navbar "> 
                    <span>
                        <router-link  tag="a" :to="{path:'/index'}" >首页</router-link>
                    </span>
                    <span>
                        <router-link  tag="a" :to="{path:'/index'}" >现货商城</router-link>
                    </span>
                    <span>
                        <router-link  tag="a" :to="{path:'/index'}" >预售专区</router-link>
                    </span>
                    <span>
                        <router-link  tag="a" :to="{path:'/index'}" >指数咨询</router-link>
                    </span>                    
                </div>
            </div>
            <slot name='content'> </slot>
        </a-layout-content>
        <a-layout-footer>
            <slot name='footer' class="footer-content">333 </slot>
        </a-layout-footer>
    </a-layout>
  </div> 
</template>
<script>
import { mapState, mapActions,mapMutations } from 'vuex';
export default {  

  data(){
      return{
         mainTopFixed:false
      }
  },   
  methods:{
     onscroll:function(e){
        var scrollTop = document.querySelector('#app').scrollTop;

        var offsetTop = document.querySelector('#main-top').offsetTop;
        if (scrollTop > offsetTop) {
            this.mainTopFixed = true
        } else {
            this.mainTopFixed = false
        }
     }
  },
    created(){

    },
    mounted () {
        document.querySelector('#app').addEventListener('scroll', this.onscroll)
    },
    destroyed () {
        document.querySelector('#app').removeEventListener('scroll', this.onscroll)
    }
}
</script>
<style lang="less">
@import url(./layout.less);
</style>

