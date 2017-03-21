<template>
  <div class="widget-box transparent" id="widget-box-12">
  <div class="widget-header">
  <h6 class="widget-title lighter ui-sortable-handle">环湖河流</h6>


  </div>

  <div class="widget-body">
  <div class="widget-main padding-6 no-padding-left no-padding-right">
    <table border="1" class="myTable">
    <thead >
    <tr>
      <th>
      水利分区
      </th>
      <th>
      入湖流量
      </th>
      <th>
      出湖流量
      </th>
      <th>
      入湖水量
      </th>
      <th>
      出湖水量
      </th>
    </tr>
    </thead>
  <tbody>

        <tr v-for="station in stations">

          <td>
            {{station.name}}
          </td>
            <td>
            {{station.inQ}}
          </td>
          <td>
            {{station.otQ}}
          </td>
          <td>
            {{station.inW}}
          </td>
          <td>
            {{station.otW}}
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
  name: 'mainStatus_hhhl',
  props: ['echarts','addComponents'],
  components: {
    // <my-component> 将只在父模板可用

  },

  data:function(){
    var stations = [{'name':'杭嘉湖区','inQ':135.50,'otQ':150.00,'inW':140.50,'otW':0},
    {'name':'浙西区','inQ':135.50,'otQ':150.00,'inW':140.50,'otW':0},
    {'name':'太浦闸','inQ':135.50,'otQ':150.00,'inW':140.50,'otW':0},
    {'name':'望亭立交','inQ':135.50,'otQ':150.00,'inW':140.50,'otW':0},
    {'name':'合计','inQ':135.50,'otQ':150.00,'inW':140.50,'otW':0}
  ];
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
  font-weight: bolder;
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
