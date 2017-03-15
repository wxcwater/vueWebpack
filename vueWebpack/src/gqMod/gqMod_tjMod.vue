
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
      <di
    </div>
    <div id="chartContent" style="height:30%;width:100%;"></div>
    <div class="hr hr5 hr-dotted"></div>
    <div class="row">
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
  </div>

  <table border="1" style="width:100%"class="">
  <tr>
    <th colspan="1">河流</th>
    <th colspan="1">站名</th>
    <th colspan="1">开闸时长</th>
    <th colspan="1">过闸水量</th>
    <th colspan="1">合计</th>
  </tr>
    <tr>
      <td rowspan="4">太浦河</td>
      <td rowspan="1">太浦自动闸</td>
      <td>36</td>
      <td>10</td>
      <td rowspan="4">40</td>

    </tr>
    <tr>
      <td rowspan="1">太浦自动闸</td>
      <td>36</td>
      <td>10</td>

    </tr>
    <tr>
      <td rowspan="1">太浦自动闸</td>
      <td>36</td>
      <td>10</td>

    </tr>
    <tr>
      <td rowspan="1">太浦自动闸</td>
      <td>36</td>
      <td>10</td>

    </tr>
    
  </table>
  </div>

</template>

<script>

export default {
  name: 'gqnormaltjMod',
  props: ['echarts'],
  components: {

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
          this.initChart('gz');
      }else if(type=='2'){
        this.changeTable();
        this.initChart('zl');
      }else if(type=='3'){
        this.changeTable();
        this.initChart('xm');
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
              data:['02-20','02-21','02-22','02-23','02-24'],
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
          },{
              name:'',
              type: 'value',
              boundaryGap: [0, 0],
              splitLine: {
                  show: true
              }
          }],
          series: [{
              name: '开启站',
              type: 'bar',
              showSymbol: false,
              hoverAnimation: false,
              data: [2,5,10,5,2,1]
          },{
              name: '关闭站',
              type: 'bar',
              showSymbol: false,
              hoverAnimation: false,
              data: [8,5,0,5,8,9]
          },
          {
              name: '引水量',
              type: 'line',
              yAxisIndex:1,
              showSymbol: false,
              hoverAnimation: false,
              data: [30,25,10,5,10,5]
          },{
              name: '供水量',
              type: 'line',
              yAxisIndex:1,
              showSymbol: false,
              hoverAnimation: false,
              data: [10,15,10,1,10,1]
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
              data:['电压过高','电压过低','温度过高','温度过低','未报数据'],
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
              name: '站个数',
              type: 'bar',
              showSymbol: false,
              hoverAnimation: false,
              data: [30,25,10,5,25]
          }]
      };
      var option_xm = {
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
              data:['新建','已有','共享'],
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
              name: '站个数',
              type: 'bar',
              showSymbol: false,
              hoverAnimation: false,
              data: [30,25,10]
          },{
              name: '站个数',
              type: 'bar',
              showSymbol: false,
              hoverAnimation: false,
              data: [30,25,10]
          }]
      };
      var option ;

      if(view=='gz'){
        option  = option_normal;
      }else if(view=='zl'){
        option = option_normal;
      }else{
        option = option_normal;
      }
      var chart = echarts.init(document.getElementById('chartContent'));
      chart.setOption(option);
    }

  }
}

</script>

<style>

</style>
