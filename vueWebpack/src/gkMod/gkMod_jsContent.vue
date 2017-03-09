<template>
    <div id="basic" class="tab-pane ">

      <div id="tableContent" style="height:70%;max-height:220px;width:100%;margin-top:5px;overflow:auto">
        <table border="1" style="width:100%"class="table table-striped table-bordered table-hover">
          <tr>
            <th >数据表格</th>

          </tr>
          <tr>
            <td  style="padding-left:3px;">
              <i class="fa fa-plus-square-o" aria-hidden="true" onclick="table_slfq_clickHandler()"></i>
              <a>超过标准电压</a>
              合计3个测站
            </td>

          </tr>
        <tr>
          <td  style="padding-left:3px;" >
            <i id="table_slfq_icon" class="fa fa-plus-square-o" aria-hidden="true" onclick="table_slfq_clickHandler()"></i>
            <a>低于标准电压</a>
            <label id = "table_slfq_title" style="display:inline;">合计3个测站</label>
            <div id = 'table_slfq_content' style="width:100%;display:none" >
              <table  border="1" style="width:100%;">
                <tr>
                  <th>测站名称</th>
                  <th colspan="">测站类别</th>
                  <th colspan="">当前电压</th>
                  <th colspan="">当前温度</th>
                  <th colspan="">故障时间</th>
                  <th colspan="">所属项目</th>
                  <th colspan="">管理单位</th>
                </tr>
                <tr>
                  <td>太浦闸</td>
                  <td >水质水量站</td>
                  <td >12</td>
                  <td >12</td>
                  <td >8</td>
                  <td >原有测站</td>
                  <td >太湖局</td>
                </tr>
                <tr>
                  <td>太浦闸</td>
                  <td >水质水量站</td>
                  <td >12</td>
                  <td >12</td>
                  <td >8</td>
                  <td >原有测站</td>
                  <td >太湖局</td>
                </tr>
                <tr>
                  <td>太浦闸</td>
                  <td >水质水量站</td>
                  <td >12</td>
                  <td >12</td>
                  <td >8</td>
                  <td >原有测站</td>
                  <td >太湖局</td>
                </tr>
              </table>
          </div>
          </td>
        </tr>
        <tr>
          <td  style="padding-left:3px;" >
            <i id="table_slfq_icon" class="fa fa-plus-square-o" aria-hidden="true" onclick="table_slfq_clickHandler()"></i>
            <a>其他测站</a>运行良好测站300个,数据到爆率80%
            <label id = "table_cz_title" style="display:inline;">...</label>
            <div id = 'table_cz_content' style="width:100%;display:none">
              <table  border="1" style="width:100%;">
                <tr>
                  <th>测站名称</th>
                  <th colspan="">测站类别</th>
                  <th colspan="">当前电压</th>
                  <th colspan="">当前温度</th>
                  <th colspan="">故障时间</th>
                  <th colspan="">所属项目</th>
                  <th colspan="">管理单位</th>
                </tr>
                <tr>
                  <td>太浦闸</td>
                  <td >水质水量站</td>
                  <td >12</td>
                  <td >12</td>
                  <td >8</td>
                  <td >原有测站</td>
                  <td >太湖局</td>
                </tr>
                <tr>
                  <td>太浦闸</td>
                  <td >水质水量站</td>
                  <td >12</td>
                  <td >12</td>
                  <td >8</td>
                  <td >原有测站</td>
                  <td >太湖局</td>
                </tr>
                <tr>
                  <td>太浦闸</td>
                  <td >水质水量站</td>
                  <td >12</td>
                  <td >12</td>
                  <td >8</td>
                  <td >原有测站</td>
                  <td >太湖局</td>
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
  name: 'gkMod_jsMod',
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
