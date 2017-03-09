<template>
<table border="1" style="width:100%"class="">
<tr>
  <th colspan="1">河流</th>
  <th colspan="2">站名</th>
  <th colspan="">平均流量</th>
  <th colspan="">总流量</th>
  <th colspan="">总水量</th>

</tr>
  <tr>
    <td rowspan="6">望虞河</td>
    <td rowspan="2">太浦自动闸</td>
    <td >入湖</td>
    <td >3.48</td>
    <td >330.74</td>
    <td rowspan="2">+264.21</td>
    
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
    <td rowspan="2">+264.21</td>
    
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
    <td rowspan="2">+264.21</td>
    
  </tr>
  <tr>
    <td >出湖</td>
    <td >0.7</td>
    <td >66.53</td>
  </tr>

  <tr>
    <td rowspan="4">太浦河</td>
    <td rowspan="2">太浦自动闸</td>
    <td >入湖</td>
    <td >3.48</td>
    <td >330.74</td>
    <td rowspan="2">+264.21</td>
    
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
    <td rowspan="2">+264.21</td>
    
  </tr>
  <tr>
    <td >出湖</td>
    <td >0.7</td>
    <td >66.53</td>
  </tr>
</table>
</template>

<script>
export default {
  name: 'hhhltjtable',
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
