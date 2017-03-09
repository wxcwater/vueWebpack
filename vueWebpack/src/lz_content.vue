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
            经度
            </th>
            <th>
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
              <a href="#">蓝藻浮台站</a>
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
    <td class="">水温</td>
    <td>
    <a href="#">12</a>
    </td>
    </tr>
    <tr>
    <td class="">溶解氧</td>
    <td>
    <a href="#">6.5</a>
    </td>
    </tr>
    <tr>
    <td class="">电导率</td>
    <td>
    <a href="#">IV</a>
    </td>
    </tr>
    <tr>
    <td class="">pH</td>
    <td>
    <a href="#">7.89</a>
    </td>
    </tr>
    <tr>
    <td class="">浊度</td>
    <td>
    <a href="#">12</a>
    </td>
    </tr>
    <tr>
    <td class="">蓝藻</td>
    <td>
    <a href="#">12</a>
    </td>
    </tr>
    <tr>
    <td class="">铵离子</td>
    <td>
    <a href="#">12</a>
    </td>
    </tr>
    <tr>
    <td class="">风速(风向)</td>
    <td>
    <a href="#">12</a>
    </td>
    </tr>
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
  name: 'lzcontent',
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
              data:['水温','溶解氧','浊度','PH','蓝藻']
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
          yAxis: {
              type: 'value'
          },
          series: [
              {
                  name:'水温',
                  type:'line',

                  data:[120, 132, 101, 134, 90, 230, 210]
              },
              {
                  name:'溶解氧',
                  type:'line',

                  data:[220, 182, 191, 234, 290, 330, 310]
              },
              {
                  name:'浊度',
                  type:'line',

                  data:[150, 232, 201, 154, 190, 330, 410]
              },
              {
                  name:'PH',
                  type:'line',

                  data:[320, 332, 301, 334, 390, 330, 320]
              },
              {
                  name:'蓝藻',
                  type:'line',

                  data:[820, 932, 901, 934, 1290, 1330, 1320]
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
