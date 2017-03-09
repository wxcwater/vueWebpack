<template>
  <div class="tabbable" style="width:245px;height:305px;">
	<ul class="nav nav-tabs padding-12 tab-color-blue background-blue" id="myTab4">
	<li >
	<a data-toggle="tab" href="#home4">基本信息</a>
	</li>
	<li class="active">
	<a data-toggle="tab" href="#profile4">监测信息</a>
	</li>


	</ul>

	<div class="tab-content" style="padding:5px 0px 0px 0px ">
	<div id="home4" class="tab-pane" style="overflow:scroll;max-height:215px;">

	<table class="table table-striped table-bordered table-hover" >
	<thead class="thin-border-bottom">
	<tr>
	<th>
	// <i class="ace-icon fa fa-user"></i>
	经度
	</th>

	<th>
	// <i>@</i>
	 x
	</th>

	</thead>

	<tbody >

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

	检测项目
	</th>

	<th>

	测量值
	</th>

	</thead>

	<tbody style="overflow: scroll;">

	<tr>
	<td class="">水温</td>
	<td>
	<a href="#">12</a>
	</td>
	</tr>

	<tr>
	<td class="">PH值</td>
	<td>
	<a href="#">6.5</a>
	</td>
	</tr>
	<tr>
	<td class="">电导率</td>
	<td>
	<a href="#">514</a>
	</td>
	</tr>

	<tr>
	<td class="">溶解氧</td>
	<td>
	<a href="#">7.89</a>
	</td>
	</tr>
	<tr>
	<td class="">ORP值</td>
	<td>
	<a href="#">95</a>
	</td>
	</tr>

	<tr>
	<td class="">浊度</td>
	<td>
	<a href="#">363</a>
	</td>
	</tr>
	<tr>
	<td class="">高锰酸盐指数</td>
	<td>
	<a href="#">3.88</a>
	</td>
	</tr>

	<tr>
	<td class="">总氮</td>
	<td>
	<a href="#">2.08</a>
	</td>
	</tr>
	<tr>
	<td class="">氨氮</td>
	<td>
	<a href="#">0.13</a>
	</td>
	</tr>
	<tr>
	<td class="">总磷</td>
	<td>
	<a href="#">0.032</a>
	</td>
	</tr>
	</tbody>
	</table>
	</div>


	</div>
	</div>
</template>

<script>
export default {
  name: 'szcontent',
  props: ['echarts'],
  data:function(){
      return {
        //'echarts':this.echarts
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
          data:['水位','流量']
      },
      grid: {
          left: '1%',
          right: '5%',
          bottom: '3%',
          top:'20%',
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
      yAxis: {
          type: 'value'
      },
      series: [
          {
              name:'水位',
              type:'line',

              data:[120, 132, 101, 134, 90, 230, 210]
          },
          {
              name:'流量',
              type:'line',

              data:[220, 182, 191, 234, 290, 330, 310]
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
