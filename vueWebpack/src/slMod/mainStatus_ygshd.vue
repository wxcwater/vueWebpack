<template>
  <div class="widget-box transparent" id="widget-box-12">
  <div class="widget-header">
  <h6 class="widget-title lighter ui-sortable-handle">引供水河道、沿长江、沿杭州湾</h6>


  </div>

  <div class="widget-body">
  <div class="widget-main padding-6 no-padding-left no-padding-right">
    <table border="1" class="myTable">
    <thead >
    <tr>
      <th>
      站名
      </th>
      <th>
      上/下水位
      </th>
      <th>
      引供水量/年累计
      </th>
      <th>
      排水量/年累计
      </th>

    </tr>
    </thead>
  <tbody>

        <tr v-for="station in stations">

          <td>
            <a class='stationName'>{{station.name}}</a>
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
  name: 'mainStatus_ygshd',
  props: ['echarts','addComponents'],
  components: {
    // <my-component> 将只在父模板可用

  },

  data:function(){
    var stations = [{'name':'常熟枢纽','z':135.50,'inW':150.00,'inWy':140.50,'otW':0,'otWy':140.50},
  {'name':'望亭枢纽','z':135.50,'inW':150.00,'inWy':140.50,'otW':0,'otWy':140.50},
{'name':'太浦闸','z':135.50,'inW':150.00,'inWy':140.50,'otW':0,'otWy':140.50},
{'name':'沿江各闸','z':135.50,'inW':150.00,'inWy':140.50,'otW':0,'otWy':140.50},
{'name':'南排工程','z':135.50,'inW':150.00,'inWy':140.50,'otW':0,'otWy':140.50}];
    return{
      'stations':stations
    }
  },
  methods:{

  }
}

</script>

<style>

</style>
