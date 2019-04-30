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
                        <img>
                    </div>
                    <div class="top-title">
                        科技 创新
                    </div>
                    <div class="top-search flex-item">
                        <a-input-search
                            placeholder="input search text"
                            style="width:100%"
                            />
                    </div>
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

