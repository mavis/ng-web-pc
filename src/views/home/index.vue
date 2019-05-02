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
                  <a-carousel effect="fade" :dots='dots' :autoplay="autoplay" arrows>
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
                    <div v-for="item in topBanners" :key="item.img">
                      <img :src="item.img">
                    </div>
                  </a-carousel>
              </div>
              <div class="content-1-r fl">
                <div class="account-logo">
                  <img src="../../assets/img/u192.png">
                </div>
                <div class="account-welcome ">
                    Hi，欢迎来到云耕供销网
                </div>
                <div  class="account-btn">
                  <a-button type="primary" class="btn-login">登录</a-button>
                  <a-button class="btn-register">免费注册</a-button>
                </div>
                <div>
                    <a-tabs defaultActiveKey="1">
                      <a-tab-pane tab="消息通知" key="1">
                        Content of Tab Pane 1
                      </a-tab-pane>
                      <a-tab-pane tab="成交动态" key="2" forceRender>
                        Content of Tab Pane 2
                      </a-tab-pane>
                    </a-tabs>
                </div>
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
         autoplay:true,
         dots:false
      }
  },  
  computed: {
    ...mapState('homepage',[
       'topBanners'
    ]),
  },  
  methods:{
    ...mapActions('homepage',[
      'getTopBanners'
    ]),
  },
  created(){
    this.getTopBanners();
  }
}
</script>
<style lang="less">
@import url(./index.less);
</style>

