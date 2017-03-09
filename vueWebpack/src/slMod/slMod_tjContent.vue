<template>
  <div id="tj" class="tab-pane in active" style="height:390px;width:100%;">
    <component :is="focusObject" :echarts="echarts"></component>
  </div>

</template>

<script>
import slnormaltjMod from './slMod_normaltjMod.vue'
import sl_xzqtjMod from './slMod_xzqtjMod.vue'
import sl_slfqtgMod from './slMod_slfqtjMod.vue'
import sl_hhhltjMod from './slMod_hhhltjMod.vue'
export default {
  name: 'slMod_tjModule',
  props: ['echarts','focusObject'],
  components: {
    'normal':slnormaltjMod,
    'xzq':sl_xzqtjMod,
    'slfq':sl_slfqtgMod,
    'hhhl':sl_hhhltjMod,
},
  data:function(){
    return {
        'focusObject' : 'normal',
        'currentTableType':'pwktjtable',
        'onlyWarn':false,
        'type':'d'
    }
  },
  mounted:function(){
    // alert(1)
    this.initChart();
  },
  updated:function(){

  },
  methods:{
    changeObjectType:function(type){
      this.type = type;
      if(type=='1'){
          this.changeTable();
          this.initChart();
      }else if(type=='2'){
        this.changeTable();
        this.initChart();
      }else if(type=='3'){
        this.changeTable();
        this.initChart();
      }else{
        this.changeTable();
        this.initChart();
      }
    },
    changeTableType:function(){
      this.onlyWarn = !this.onlyWarn;
      // console.log(this.onlyWarn);
      // this.changeTable();
    },
    changeImgSrc:function(type){
      if(type==2){
      document.getElementById('eximg1').src = '../gis/assets/lztg14.jpg'
      document.getElementById('eximg2').src = '../gis/assets/lztg14.jpg'
      document.getElementById('eximg3').src = '../gis/assets/lztg14.jpg'
    }else{
      document.getElementById('eximg1').src = '../gis/assets/lztg1.jpg'
      document.getElementById('eximg2').src = '../gis/assets/lztg1.jpg'
      document.getElementById('eximg3').src = '../gis/assets/lztg1.jpg'
    }
    },
    changeTable:function(){
      if(this.type=='1'){

            this.currentTableType ='sgnqtjtable';

      }else if(this.type=='2'){

          this.currentTableType ='pwktjtable';

      }else if(this.type=='3'){

          this.currentTableType ='sydtjtable';

      }
    },
    initChart:function (view){

      var option_normal = {
          title: {
              text: ''
          },
          legend:{
            show:true
          },
          grid:{
            top:'25%',
            bottom:'17%',
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
              name:'',
              data:['焦山','大浦口','平台山','小梅口','元荡','望亭','太浦闸'],
              boundaryGap: ['50%', '50%'],
              splitLine: {
                  show: false
              }
          },
          yAxis: [{
              name:'',
              type: 'value',
              boundaryGap: [0, 0],
              splitLine: {
                  show: true
              }
          }],
          series: [{
              name: '数据',
              type: 'bar',
              showSymbol: false,
              hoverAnimation: false,
              data: [30,25,10,5,10,5]
          }]
      };

      var option_pwk = {
          title: {
              text: ''
          },
          legend:{
            show:false,
            data:['未超标','超标'],
            x:'right'
          },
          grid:{
            top:'25%',
            bottom:'17%',
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
              name:'',
              data:['焦山','大浦口','平台山','小梅口','元荡','望亭','太浦闸'],
              boundaryGap: ['50%', '50%'],
              splitLine: {
                  show: false
              }
          },
          yAxis: [{
              name:'',
              type: 'value',
              boundaryGap: [0, 0],
              splitLine: {
                  show: true
              }
          }],
          series: [
          {
              name: '数据',
              type: 'bar',
              showSymbol: false,
              hoverAnimation: false,
              data: [30,25,10,5,25,10]
          }]
      };
      var option ;
      view = 'pwk';
      if(view=='normal'){
        option  = option_normal;
      }else if(view=='pwk'){
        option = option_pwk;
      }else{
        option = option_pwk;
      }
      var chart = echarts.init(document.getElementById('chartContent'));
      chart.setOption(option_pwk);
    }

  }
}

</script>

<style>

</style>
