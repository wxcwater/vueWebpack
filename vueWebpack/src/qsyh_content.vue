<template>
  <div class="tabbable" style="width:260pxheight:265px" >
    <ul class="nav nav-tabs padding-12 tab-color-blue background-blue">
      <li>
        <a data-toggle="tab" href="#basicInformation">基本信息</a>
      </li>
      <li class="active">
        <a data-toggle="tab" href="#watchInformation">监测信息</a>
      </li>
      <li class="">
        <a data-toggle="tab" href="#pline" v-on:click="focusChart()">过程线</a>
      </li>
    </ul>
    <div class="tab-content" style="padding:5px 0px 0px 0px " >
      <div id="basicInformation" class="tab-pane" style="overflow:scroll;max-height:215px;">
        <table class="table table-striped table-bordered table-hover">
          <thead >
          <tr>
            <th>
            代码
            </th>
            <th>
            660832144
            </th>
          </thead>
        <tbody >
          <tr>
            <td class="">名称</td>
            <td>
              <a href="#">常熟市中法水务有限公司</a>
            </td>
          </tr>
          <tr>
            <td class="">法人代表</td>
            <td>
              <a href="#">陶国华</a>
            </td>
          </tr>
        <tr>
          <td class="">监测级别</td>
          <td>
            <a href="#">国控</a>
          </td>
        </tr>
        <tr>
          <td class="">行业类别</td>
          <td>
            <a href="#"></a>
          </td>
        </tr>
        <tr>
          <td class="">测站代码</td>
          <td>
            <a href="#">3205810091</a>
          </td>
        </tr>
        <tr>
          <td class="">管理单位</td>
          <td>
            <a href="#">苏州市水利局</a>
          </td>
        </tr>
        </tbody>
        </table>
      </div>

    <div id="watchInformation" class="tab-pane in active" style="overflow: auto;max-height:250px">
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
    <tbody style="overflow: scroll">
    <tr>
    <td class="">日取水量</td>
    <td>
    <a href="#">12</a>
    </td>
    </tr>
    <tr>
    <td class="">月累计取水(计划值)</td>
    <td>
    <a href="#">300(500)</a>
    </td>
    </tr>
    <tr>
    <td class="">年累计取水(计划值)</td>
    <td>
    <a href="#">650(1000)</a>
    </td>
    </tr>
    <tr>
    <td class="">运行状况</td>
    <td>
    <a href="#">良好</a>
    </td>
    </tr>
    <tr>
    </tbody>
    </table>
    </div>

    <div id="pline" class="tab-pane" style="overflow: auto;max-height:250px" >
      <div id="contentChart" style="width:230px;height:130px"></div>
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
  </div>
</template>

<script>
export default {
  name: 'slcontent',
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
          data:['月取水','年累计']
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
          data: ['1月','2月','3月','4月','5月','6月','7月']
      },
      yAxis: {
          type: 'value'
      },
      series: [
          {
              name:'月取水',
              type:'bar',

              data:[120, 132, 101, 134, 90, 230, 210]
          },
          {
              name:'年累计',
              type:'line',

              data:[ 120, 252, 353, 487, 577, 807,1017]
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
