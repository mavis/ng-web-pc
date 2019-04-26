<template>
  <div v-title="''">
      <layout>
        <div slot="content"  class="main-content">
            eee
        </div>
      </layout>
  </div> 
</template>
<script>
import { mapState, mapActions,mapMutations } from 'vuex';
import Layout from '../../components/layout/layout'
export default {  
  components: {
    Layout
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

