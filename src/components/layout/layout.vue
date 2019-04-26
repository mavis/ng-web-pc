<template>
  <div>
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
         
      }
  },   
  methods:{
     
  },
  created(){

  }
}
</script>
<style lang="less">
@import url(./layout.less);
</style>

