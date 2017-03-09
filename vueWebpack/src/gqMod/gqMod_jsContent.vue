<template>
  <div id="basic" class="tab-pane ">
  <label class="pull-left inline">
  <small class="muted smaller-90">只展示<font style='color:blue'>3</font>个开启站</small>

  <input id="id-button-borders" class="ace ace-switch ace-switch-5" type="checkbox" @click='changeTableType()'>
  <span class="lbl middle"></span>
  </label>
  <div id="tableContent" style="height:90%;max-height:220px;width:100%;margin-top:5px;overflow:auto">
  <table border="1" style="width:100%"class="table table-striped table-bordered table-hover">
  <tr>
  <th colspan="1">站名</th>
  <th colspan="1">时间</th>
  <th colspan="">闸上水位</th>
  <th colspan="">闸下水位</th>
  <th colspan="">闸位</th>
  <th colspan="">过闸流量</th>
  </tr>
  <tr>
  <td rowspan="1">太浦自动闸</td>
  <td >02-13 08:00</td>
  <td >38.5</td>
  <td >24.5</td>
  <td >30</td>
  <td >8</td>
  </tr>
  <tr>
  <td rowspan="1">太浦自动闸</td>
  <td >02-13 08:00</td>
  <td >38.5</td>
  <td >24.5</td>
  <td >30</td>
  <td >8</td>
  </tr>
  <tr>
  <td rowspan="1">太浦自动闸</td>
  <td >02-13 08:00</td>
  <td >38.5</td>
  <td >24.5</td>
  <td >30</td>
  <td >8</td>
  </tr>
  <tr>
  <td rowspan="1">太浦自动闸</td>
  <td >02-13 08:00</td>
  <td >38.5</td>
  <td >24.5</td>
  <td >30</td>
  <td >8</td>
  </tr>
  <tr>
  <td rowspan="1">太浦自动闸</td>
  <td >02-13 08:00</td>
  <td >38.5</td>
  <td >24.5</td>
  <td >30</td>
  <td >8</td>
  </tr>
  <tr>
  <td rowspan="1">太浦自动闸</td>
  <td >02-13 08:00</td>
  <td >38.5</td>
  <td >24.5</td>
  <td >30</td>
  <td >8</td>
  </tr>
  <tr>
  <td rowspan="1">太浦自动闸</td>
  <td >02-13 08:00</td>
  <td >38.5</td>
  <td >24.5</td>
  <td >30</td>
  <td >8</td>
  </tr>
  <tr>
  <td rowspan="1">太浦自动闸</td>
  <td >02-13 08:00</td>
  <td >38.5</td>
  <td >24.5</td>
  <td >30</td>
  <td >8</td>
  </tr>
  <tr>
  <td rowspan="1">太浦自动闸</td>
  <td >02-13 08:00</td>
  <td >38.5</td>
  <td >24.5</td>
  <td >30</td>
  <td >8</td>
  </tr>
  <tr>
  <td rowspan="1">太浦自动闸</td>
  <td >02-13 08:00</td>
  <td >38.5</td>
  <td >24.5</td>
  <td >30</td>
  <td >8</td>
  </tr>
  <tr>
  <td rowspan="1">太浦自动闸</td>
  <td >02-13 08:00</td>
  <td >38.5</td>
  <td >24.5</td>
  <td >30</td>
  <td >8</td>
  </tr>
  <tr>
  <td rowspan="1">太浦自动闸</td>
  <td >02-13 08:00</td>
  <td >38.5</td>
  <td >24.5</td>
  <td >30</td>
  <td >8</td>
  </tr>
  <tr>
  <td rowspan="1">太浦自动闸</td>
  <td >02-13 08:00</td>
  <td >38.5</td>
  <td >24.5</td>
  <td >30</td>
  <td >8</td>
  </tr>
  <tr>
  <td rowspan="1">太浦自动闸</td>
  <td >02-13 08:00</td>
  <td >38.5</td>
  <td >24.5</td>
  <td >30</td>
  <td >8</td>
  </tr>
  <tr>
  <td rowspan="1">太浦自动闸</td>
  <td >02-13 08:00</td>
  <td >38.5</td>
  <td >24.5</td>
  <td >30</td>
  <td >8</td>
  </tr>
  <tr>
  <td rowspan="1">太浦自动闸</td>
  <td >02-13 08:00</td>
  <td >38.5</td>
  <td >24.5</td>
  <td >30</td>
  <td >8</td>
  </tr>
  <tr>
  <td rowspan="1">太浦自动闸</td>
  <td >02-13 08:00</td>
  <td >38.5</td>
  <td >24.5</td>
  <td >30</td>
  <td >8</td>
  </tr>
  <tr>
  <td rowspan="1">太浦自动闸</td>
  <td >02-13 08:00</td>
  <td >38.5</td>
  <td >24.5</td>
  <td >30</td>
  <td >8</td>
  </tr>
  <tr>
  <td rowspan="1">太浦自动闸</td>
  <td >02-13 08:00</td>
  <td >38.5</td>
  <td >24.5</td>
  <td >30</td>
  <td >8</td>
  </tr>
  <tr>
  <td rowspan="1">太浦自动闸</td>
  <td >02-13 08:00</td>
  <td >38.5</td>
  <td >24.5</td>
  <td >30</td>
  <td >8</td>
  </tr>
  </table>
  </div>
  </div>

</template>

<script>

export default {
  name: 'gqMod_jsMod',
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
