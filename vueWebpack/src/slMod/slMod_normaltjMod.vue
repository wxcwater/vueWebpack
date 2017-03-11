
<template>
  <div id="tj" class="tab-pane in active" style="height:390px;width:100%;">
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
    <div id="chartContent" style="height:30%;width:100%;"></div>
    <div class="hr hr5 hr-dotted"></div>
    <div id="tableContent" style="height:70%;max-height:220px;width:100%;margin-top:5px;overflow:auto">
    <table border="1" style="width:100%"class="table table-striped table-bordered table-hover">
    <tr>
      <th >数据表格</th>

    </tr>
    <tr>
      <td  style="padding-left:3px;">
        <i class="fa fa-plus-square-o" aria-hidden="true" onclick="table_slfq_clickHandler()"></i>
        <a>引供水河道</a>
         合计引供水量1778万方，排水0万方
      </td>

    </tr>
    <tr>
      <td  style="padding-left:3px;" >
        <i id="table_slfq_icon" class="fa fa-plus-square-o" aria-hidden="true" onclick="table_slfq_clickHandler()"></i>
        <a>水利分区</a>
        <label id = "table_slfq_title" style="display:inline;">合计入湖水量120.1万方，平均流量13.9，出湖水量889.9万方,平均流量103</label>
          <div id = 'table_slfq_content' style="width:100%;display:none" >
          <table  border="1" style="width:100%;">
          <tr>
            <th>水利分区</th>
            <th colspan="">入湖流量</th>
            <th colspan="">出湖流量</th>
            <th colspan="">入湖水量</th>
            <th colspan="">出湖水量</th>
          </tr>
            <tr>
              <td>湖西区</td>
              <td >0</td>
              <td >0</td>
              <td >0</td>
              <td >0</td>
            </tr>
            <tr>
              <td>物澄锡虞区</td>
              <td >0</td>
              <td >0</td>
              <td >0</td>
              <td >0</td>
            </tr>
            <tr>
              <td>阳澄淀区</td>
              <td >0</td>
              <td >0</td>
              <td >0</td>
              <td >0</td>>
            </tr>
            <tr>
              <td>杭嘉湖区</td>
              <td >0</td>
              <td >0</td>
              <td >0</td>
              <td >0</td>
            </tr>
            <tr>
              <td>浙西区</td>
              <td >13.9</td>
              <td >0</td>
              <td >120.1</td>
              <td >0</td>
            </tr>
            <tr>
              <td>太浦闸</td>
              <td >0</td>
              <td >103</td>
              <td >0</td>
              <td >889.9</td>
            </tr>

            <tr>
              <td>望亭立交</td>
              <td >0</td>
              <td >0</td>
              <td >0</td>
              <td >0</td>
            </tr>

          </table>
        </div>
      </td>
    </tr>
      <tr>
        <td  style="padding-left:3px;" >
          <i id="table_slfq_icon" class="fa fa-plus-square-o" aria-hidden="true" onclick="table_slfq_clickHandler()"></i>
          <a>测站</a>
          <label id = "table_cz_title" style="display:inline;">...</label>
            <div id = 'table_cz_content' style="width:100%;display:none">
            <table  border="1" style="width:100%;">
            <tr>
              <th colspan="2">站名</th>
              <th colspan="">平均流量</th>
              <th colspan="">总流量</th>
            </tr>
              <tr>
                <td rowspan="2">太浦自动闸</td>
                <td >入湖</td>
                <td >3.48</td>
                <td >330.74</td>
              </tr>
              <tr>
                <td >出湖</td>
                <td >0.7</td>
                <td >66.53</td>
              </tr>
              <tr>
                <td rowspan="2">太浦自动闸</td>
                <td >入湖</td>
                <td >3.48</td>
                <td >330.74</td>
              </tr>
              <tr>
                <td >出湖</td>
                <td >0.7</td>
                <td >66.53</td>
              </tr>
              <tr>
                <td rowspan="2">太浦自动闸</td>
                <td >入湖</td>
                <td >3.48</td>
                <td >330.74</td>
              </tr>
              <tr>
                <td >出湖</td>
                <td >0.7</td>
                <td >66.53</td>
              </tr>

              <tr>
                <td rowspan="2">太浦自动闸</td>
                <td >入湖</td>
                <td >3.48</td>
                <td >330.74</td>
              </tr>
              <tr>
                <td >出湖</td>
                <td >0.7</td>
                <td >66.53</td>
              </tr>

              <tr>
                <td rowspan="2">太浦自动闸</td>
                <td >入湖</td>
                <td >3.48</td>
                <td >330.74</td>
              </tr>
              <tr>
                <td >出湖</td>
                <td >0.7</td>
                <td >66.53</td>
              </tr>
            </table>
          </div>
        </td>
      </tr>
    </table>
    </div>


  </div>

</template>

<script>

export default {
  name: 'normaltjMod',
  props: ['echarts'],
  components: {
  // <my-component> 将只在父模板可用

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
  updated:function(){
    alert(2)
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

      var option = {
          title: {
              text: '太湖水量变化趋势'
          },
          legend:{
            show:true
          },
          grid:{
            top:'20%',
            bottom:'20%',
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
              data:['12-12','12-13','12-14','12-15'],
              boundaryGap: ['50%', '50%'],
              splitLine: {
                  show: false
              }
          },
          yAxis: [{
              type: 'value',
              boundaryGap: [0, '100%'],
              splitLine: {
                  show: true
              }
          },{
              type: 'value',
              boundaryGap: [0, '100%'],
              splitLine: {
                  show: true
              }
          }],
          series: [{
              name: '模拟数据',
              type: 'line',
              showSymbol: false,
              hoverAnimation: false,
              data: [100,150,200,250]
          },{
              name: '望虞河',
              type: 'bar',

              yAxisIndex:1,
              data: [1,2,3,4]
          },{
              name: '望亭',
              type: 'bar',

              yAxisIndex:1,
              data: [4,2,3,1]
          }]
      };
      var chart = echarts.init(document.getElementById('chartContent'));
      chart.setOption(option);
    }

  }
}

</script>

<style>

</style>
