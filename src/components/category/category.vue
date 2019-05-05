<template>
  <div>
    <ul>
      <li v-for="lv1Item in category" :key="lv1Item.id">
        <a>
          <span>{{lv1Item.name}}</span>
          <span v-for="lv2Item in lv1Item.children" :key="lv2Item.id">
            {{lv2Item.name}}
          </span>
        </a>
      </li>
    </ul>
  </div> 
</template>
<script>
import { mapState, mapActions,mapMutations } from 'vuex';
export default {  
  data(){
      return{
         
      }
  },  
  computed: {
    ...mapState('categroy',[
       'category'
    ]),
  },  
  methods:{
    ...mapActions('categroy',[
      'getCategory'
    ]),
  },
  created(){
    // this.getCategory();
  },

}
</script>
<style lang="less">

</style>

