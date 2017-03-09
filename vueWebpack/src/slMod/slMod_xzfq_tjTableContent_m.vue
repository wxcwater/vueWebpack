<template>
    <div>
    <table border="1" style="width:100%;overflow:auto">
    <tr>
      <th colspan="1" rowspan="2" style='min-width:40px;'>行政区</th>
      <th colspan="1" rowspan="2" style='min-width:100px;'>取水用户</th>
      <th colspan="3">x月</th>
      <th colspan="2">合计</th>


    </tr>
    <tr>

      <th colspan="1">取水</th>
      <th colspan="1">计划</th>
      <th colspan="1">限制</th>
      <th colspan="1">取水</th>
      <th colspan="1">计划</th>
    </tr>
      <tr>
        <td rowspan="2">湖州市</td>
        <td rowspan="1"><font color='red'>取水用户1</font></td>
        <td rowspan="1"><font color='red'>10</font></td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="2">10</td>
        <td rowspan="2">10</td>
      </tr>
      <tr>
        <td rowspan="1">取水用户2</td>
        <td rowspan="1">10</td>
        <td rowspan="1">20</td>
        <td rowspan="1">30</td>
      </tr>
      <tr>
        <th rowspan="1">统计</th>
        <th rowspan="1">取水用户</th>
        <th rowspan="1">2</th>
        <th rowspan="1">超计划</th>
        <th rowspan="1"><font color='red'>1</font></th>
        <th rowspan="1">超限制</th>
        <th rowspan="1"><font color='red'>0</font></th>
      </tr>
      <tr>
        <td rowspan="2">湖州市</td>
        <td rowspan="1">取水用户1</td>
        <td rowspan="1">10</td>
        <td rowspan="1">20</td>
        <td rowspan="1">30</td>
        <td rowspan="2">10</td>
        <td rowspan="2">20</td>
      </tr>
      <tr>

        <td rowspan="1">取水用户2</td>
        <td rowspan="1">10</td>
        <td rowspan="1">20</td>
        <td rowspan="1">30</td>

      </tr>
      <tr>
        <th rowspan="1">统计</th>
        <th rowspan="1">取水用户</th>
        <th rowspan="1">2</th>
        <th rowspan="1">超计划</th>
        <th rowspan="1"><font color='red'>1</font></th>
        <th rowspan="1">超限制</th>
        <th rowspan="1"><font color='red'>0</font></th>
      </tr>
      <tr>
        <td rowspan="2">湖州市</td>
        <td rowspan="1">取水用户1</td>
        <td rowspan="1">10</td>
        <td rowspan="1">20</td>
        <td rowspan="1">30</td>
        <td rowspan="2">10</td>
        <td rowspan="2">50</td>
      </tr>
      <tr>

        <td rowspan="1">取水用户2</td>
        <td rowspan="1">10</td>
        <td rowspan="1">20</td>
        <td rowspan="1">30</td>

      </tr>
      <tr>
        <th rowspan="1">统计</th>
        <th rowspan="1">取水用户</th>
        <th rowspan="1">2</th>
        <th rowspan="1">超计划</th>
        <th rowspan="1"><font color='red'>1</font></th>
        <th rowspan="1">超限制</th>
        <th rowspan="1"><font color='red'>0</font></th>
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
</st3le>月
