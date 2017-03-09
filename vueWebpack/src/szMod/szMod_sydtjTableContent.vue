<template>
    <div>
      <table border="1" style="width:100%"class="">
        <tr>
          <th colspan="1" rowspan="2">水源地</th>
          <th colspan="2">关联测站</th>
          <th colspan="" rowspan="2">水质类别</th>
          <th colspan="" rowspan="2">达标情况</th>
        </tr>
        <tr>
          <th colspan="1">测站名称</th>
          <th colspan="1">水质类别(目标)</th>
        </tr>
          <tr>
            <td rowspan="1">金墅湾水源地</td>
            <td rowspan="1">J21#夹浦</td>
            <td >III(IV)</td>
            <td rowspan="1">III(IV)</td>
            <td rowspan="1">达标</td>
          </tr>

          <!-- <tr>
            <th >未达标<font style='color:red'>1</font>个测站</th>
            <th >最差站点</th>
            <th >J22#新塘</th>
            <th >达标率</th>
            <th >80%</th>
          </tr> -->
        </table>
    </div>
</template>

<script>
export default {
  name: 'sydtjtable',
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
      .FixedHeaderColumnsTableDiv
      {
          overflow: auto;
          position: relative;
      }
      .FixedCell
      {
          position: relative;
          top: expression(this.offsetParent.scrollTop);
          left: expression(this.parentElement.offsetParent.scrollLeft);
          z-index: 1800;
      }
      .FixedHeaderRow1
      {
          position: relative;
          top: expression(this.offsetParent.scrollTop);
          background-color: #ccc;
          z-index: 300;
      }
      .FixedHeaderRow2
      {
          position: relative;
          top: expression(this.offsetParent.scrollTop);
          z-index: 290;
          background-color:#ffccff;
      }
      .FixedDataColumn
      {
          position: relative;
          left: expression(this.parentElement.offsetParent.parentElement.scrollLeft);
          z-index: 200;
          background-color: Aqua;
      }
</style>
