
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
  <div class="btn-group">

                <button data-toggle="dropdown" class="btn btn-primary btn-white dropdown-toggle" aria-expanded="false">
                  全水利分区
                  <i class="ace-icon fa fa-angle-down icon-on-right"></i>
                </button>

                <ul class="dropdown-menu">
                  <li>
                    <a href="#">湖西区</a>
                  </li>

                  <li>
                    <a href="#">物澄锡虞区</a>
                  </li>

                  <li>
                    <a href="#">阳澄淀区</a>
                  </li>



                  <li>
                    <a href="#">杭嘉湖区</a>
                  </li>
                  <li>
                    <a href="#">浙西区</a>
                  </li>
                  <li>
                    <a href="#">太浦闸</a>
                  </li>
                  <li>
                    <a href="#">望亭立交</a>
                  </li>
                </ul>
              </div>
              <label>流量水量对比</label>
    <div id="chartContent" style="height:30%;width:100%;"></div>
      <div class="hr hr5 hr-dotted"></div>
    <div id="tableContent" style="height:200px;0%;width:100%;margin-top:5px;overflow:scroll;">
      <table border="1" style="width:100%"class="">
      <tr>
        <th colspan="1">水利分区</th>
        <th colspan="2">站名</th>
        <th colspan="">平均流量</th>
        <th colspan="">总流量</th>
      </tr>
        <tr>
          <td rowspan="10">湘西区</td>
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
        <tr>
          <td rowspan="10">湘西区</td>
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


  </div>

</template>

<script>
import hhhltjTableContent from './slMod_hhhl_tjTableContent.vue'

export default {
  name: 'slfqtjMod',
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

      var option = {
          title: {
              text: ''
          },
          grid:{
            top:'5%',
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
              data:['2-05','2-06','2-07','2-08','2-09','2-10','2-11','2-12','2-13'],
              axisLabel:{
                rotate:60,
                interval:0,
                textSymbol:{
                  fontSize:5
                }
              },
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
              name: '流量',
              type: 'bar',
              showSymbol: false,
              hoverAnimation: false,
              data: [100,150,200,250,100,150,200,250,300]
          },{
              name: '水量',
              type: 'bar',
              showSymbol: false,
              hoverAnimation: false,
              data: [10,15,20,25,10,15,20,25,30]
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
