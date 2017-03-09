
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
    <div id="tableContent" style="height:70%;max-height:245px;width:100%;margin-top:5px;overflow:auto">
    <table border="1" style="width:100%"class="">
    <tr>
      <th colspan="1">河流</th>
      <th colspan="2">站名</th>
      <th colspan="">平均流量</th>
      <th colspan="">总流量</th>
      <th colspan="">总水量</th>
      <th colspan="">入湖率</th>
    </tr>
      <tr>
        <td rowspan="6">望虞河</td>
        <td rowspan="2">太浦自动闸</td>
        <td >入湖</td>
        <td >3.48</td>
        <td >330.74</td>
        <td rowspan="2">+264.21</td>
        <td rowspan="2">80%</td>
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
        <td rowspan="2">+264.21</td>
        <td rowspan="2">80%</td>
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
        <td rowspan="2">+264.21</td>
        <td rowspan="2">80%</td>
      </tr>
      <tr>
        <td >出湖</td>
        <td >0.7</td>
        <td >66.53</td>
      </tr>

      <tr>
        <td rowspan="4">太浦河</td>
        <td rowspan="2">太浦自动闸</td>
        <td >入湖</td>
        <td >3.48</td>
        <td >330.74</td>
        <td rowspan="2">+264.21</td>
        <td rowspan="2">80%</td>
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
        <td rowspan="2">+264.21</td>
        <td rowspan="2">80%</td>
      </tr>
      <tr>
        <td >出湖</td>
        <td >0.7</td>
        <td >66.53</td>
      </tr>
    </table>
        </div>
      </td>
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
    </table>
</div>


  </div>

</template>

<script>
import hhhltjTableContent from './slMod_hhhl_tjTableContent.vue'

export default {
  name: 'ygshdtjMod',
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

    var option_ygshd = {
          title: {
              text: '引供水河道水量'
          },
          legend:{
            show:true,
            x:'right',
            data:['引供水','排水'],
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
              name: '实际入湖',
              type: 'bar',
              stack:'入湖',
              showSymbol: false,
              hoverAnimation: false,
              data: [100,150,200,0]
          },{
              name: '饮水',
              type: 'bar',
              stack:'入湖',
              showSymbol: false,
              hoverAnimation: false,
              data: [100,150,200,0]
          },{
              name: '出湖',
              type: 'bar',
              showSymbol: false,
              hoverAnimation: false,
              data: [0,0,0,500]
          }]
      };
      var chart = echarts.init(document.getElementById('chartContent'));
      chart.setOption(option_ygshd);
    }

  }
}

</script>

<style>

</style>
