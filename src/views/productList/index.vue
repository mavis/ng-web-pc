<template>
  <div v-title="'现货商城'">
      <layout>
        <div slot="content"  class="main-content clearfix">
            <div class="main-content-inner">
                <div class="selector-title">
                    现货商城
                </div>
                <div class="selector" v-if="categoryList && categoryList.length>0">
                    <div class="selector-line lv1">
                        <div class="selector-line-name fl">类别：</div>
                        <div class="fl " >
                            <div class="selector-line-item" v-for="item in categoryList" :class="{'current':currentLv1Cate==item.id}"
                            :key="item.id" @click='changeCurrentLv1Cate(item)'>
                            {{item.name}}
                            </div>
                        </div>
                        <div class="fr more">
                            <a-button>多选</a-button>
                            <span>更多<a-icon type="right" /></span>
                        </div>
                    </div>
                    <div class="selector-line lv2">
                        <div class="selector-line-name fl">品种：</div>
                        <div class="fl " >
                            <div class="selector-line-item" v-for="item in lv2List" :class="{'current':currentLv2Cate==item.id}"
                            :key="item.id" @click='changeCurrentLv2Cate(item)'>
                            {{item.name}}
                            </div>
                        </div>
                        <div class="fr more">
                            <a-button>多选</a-button>
                            <span>更多<a-icon type="right" /></span>
                        </div>
                    </div>
                    <div class="selector-line lv3">
                        <div class="selector-line-name fl">类别：</div>
                        <div class="fl " >
                            <div class="selector-line-item" v-for="item in lv3List" :class="{'current':currentLv3Cate==item.id}"
                            :key="item.id" @click='changeCurrentLv3Cate(item)'>
                            {{item.name}}
                            </div>
                        </div>
                        <div class="fr more">
                            <a-button>多选</a-button>
                            <span>更多<a-icon type="right" /></span>
                        </div>
                    </div>
                </div>
                <div class="pro-list">
                    <a-table :dataSource="productList" :rowKey="record => record.id">
                        <a-table-column title="品种" dataIndex="name" >
                            <template slot-scope="text,record">
                                <div>
                                    <span class="pro-status">{{record.status}}</span>
                                    <span class="pro-name">{{record.name}}</span>
                                </div>
                                <div class="pro-salesCompany">
                                    {{record.salesCompany}}
                                </div>
                            </template>
                        </a-table-column>
                        <a-table-column title="图片" dataIndex="img">
                            <template slot-scope="text,record">
                                <div>
                                    <img :src="text">
                                </div>
                            </template>
                        </a-table-column>
                        <a-table-column title="价格">
                            <template slot-scope="record">
                                <div>
                                    <span class="pro-price">{{record.minPrice}}-{{record.maxPrice}}</span>
                                    <span>元/吨</span>
                                </div>
                                <div class="pro-priceType">{{record.priceType}}</div>
                            </template>
                        </a-table-column>
                        <a-table-column title="产地" dataIndex="producingArea">
                        </a-table-column>
                        <a-table-column title="库存地">
                            <template slot-scope="record">
                                <div>{{record.stockProvince}}</div>
                                <div>{{record.stockCity}}</div>
                            </template>
                        </a-table-column>
                        <a-table-column title="交收地">
                            <template slot-scope="record">
                                <div>{{record.transactionProvince}}</div>
                                <div>{{record.transactionCity}}</div>
                            </template>
                        </a-table-column>
                        <a-table-column title="挂单总量">
                            <template slot-scope="record">
                                <span class="pro-onsaleNum">{{record.onsaleNum}}</span>吨
                            </template>
                        </a-table-column>
                        <a-table-column title="发布时间" dataIndex="pubTime">
                            
                        </a-table-column>
                        <a-table-column title="">
                            <template slot-scope="record">
                                <a-button type="primary">购买</a-button>
                            </template>
                        </a-table-column>                             
                    </a-table>
                </div>
            </div>
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
  computed: {
    ...mapState('procategory',[
       'categoryList','productList'
    ]),
  },   
  data(){
      return{
          lv2List:[],
          lv3List:[],
          currentLv1Cate:'',
          currentLv2Cate:'',
          currentLv3Cate:'',
        //   {
        //     "img":"/static/u832.png",
        //     "id":"001",
        //     "name":"大豆",
        //     "grade":"二等品",
        //     "status":"预售",
        //     "salesCompany":"吉林*****公司",
        //     "minPrice":"2000",
        //     "maxPrice":"3000",
        //     "priceType":"库存价",
        //     "producingArea":"吉林省",
        //     "stockProvince":"辽宁省",
        //     "stockCity":"锦州市",
        //     "transactionProvince":"辽宁省",
        //     "transactionCity":"锦州市",
        //     "onsaleNum":"500",
        //     "pubTime":"2019-04-0910:15:57"
        // },
        //   productListColumns:[
        //     {
        //       dataIndex: 'producingArea',
        //       key: 'producingArea',
        //       title:"产地"
        //     }, 
        //     {
        //       title: '品种',
        //       dataIndex: 'productVariety',
        //       key: 'productVariety',
        //     },
        //     {
        //       title: '商品名称',
        //       dataIndex: 'productName',
        //       key: 'productName',
        //     },
        //     {
        //       title: '种植面积',
        //       dataIndex: 'growingAreas',
        //       key: 'growingAreas',
        //     },
        //     {
        //       title: '预估产量',
        //       dataIndex: 'predictYield',
        //       key: 'predictYield',
        //     },
        //     {
        //       title: '实际产量',
        //       dataIndex: 'yield',
        //       key: 'yield',
        //     },
        //     {
        //       title: '剩余库存量',
        //       dataIndex: 'storage',
        //       key: 'storage',
        //     }, 
        //     {
        //       title: '最新成交价',
        //       key: 'latestTransactionPrice',
        //       dataIndex: 'latestTransactionPrice'
        //     }
        //   ] ,
      }
  },  
  methods:{
    ...mapActions('procategory',[
      'getCategory','getProductList'
    ]),
    changeCurrentLv1Cate(cate){
        this.currentLv1Cate = cate.id;
        this.lv2List =  cate.children;
        this.changeCurrentLv2Cate(cate.children[0]);
    },
    changeCurrentLv2Cate(cate){       
        this.currentLv2Cate = cate.id;
        this.lv3List =  cate.children;
        this.changeCurrentLv3Cate(cate.children[0]);
    },
    changeCurrentLv3Cate(cate){        
        this.currentLv3Cate = cate.id;
    },
    search(){
        this.getProductList(this.currentLv1Cate,this.currentLv2Cate,this.currentLv3Cate);
    }
  },
  watch:{
      categoryList(){
          this.changeCurrentLv1Cate(this.categoryList[0]);
          this.search();
      }
  },
  created(){
      if(!this.categoryList || this.categoryList.length<1){
        this.getCategory();
      }
  },

}
</script>
<style lang="less" scoped>
@import url(./index.less);   
</style>

