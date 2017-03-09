<template>
  <div id="basic" class="tab-pane ">
  <label class="pull-left inline">
  <small class="muted smaller-90">只展示<font style='color:red'>xx</font>个超标站</small>

  <input id="id-button-borders" class="ace ace-switch ace-switch-5" type="checkbox" @click='changeTableType()'>
  <span class="lbl middle"></span>
  </label>
  <div id="js_tableContent" style="height:480px;0%;width:100%;margin-top:5px;overflow:auto;">
  <table border="1" style="width:100%"class="table table-striped table-bordered table-hover">
  <tr>
  <th colspan="1">站名</th>
  <th colspan="1">时间</th>
  <th colspan="">水温</th>
  <th colspan="">溶解氧</th>
  <th colspan="">电导率</th>
  <th colspan="">浊度</th>
  <th colspan="">蓝绿藻</th>
  </tr>
  <tr>
  <td rowspan="3">太浦口浮台站</td>
  <td >06-20 08:00</td>
  <td ></td>
  <td ></td>
  <td ></td>
  <td ></td>
  <td ></td>
  </tr>
  <tr>

  <td >06-20 10:00</td>
  <td ></td>
  <td ></td>
  <td ></td>
  <td ></td>
  <td ></td>
  </tr>
  <tr>

  <td >06-20 12:00</td>
  <td ></td>
  <td ></td>
  <td ></td>
  <td ></td>
  <td ></td>
  </tr>
  <tr>
  <td rowspan="3">J14#焦山</td>
  <td >06-20 08:00</td>
  <td ></td>
  <td ></td>
  <td ></td>
  <td ></td>
  <td ></td>
  </tr>
  <tr>

  <td >06-20 10:00</td>
  <td ></td>
  <td ></td>
  <td ></td>
  <td ></td>
  <td ></td>
  </tr>
  <tr>

  <td >06-20 12:00</td>
  <td ></td>
  <td ></td>
  <td ></td>
  <td ></td>
  <td ></td>
  </tr>
  <tr>
  <td rowspan="3">J19#平台山</td>
  <td >06-20 08:00</td>
  <td ></td>
  <td ></td>
  <td ></td>
  <td ></td>
  <td ></td>
  </tr>
  <tr>

  <td >06-20 10:00</td>
  <td ></td>
  <td ></td>
  <td ></td>
  <td ></td>
  <td ></td>
  </tr>
  <tr>

  <td >06-20 12:00</td>
  <td ></td>
  <td ></td>
  <td ></td>
  <td ></td>
  <td ></td>
  </tr>
  <tr>
  <td rowspan="3">小梅口</td>
  <td >06-20 08:00</td>
  <td ></td>
  <td ></td>
  <td ></td>
  <td ></td>
  <td ></td>
  </tr>
  <tr>

  <td >06-20 10:00</td>
  <td ></td>
  <td ></td>
  <td ></td>
  <td ></td>
  <td ></td>
  </tr>
  <tr>

  <td >06-20 12:00</td>
  <td ></td>
  <td ></td>
  <td ></td>
  <td ></td>
  <td ></td>
  </tr>
  <tr>
  <td rowspan="3">元荡</td>
  <td >06-20 08:00</td>
  <td ></td>
  <td ></td>
  <td ></td>
  <td ></td>
  <td ></td>
  </tr>
  <tr>

  <td >06-20 10:00</td>
  <td ></td>
  <td ></td>
  <td ></td>
  <td ></td>
  <td ></td>
  </tr>
  <tr>

  <td >06-20 12:00</td>
  <td ></td>
  <td ></td>
  <td ></td>
  <td ></td>
  <td ></td>
  </tr>

  </table>
  </div>
  </div>
</div>

</template>

<script>

export default {
  name: 'lzMod_jsMod',
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

  },
  updated:function(){

  },
  methods:{


  }
}

</script>

<style>

</style>
