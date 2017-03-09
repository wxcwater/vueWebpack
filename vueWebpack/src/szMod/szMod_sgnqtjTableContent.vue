<template>
    <div>
      <table border="1" style="width:100%"class="">
        <tr>
          <th colspan="1" rowspan="2">水功能区</th>
          <th colspan="2">监测断面</th>
          <th colspan="" rowspan="2">水质类别</th>
          <th colspan="" rowspan="2">达标情况</th>
        </tr>
        <tr>
          <th colspan="1">断面名称</th>
          <th colspan="1">水质类别(目标)</th>
        </tr>
          <tr>
            <td rowspan="5">太湖苏浙边界缓冲区</td>
            <td rowspan="1">J21#夹浦</td>
            <td >III(IV)</td>
            <td rowspan="5">III(IV)</td>
            <td rowspan="5">达标</td>
          </tr>
          <tr>

            <td rowspan="1">J22#新塘</td>
            <td ><font style='color:red;'>III(II)</font></td>

          </tr>
          <tr>

            <td rowspan="1">J23#小梅口</td>
            <td >III(IV)</td>

          </tr>
          <tr>

            <td rowspan="1">J24#大钱</td>
            <td >III(IV)</td>

          </tr>
          <tr>

            <td rowspan="1">汤娄</td>
            <td >III(IV)</td>

          </tr>
          <tr>
            <th >未达标<font style='color:red'>1</font>个测站</th>
            <th >最差站点</th>
            <th >J22#新塘</th>
            <th >达标率</th>
            <th >80%</th>
          </tr>
        </table>
    </div>
</template>

<script>
export default {
  name: 'xzfqjtable',
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
