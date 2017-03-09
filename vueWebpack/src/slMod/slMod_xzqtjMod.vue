
<template>
  <div id="tj" class="tab-pane in active" style="height:390px;width:100%;">



  <div class="row">
    <div class="btn-group" style="margin-left:10px;">
      <button data-toggle="dropdown" class="btn btn-primary btn-white dropdown-toggle" aria-expanded="false">
    时间维度:日
        <i class="ace-icon fa fa-angle-down icon-on-right"></i>
      </button>
    <ul class="dropdown-menu">
      <li>
        <a href="#" @click ="changeTimeType('d')">日</a>
      </li>
      <li>
        <a href="#" @click ="changeTimeType('m')">月</a>
      </li>
      <li>
        <a href="#" @click ="changeTimeType('y')">年</a>
      </li>
    </ul>
  </div>
  </div>
  <div class="row">
    <div class="col-md-6">
      <div class="input-group ">
        <div class="input-group-addon">开始</div>
        <input type="text" id="tjMode_inStTm"
          onfocus="WdatePicker({dateFmt:'yyyy-MM-dd HH'})"
          class="form-control" value="2017-02-05 08"/>
      </div>
    </div>
  <div class="col-md-6">
    <div class="input-group ">
      <div class="input-group-addon">结束</div>
      <input type="text" id="tjMode_inEnTm"
        onfocus="WdatePicker({dateFmt:'yyyy-MM-dd HH'})"
        class="form-control" value="2017-02-13 08"/>
    </div>
  </div>
  </div>
  <div id="chartContent" style="height:30%;width:100%;"></div>
  <div class="hr hr5 hr-dotted"></div>
  <div id="tableContent" style="height:70%;max-height:245px;width:100%;margin-top:5px;overflow:auto">
    <label class="pull-left inline">
        <small class="muted smaller-90">只展示告警站</small>

        <input id="id-button-borders" class="ace ace-switch ace-switch-5" type="checkbox" @click='changeTableType()'>
        <span class="lbl middle"></span>
      </label>
      <component :is='currentTableType'></component>
  </div>

</template>

<script>
import xzfqtjtable_d from './slMod_xzfq_tjTableContent_d.vue'
import xzfqtjtable_d_onlywarn from './slMod_xzfq_tjTableContent_d_onlywarn.vue'
import xzfqtjtable_m from './slMod_xzfq_tjTableContent_m.vue'
import xzfqtjtable_m_onlywarn from './slMod_xzfq_tjTableContent_m_onlywarn.vue'
import xzfqtjtable_y from './slMod_xzfq_tjTableContent_y.vue'
import xzfqtjtable_y_onlywarn from './slMod_xzfq_tjTableContent_y_onlywarn.vue'
export default {
  name: 'xzqtjMod',
  props: ['echarts'],
  components: {
  // <my-component> 将只在父模板可用
  'xzfqtjtable_d': xzfqtjtable_d,
  'xzfqtjtable_d_onlywarn': xzfqtjtable_d_onlywarn,
  'xzfqtjtable_m': xzfqtjtable_m,
  'xzfqtjtable_m_onlywarn': xzfqtjtable_m_onlywarn,
  'xzfqtjtable_y': xzfqtjtable_y,
  'xzfqtjtable_y_onlywarn': xzfqtjtable_y_onlywarn
},
  data:function(){
    return {
        'currentTableType':'xzfqtjtable_d',
        'onlyWarn':false,
        'type':'d'
    }
  },
  mounted:function(){
    // alert(1)
    this.initChart();
  },
  methods:{
    changeTimeType:function(type){
      this.type = type;
      if(type=='d'){
          document.getElementById('tjMode_inStTm').value = '2017-02-05 08';
          document.getElementById('tjMode_inEnTm').value = '2017-02-13 08';
          this.changeTable();
          this.initChart();
      }else if(type=='m'){
        document.getElementById('tjMode_inStTm').value = '2017-02';
        document.getElementById('tjMode_inEnTm').value = '2017-02';
        this.changeTable();
        this.initChart();
      }else{
        document.getElementById('tjMode_inStTm').value = '2017';
        document.getElementById('tjMode_inEnTm').value = '2017';
        this.changeTable();
        this.initChart();
      }
    },
    changeTableType:function(){
      this.onlyWarn = !this.onlyWarn;
      console.log(this.onlyWarn);
      this.changeTable();
    },
    changeTable:function(){
      if(this.type=='d'){
          if(!this.onlyWarn){
            this.currentTableType ='xzfqtjtable_d';
            }else{
            this.currentTableType ='xzfqtjtable_d_onlywarn';
            }
      }else if(this.type=='m'){
        if(!this.onlyWarn){
          this.currentTableType ='xzfqtjtable_m';
        }else{
          this.currentTableType ='xzfqtjtable_m_onlywarn';
          }
      }else{
        if(!this.onlyWarn){
          this.currentTableType ='xzfqtjtable_y';
        }else{
          this.currentTableType ='xzfqtjtable_y_onlywarn';
          }
      }
    },
    initChart:function (){

      var option_d = {
          title: {
              text: '行政区取用水'
          },
          legend:{
            show:true,
            x:'right',
            data:['已取用','计划'],
          },
          grid:{
            top:'20%',
            bottom:'25%',
            left:'15%',
            right:'10%'
          },
          tooltip: {
              trigger: 'axis',
              // formatter: function (params) {
              //     params = params[0];
              //     var date = new Date(params.name);
              //     return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
              // },
              axisPointer: {
                  animation: false
              }
          },
          xAxis: {
              data:['宜兴市','湖州市','苏州市','无锡市'],
              axisLabel:{
                rotate:0,
                interval:0,
                textSymbol:{
                  fontSize:5
                }
              },
              splitLine: {
                  show: false
              }
          },
          yAxis: {
              type: 'value',
              boundaryGap: [0, '100%'],
              splitLine: {
                  show: true
              }
          },
          series: [{
              name: '已取用',
              type: 'bar',

              showSymbol: false,
              hoverAnimation: false,
              data: [50,50,170,100]
          },{
              name: '计划',
              type: 'bar',

              showSymbol: false,
              hoverAnimation: false,
              data: [100,150,200,50]
          }]
      };

      var option_m = {
          title: {
              text: '行政区取用水'
          },
          legend:{
            show:true,
            x:'right',
            data:['已取用','计划'],
          },
          grid:{
            top:'20%',
            bottom:'25%',
            left:'15%',
            right:'10%'
          },
          tooltip: {
              trigger: 'axis',
              // formatter: function (params) {
              //     params = params[0];
              //     var date = new Date(params.name);
              //     return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
              // },
              axisPointer: {
                  animation: false
              }
          },
          xAxis: {
              data:['宜兴市','湖州市','苏州市','无锡市'],
              axisLabel:{
                rotate:0,
                interval:0,
                textSymbol:{
                  fontSize:5
                }
              },
              splitLine: {
                  show: false
              }
          },
          yAxis: {
              type: 'value',
              boundaryGap: [0, '100%'],
              splitLine: {
                  show: true
              }
          },
          series: [{
              name: '已取用',
              type: 'bar',

              showSymbol: false,
              hoverAnimation: false,
              data: [50,70,170,100]
          },{
              name: '计划',
              type: 'bar',

              showSymbol: false,
              hoverAnimation: false,
              data: [100,150,200,50]
          }]
      };

      var option_y = {
          title: {
              text: '行政区取用水'
          },
          legend:{
            show:true,
            x:'right',
            data:['已取用','计划'],
          },
          grid:{
            top:'20%',
            bottom:'25%',
            left:'15%',
            right:'10%'
          },
          tooltip: {
              trigger: 'axis',
              // formatter: function (params) {
              //     params = params[0];
              //     var date = new Date(params.name);
              //     return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
              // },
              axisPointer: {
                  animation: false
              }
          },
          xAxis: {
              data:['宜兴市','湖州市','苏州市','无锡市'],
              axisLabel:{
                rotate:0,
                interval:0,
                textSymbol:{
                  fontSize:5
                }
              },
              splitLine: {
                  show: false
              }
          },
          yAxis: {
              type: 'value',
              boundaryGap: [0, '100%'],
              splitLine: {
                  show: true
              }
          },
          series: [{
              name: '已取用',
              type: 'bar',

              showSymbol: false,
              hoverAnimation: false,
              data: [150,150,170,100]
          },{
              name: '计划',
              type: 'bar',

              showSymbol: false,
              hoverAnimation: false,
              data: [100,150,200,50]
          }]
      };

      var chart = echarts.init(document.getElementById('chartContent'));
      var option;
      if(this.type=='d'){
        option = option_d;
      }else if(this.type=='m'){
        option = option_m;
      }else if(this.type=='y'){
        option = option_y;
      }
      chart.setOption(option);
    }

  }
}

</script>

<style>

</style>
