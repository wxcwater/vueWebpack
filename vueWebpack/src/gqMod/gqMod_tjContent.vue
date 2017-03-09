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
      对比指标:蓝绿藻
          <i class="ace-icon fa fa-angle-down icon-on-right"></i>
        </button>
      <ul class="dropdown-menu">
        <li>
          <a href="#" @click ="changeObjectType('1')">溶解氧</a>
        </li>
        <li>
          <a href="#" @click ="changeObjectType('2')">电导率</a>
        </li>
        <li>
          <a href="#" @click ="changeObjectType('3')">浊度</a>
        </li>

      </ul>
    </div>
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
  <label class="widget-title lighter">
      <i class="ace-icon fa fa-film orange"></i>
      影像成果
    </label>
    <div class="bs-example" data-example-id="simple-thumbnails">
      <div data-toggle="buttons" class="btn-group">

        <button type="radio" class="btn btn-white btn-sm btn-primary" @click='changeImgSrc(1);'>卫星遥感影像</button>
        <button type="radio" class="btn btn-white btn-sm btn-primary" @click='changeImgSrc(2);'>解译结果图</button>
      </div>
        <div class="row">
          <div class="col-xs-6 col-md-4">
            <a href="#" class="thumbnail">
              <img id='eximg1' data-src="holder.js/100%x180" alt="100%x180" style="height: 80px; width: 100%; display: block;" src="../gis/assets/lztg1.jpg" data-holder-rendered="true">
            </a>
          </div>
          <div class="col-xs-6 col-md-4">
            <a href="#" class="thumbnail">
              <img id='eximg2' data-src="holder.js/100%x180" alt="100%x180" style="height: 80px; width: 100%; display: block;" src="../gis/assets/lztg1.jpg" data-holder-rendered="true">
            </a>
          </div>
          <div class="col-xs-6 col-md-4">
            <a href="#" class="thumbnail">
              <img id='eximg3' data-src="holder.js/100%x180" alt="100%x180" style="height: 80px; width: 100%; display: block;" src="../gis/assets/lztg1.jpg" data-holder-rendered="true">
            </a>
          </div>
          <!-- <div class="col-xs-6 col-md-3">
            <a href="#" class="thumbnail">
              <img id='eximg4' data-src="holder.js/100%x180" alt="100%x180" style="height: 50px; width: 100%; display: block;" src="src/assets/lztg1.jpg" data-holder-rendered="true">
            </a>
          </div> -->
          <span class="ui-slider-red ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" style="width: 90%; float: left; margin: 15px;"><div class="ui-slider-range ui-widget-header ui-corner-all ui-slider-range-min" style="width: 43%;"></div><span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style="left: 43%;"></span></span>

        </div>
        </div>
  </div>

</template>

<script>

export default {
  name: 'lznormaltjMod',
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
