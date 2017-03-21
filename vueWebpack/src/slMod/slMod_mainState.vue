<template>
  <div class="mainStateContainer">
    <div v-for="component in currentDataViews" >
      <component :is="component.c" :echarts="echarts"></component>
    </div>
  </div>
</template>
<script>
import thsw from './mainStatus_thsw.vue'
import hhhl from './mainStatus_hhhl.vue'
import ygshd from './mainStatus_ygshd.vue'
import ycj from './mainStatus_ycj.vue'
import yhzw from './mainStatus_yhzw.vue'
import qsyh from './mainStatus_qsyh.vue'

export default {
  name: 'slmodmainstate',
  props: ['echarts','addComponents'],
  components: {
    // <my-component> 将只在父模板可用
    'thsw':thsw,
    'hhhl': hhhl,
    'ygshd': ygshd,
    'ycj': ycj,
    'yhzw': yhzw,
    'qsyh': qsyh
  },
  data:function(){
    let currentDataViews = [];
    currentDataViews = Array.from(new Set(this.addCompontents));
    return{
        'currentDataViews':currentDataViews
    }
  },
  mounted:function(){

  },
  methods:{
    changeDataView:function(newViews){
        let currentDataViews = new Set(newViews);
        this.currentDataViews = Array.from(currentDataViews);
    }
  }
}

</script>

<style>
  .mainStateContainer{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: stretch;
  }
  .contentComponent{

  }
</style>
