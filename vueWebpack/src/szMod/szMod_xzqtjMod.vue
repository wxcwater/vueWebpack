
<template>
  <div id="tj" class="tab-pane in active" style="height:390px;width:100%;">
    <!-- <div class="row">
    <div class="col-md-6">
      <div class="input-group ">
        <div class="input-group-addon">开始</div>
        <input type="text" id="inStTm"
          onfocus="WdatePicker({dateFmt:'yyyy-MM-dd HH'})"
          class="form-control" value="2017-02-05 08"/>
      </div>
    </div>
    <div class="col-md-6">
      <div class="input-group ">
        <div class="input-group-addon">结束</div>
        <input type="text" id="inStTm"
          onfocus="WdatePicker({dateFmt:'yyyy-MM-dd HH'})"
          class="form-control" value="2017-02-13 08"/>
      </div>
    </div>
    </div> -->
    <div class="row">
      <div class="btn-group" style="margin-left:10px;">
        <button data-toggle="dropdown" class="btn btn-primary btn-white dropdown-toggle" aria-expanded="false">
      统计对象:水功能区
          <i class="ace-icon fa fa-angle-down icon-on-right"></i>
        </button>
      <ul class="dropdown-menu">
        <li>
          <a href="#" @click ="changeObjectType('1')">水功能区</a>
        </li>
        <li>
          <a href="#" @click ="changeObjectType('2')">排污口</a>
        </li>
        <li>
          <a href="#" @click ="changeObjectType('3')">水源地</a>
        </li>

      </ul>
    </div>
    </div>
    <div id="chartContent" style="height:30%;width:100%;"></div>
    <div class="hr hr5 hr-dotted"></div>
    <label class="pull-left inline">
        <small class="muted smaller-90">只展示未达标</small>

        <input id="id-button-borders" class="ace ace-switch ace-switch-5" type="checkbox" @click='changeTableType()'>
        <span class="lbl middle"></span>
      </label>
    <div id="tableContent" style="height:70%;max-height:220px;width:100%;margin-top:5px;overflow:auto">
      <component :is='currentTableType'></component>
    </div>


  </div>

</template>

<script>
import sgnqtjtable from './szMod_xzq_sgnqtjTableContent.vue'
import pwktjtable from './szMod_xzq_pwktjTableContent.vue'
import sydtjtable from './szMod_xzq_sydtjTableContent.vue'
export default {
  name: 'sznormaltjMod',
  props: ['echarts'],
  components: {
  'sgnqtjtable':sgnqtjtable,
  'pwktjtable':pwktjtable,
  'sydtjtable':sydtjtable

},
  data:function(){
    return {
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
              data:['苏沪边界','苏浙边界','浙沪边界','浙皖边界'],
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
              name: 'I',
              type: 'bar',
              showSymbol: false,
              hoverAnimation: false,
              data: [30,25,10,5]
          },{
              name: 'II',
              type: 'bar',
              showSymbol: false,
              hoverAnimation: false,
              data: [30,25,10,5]
          },{
              name: 'III',
              type: 'bar',
              showSymbol: false,
              hoverAnimation: false,
              data: [30,25,10,5]
          },{
              name: 'IV',
              type: 'bar',
              showSymbol: false,
              hoverAnimation: false,
              data: [30,25,10,5]
          },{
              name: 'V',
              type: 'bar',
              showSymbol: false,
              hoverAnimation: false,
              data: [30,25,10,5]
          }]
      };

      var option_pwk = {
          title: {
              text: '达标情况'
          },
          legend:{
            show:true,
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
              data:['I级','II级','III级','IV级','V级'],
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
              name: '未超标',
              type: 'bar',
              showSymbol: false,
              hoverAnimation: false,
              data: [30,25,10,5]
          },
          {
              name: '超标',
              type: 'bar',
              showSymbol: false,
              hoverAnimation: false,
              data: [30,25,10,5]
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
      chart.setOption(option_normal);
    }

  }
}

</script>

<style>

</style>
