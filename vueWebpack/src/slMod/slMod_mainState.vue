<template>
  <div class="mainStateContainer">
    <div id="contentTitleBar">
      <p style="margin:0px;font-size:10px;">时间</p>
      <div id="timer"  class='contentTitleBarItem' style="display:flex;flex-direction:row;justify-content:space-around">
        <p style="margin:0px;">从</p>
        <input style="width:30%" value="2017-03-28 08"></input >
        <p style="margin:0px;">至</p>
        <input style="width:30%" value="2017-03-28 14"></input >
        <i class="ace-icon fa fa-repeat"></i>
      </div>
      <div style="width:100%;" class="hr hr5 hr-dotted" style='margin:0px'></div><!--分割线-->
      <p style="margin:0px;font-size:10px;">展示内容</p>
      <div id="showcontent " class='contentTitleBarItem'  style="display:flex;flex-direction:row;justify-content:space-around;">

        <a class="showModule" id="modTarget_thsw" onclick="changeModuleList('thsw')">太湖水位</a><a class="hiddenModule" id="modTarget_hhhl" onclick="changeModuleList('hhhl')">环湖河流</a>
        <a class="hiddenModule" id="modTarget_hd_ygshd" onclick="changeModuleList('hd_ygshd')">引供水河道</a><a class="hiddenModule" id="modTarget_hd_cj" onclick="changeModuleList('hd_cj')">沿长江</a>
        <a class="hiddenModule" id="modTarget_hd_hzw" onclick="changeModuleList('hd_hzw')">杭州湾</a><a class="hiddenModule" id="modTarget_qsyh" onclick="changeModuleList('qsyh')">取用水户</a>

    </div>
    </div>
    <div style="width:100%;" class="hr hr5 hr-solid" style='margin:5px'></div><!--分割线<--></-->
    <div v-for="component in currentDataViews" >
      <component :is="component" :hdComponentParam="hdComponentParam" :echarts="echarts"></component>
    </div>
  </div>
</template>
<script>
import thsw from './mainStatus_thsw.vue'
import hhhl from './mainStatus_hhhl.vue'
import ygshd from './mainStatus_ygshd.vue'
import qsyh from './mainStatus_qsyh.vue'

export default {
  name: 'slmodmainstate',
  props: ['echarts','addComponents'],
  components: {
    // <my-component> 将只在父模板可用
    'thsw':thsw,
    'hhhl': hhhl,
    'hd': ygshd,
    'qsyh': qsyh
  },
  data:function(){
    let currentDataViews = [];
    currentDataViews = Array.from(new Set(this.addCompontents));
    return{
        'currentDataViews':currentDataViews,
        'hdComponentParam':['ygshd','cj','hzw']
    }
  },
  mounted:function(){

  },
  methods:{
    changeDataView:function(newViews){
        console.log(newViews);
        var hdComponentParam = [];
        let newDataViews = [].concat(newViews);
        newViews.forEach(function(value,index){
          if(value.indexOf('_')>=0){
            hdComponentParam.push(value.split('_')[1]);
            newDataViews[index] = value.split('_')[0];

          }
        });
        let currentDataViews = new Set(newDataViews);
        this.currentDataViews = Array.from(currentDataViews);
        this.hdComponentParam = hdComponentParam;
        console.log(this.hdComponentParam);

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
