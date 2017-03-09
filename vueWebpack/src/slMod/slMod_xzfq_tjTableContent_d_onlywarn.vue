<template>
    <div>
    <table border="1" style="width:100%;overflow:auto">
    <tr>
      <th colspan="1" style='min-width:40px;'>行政区</th>
      <th colspan="1" style='min-width:100px;'>取水用户</th>
      <th colspan="1">1日</th>
      <th colspan="1">2日</th>
      <th colspan="1">3日</th>
      <th colspan="1">4日</th>
      <th colspan="1">5日</th>
      <th colspan="1">6日</th>
      <th colspan="1">7日</th>
      <th colspan="1">8日</th>
      <th colspan="1">9日</th>
    </tr>
      <tr>
        <td rowspan="7">湖州市</td>
        <td rowspan="1">取水用户1</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
      </tr>
      <tr>
        <td rowspan="1">取水用户1</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
      </tr>
      <tr>
        <td rowspan="1">取水用户2</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
      </tr>
      <tr>
        <td rowspan="1">取水用户3</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
      </tr>
      <tr>
        <td rowspan="1">取水用户4</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
      </tr>
      <tr>
        <td rowspan="1">取水用户5</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
      </tr>
      <tr>
        <td rowspan="1">取水用户6</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
        <td rowspan="1">10</td>
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
