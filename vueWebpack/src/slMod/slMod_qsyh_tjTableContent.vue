<template>
    <table border="1" style="width:100%"class="">
    <tr>
      <th colspan="1">取水用户</th>
      <th colspan="1">关联站</th>
      <th colspan="">平均流量</th>
      <th colspan="">总取水</th>
      <th colspan="">月计划量</th>

    </tr>
      <tr>
        <td rowspan="1">取水用户1</td>
        <td rowspan="1">太浦自动闸</td>
        <td >3.48</td>
        <td >330.74</td>
        <td >500</td>

      </tr>
      <tr>
        <td rowspan="1">取水用户1</td>
        <td rowspan="1">太浦自动闸</td>
        <td >3.48</td>
        <td >330.74</td>
        <td >500</td>

      </tr>
      <tr>
        <td rowspan="1">取水用户1</td>
        <td rowspan="1">太浦自动闸</td>
        <td >3.48</td>
        <td >330.74</td>
        <td >500</td>

      </tr>
      <tr>
        <td rowspan="1">取水用户1</td>
        <td rowspan="1">太浦自动闸</td>
        <td >3.48</td>
        <td >330.74</td>
        <td >500</td>

      </tr>
      <tr>
        <td rowspan="1">取水用户1</td>
        <td rowspan="1">太浦自动闸</td>
        <td >3.48</td>
        <td >330.74</td>
        <td >500</td>

      </tr>
    </table>
    
</template>

<script>
export default {
  name: 'qsyhtjtable',
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
