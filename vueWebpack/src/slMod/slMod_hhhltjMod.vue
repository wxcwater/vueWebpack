
<template>
  <div id="tj" class="tab-pane in active" style="height:390px;width:100%;">
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
  <div id="chartContent1" style="height:30%;width:100%;"></div>
  <div class="hr hr5 hr-dotted"></div>
  <div id="tableContent" style="height:70%;max-height:245px;width:100%;margin-top:5px;overflow:auto">

      <component :is='currentTableType'></component>
  </div>
</div>
</template>

<script>
import hhhltjTableContent from './slMod_hhhl_tjTableContent.vue'

export default {
  name: 'hhhltjMod',
  props: ['echarts'],
  components: {
  // <my-component> 将只在父模板可用
  'hhhltjTableContent': hhhltjTableContent,

},
  data:function(){
    return {
        'currentTableType':'hhhltjTableContent',
        'onlyWarn':false,
        'type':'d'
    }
  },
  mounted:function(){

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

      var option_hhhl = {
  				    title: {
  				        text: '环湖河流'
  				    },
  						legend:{
  							show:true,
  							x:'right',
  							data:['入湖','出湖'],
  						},
  						grid:{
  							top:'15%',
  							bottom:'25%',
  							left:'10%',
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
  				        data:['望亭水利枢纽','望虞河','常熟','太浦河'],
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
  				        name: '入湖',
  				        type: 'bar',

  				        showSymbol: false,
  				        hoverAnimation: false,
  				        data: [100,150,200,0]
  				    },{
  				        name: '出湖',
  				        type: 'bar',
  				        showSymbol: false,
  				        hoverAnimation: false,
  				        data: [10,15,20,500]
  				    }]
  				};
      var chart = echarts.init(document.getElementById('chartContent1'));

      chart.setOption(option_hhhl);
    }

  }
}

</script>

<style>

</style>
