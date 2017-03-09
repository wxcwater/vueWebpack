<template>
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

</template>

<script>
export default {
  name: 'normaltjtable',
  props: [],
  data:function(){

    return {

    }
  },
  created:function(){
    //alert('1');
  },
  methods:{
    test:function(){
      alert(1);
    },
    onChange:function(name){
        alert(name);
        for(let i = 0;i<this.layers.length;i++){
          if(this.layers[i].name==name){
            this.layers[i].checked = !this.layers[i].checked;
          }
        }
         this.checkedLayers = [];
        for(let i = 0;i<this.layers.length;i++){
          if(this.layers[i].checked){
            this.checkedLayers.push(this.layers[i].name);
          }
        }

    }
  }
}

</script>

<style>

</style>
