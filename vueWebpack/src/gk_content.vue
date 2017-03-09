<template>
   <div class="tabbable" style="width:245px;height:305px;">
   <ul class="nav nav-tabs padding-12 tab-color-blue background-blue" id="myTab4">
   <li >
   <a data-toggle="tab" href="#home4">基本信息</a>
   </li>
   <li class="active">
   <a data-toggle="tab" href="#profile4">监测信息</a>
   </li>
   <li>
   <a data-toggle="tab" href="#profile6" v-on:click="focusChart()">统计</a>
   </li>

   </ul>

   <div class="tab-content" style="padding:5px 0px 0px 0px " >
   <div id="home4" class="tab-pane" style="overflow: auto;max-height:250px">

   <table class="table table-striped table-bordered table-hover" >
   <thead class="thin-border-bottom">
   <tr>
   <th>
  //  <i class="ace-icon fa fa-user"></i>
   经度
   </th>

   <th>
  //  <i>@</i>
    x
   </th>

   </thead>

   <tbody style="overflow: scroll;">

   <tr>
   <td class="">纬度</td>
   <td>
   <a href="#">y</a>
   </td>
   </tr>

   <tr>
   <td class="">测站类型</td>
   <td>
   <a href="#">水量水质自动监测站</a>
   </td>
   </tr>

   <tr>
   <td class="">监测内容</td>
   <td>
   <a href="#">水温、PH值、电导率、溶解氧、ORP值、浊度、高锰酸盐指数、总氮、氨氮、总磷</a>
   </td>
   </tr>

   <tr>
   <td class="">监测频次</td>
   <td>
   <a href="#">水质：1次/2h</a>
   </td>
   </tr>

   <tr>
   <td class="">管理单位</td>
   <td>
   <a href="#"></a>
   </td>
   </tr>
   </tbody>
   </table>


   </div>

   <div id="profile4" class="tab-pane in active" style="overflow: auto;max-height:250px">

   <table class="table table-striped table-bordered table-hover" >
   <thead class="thin-border-bottom">
   <tr>
   <th>
  //  <i class="ace-icon fa fa-user"></i>
   检测项目
   </th>

   <th>
  //  <i>@</i>
   测量值
   </th>

   </thead>

   <tbody style="overflow: scroll;">

   <tr>
   <td class="">温度</td>
   <td>
   <a href="#">12</a>
   </td>
   </tr>

   <tr>
   <td class="">电压</td>
   <td>
   <a href="#">6.5</a>
   </td>
   </tr>
   <tr>
   <td class="">最近报送时间</td>
   <td>
   <a href="#">已报</a>
   </td>
   </tr>

   <tr>
   <td class="">视频工况</td>
   <td>
   <a href="#">无</a>
   </td>
   </tr>
   <tr>
   <td class="">工作状态</td>
   <td>
   <a href="#">正常</a>
   </td>
   </tr>


   </tbody>
   </table>
   </div>

   <div id="profile6" class="tab-pane"  style="overflow: auto;max-height:250px">
   <div id="contentChart" style="width:230px;height:220px"></div>

   <div class="input-group input-group-sm" style="margin-top:5px;">
     <div class="input-group-addon">开始</div>
     <input type="text" id="inStTm" onfocus="WdatePicker({dateFmt:\'yyyy-MM-dd HH\'})" class="form-control" value="2017-01-03 08"/></div>


   <div class="input-group input-group-sm" style="margin-top:5px;">
     <div class="input-group-addon">结束</div>
     <input type="text" id="inStTm"
       onfocus="WdatePicker({dateFmt:\'yyyy-MM-dd HH\'})"
       class="form-control" value="2017-01-03 11"/>
       <span class="input-group-btn">
         <button class="btn btn-success" type="button" style="line-height:10px;">刷新</button>
       </span>
   </div>

   </div>
   </div>
</template>

<script>
export default {
  name: 'gkcontent',
  props: ['echarts'],
  data:function(){
      return {
        'echarts':this.echarts
      }
  },
  created:function(){
    //alert('1');
  },
  methods:{
    focusChart:function(){
      //alert(1);
      var myChart = echarts.init(document.getElementById('contentChart'));
      //alert(2);
          // 指定图表的配置项和数据
  			var	option = {
      title: {
          text: ''
      },
      tooltip: {
          trigger: 'axis'
      },
      legend: {
          data:['电压','温度','故障时长']
      },
      grid: {
          left: '1%',
          right: '5%',
          bottom: '3%',
          containLabel: true
      },
      toolbox: {
          feature: {
              saveAsImage: {}
          }
      },
      xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['12-22','23','24','25','26','27','28']
      },
      yAxis: [{
          type: 'value'
      },{type:'value'}],
      series: [
          {
              name:'电压',
              type:'line',

              data:[120, 132, 101, 134, 90, 230, 210]
          },
          {
              name:'温度',
              type:'line',

              data:[220, 182, 191, 234, 290, 330, 310]
          },
          {
              name:'故障时长',
              type:'bar',
              yAxisIndex:1,
              data:[0,2,2,0,1,0,0]
          }
      ]
  };


          // 使用刚指定的配置项和数据显示图表。
          myChart.setOption(option);
    }
  }
}

</script>

<style>

</style>
