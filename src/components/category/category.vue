<template>
  <div class="category-list" @mouseenter="categoryListHover" @mouseleave="categoryListBlur">
    <ul>
      <li v-for="lv1Item in categoryList" :class="{'active':currentList == lv1Item.id }"
      :key="lv1Item.id" class="category-item" @mouseenter="lv1ItemHover(lv1Item)" @mouseleave="lv1ItemBlur(lv1Item)">
        <a>
          <span class="lv1Item">{{lv1Item.name}}</span>
          <span class="lv2Item" v-for="(lv2Item,index) in lv1Item.children" :key="lv2Item.id" v-if="index<2">
            {{lv2Item.name}}
          </span>
          <div class="arrow"><a-icon type="right" /></div>
        </a>
      </li>
    </ul>
    <div class="lv2-list" v-if="showLv2List">
      <ul>
        <li v-for="item in lv2List"  :key="item.id">
          <span class="lv2Item">{{item.name}}</span>
          <div class="lv3Item-list">
            <span class="lv3Item" v-for="lv3Item in item.children" :key="lv3Item.id">
              {{lv3Item.name}}
            </span>
          </div>

        </li>
      </ul>
    </div>
  </div> 
</template>
<script>
import { mapState, mapActions,mapMutations } from 'vuex';
export default {  
  data(){
      return{
         showLv2List:false,
         currentList:'',
         lv2List:[]
      }
  },  
  computed: {
    ...mapState('procategory',[
       'categoryList'
    ]),
  },  
  methods:{
    ...mapActions('procategory',[
      'getCategory'
    ]),
    categoryListHover:function(){
      this.showLv2List = true;
    },
    categoryListBlur:function(){
      this.showLv2List = false;
      this.lv2List = [];
      this.currentList = '';
    },
    lv1ItemHover:function(item){       
        this.lv2List = item.children;
        this.currentList = item.id
    },
    lv1ItemBlur(){
        
    }
  },
  created(){
    this.getCategory();
  },

}
</script>
<style lang="less" scoped>
@import url(./category.less);
</style>

