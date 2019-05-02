<template>
  <div v-title="''">
      <layout>
        <div slot="content"  class="main-content clearfix">
            <div class="content-1">
              <div class="content-1-l fl">
              <!-- <category-module></category-module> -->
              llllll
              </div>
              <div class="content-1-m fl">
                  <a-carousel effect="fade" dots='false' autoplay="true" arrows>
                      <div
                        slot="prevArrow" slot-scope="props"
                        class="custom-slick-arrow"
                        style="left: 10px;zIndex: 1"
                      >
                        <a-icon type="left-circle" />
                      </div>
                      <div
                        slot="nextArrow" slot-scope="props"
                        class="custom-slick-arrow"
                        style="right: 10px"
                      >
                        <a-icon type="right-circle" />
                      </div>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                  </a-carousel>
              </div>
              <div class="content-1-r fl">
                dddd
              </div>
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

