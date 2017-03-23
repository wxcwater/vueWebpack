<template>
  <div class="widget-box transparent" id="widget-box-12">
  <div class="widget-header">
  <h6 class="widget-title lighter ui-sortable-handle">取水用户</h6>


  </div>

  <div class="widget-body">
  <div class="widget-main padding-6 no-padding-left no-padding-right">
    <table border="1" class="myTable">
    <thead >
    <tr>
      <th>
      取水用户
      </th>
      <th>
      日取水量
      </th>
      <th>
      月累计值/计划值
      </th>
      <th>
      年累计值/计划值
      </th>

    </tr>
    </thead>
  <tbody>

        <tr v-for="station in stations">

          <td>
            {{station.name}}
          </td>
            <td>
            {{station.z}}
          </td>
          <td>
            {{station.inW}}/{{station.inWy}}
          </td>
          <td>
            {{station.otW}}/{{station.otWy}}
          </td>

        </tr>
  </tbody>
  </table>
</div>
  </div>
  </div>
</template>
<script>

export default {
  name: 'mainStatus_qsyh',
  props: ['echarts','addComponents'],
  components: {
    // <my-component> 将只在父模板可用

  },

  data:function(){
    var stations = [{'name':'常熟水利枢纽','z':135.50,'inW':150.00,'inWy':140.50,'otW':0,'otWy':140.50,}];
    return{
      'stations':stations
    }
  },
  methods:{

  }
}

</script>

<style>
.myTable{
  border: 1px;
  width: 100%;
}
.myTable th{
  background-color: #a4c2f4;
  font-size:7px;
  font-weight: normal;
  text-align: center;
}
.myTable tr:nth-child(even){
  background-color: #e2ecf6;
  text-align: center;
}
.myTable tr:nth-child(odd){
  /*background-color : black;*/
  text-align: center;
}
</style>
