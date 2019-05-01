<template>
  <div v-title="''">
      <layout>
        <div slot="content"  class="main-content">
            <div class="content-1">
              <category-module></category-module>
            </div>
            <div class="content-moudle">
              
            </div>
            <div class="content-moudle">
              
            </div>
        </div>
      </layout>
  </div> 
</template>
<script>
import { mapState, mapActions,mapMutations } from 'vuex';
import Layout from '../../components/layout/layout'
import categoryModule from '../../components/category/category'
export default {  
  components: {
    Layout,categoryModule
  },
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
@import url(./index.less);
</style>

