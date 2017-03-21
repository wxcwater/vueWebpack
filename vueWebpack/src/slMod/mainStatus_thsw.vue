<template>
<div class="widget-box transparent " id="widget-box-12" >
  <div class="widget-header">
    <h6 class="widget-title lighter ui-sortable-handle">太湖水位</h6>
</div>

  <div class="widget-body contentComponent " >
    <div class="widget-main padding-6 no-padding-left no-padding-right">
      <table class='myTable' border='1'>
        <thead >
        <tr>
          <th>
          时间
          </th>
          <th>
          站点
          </th>
          <th>
          水位
          </th>
          <th>
          警戒水位
          </th>
          <th>
          保证水位
          </th>
        </tr>
        </thead>
      <tbody>
            <tr v-for="(station,index) in stations">
              <td v-if="index==0" rowspan="5">
              当前时间
              </td>
              <td>
                {{station.name}}
              </td>
                <td>
                {{station.z}}
              </td>
              <td>
                {{station.wrz}}
              </td>
              <td>
                {{station.grz}}
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
  name: 'mainStatus_thsw',
  props: ['echarts','addComponents'],
  components: {
    // <my-component> 将只在父模板可用

  },

  data:function(){
    var stations = [{'name':'太湖平均','z':135.50,'wrz':150.00,'grz':140.50},{'name':'太湖平均','z':135.50,'wrz':150.00,'grz':140.50},{'name':'太湖平均','z':135.50,'wrz':150.00,'grz':140.50},{'name':'太湖平均','z':135.50,'wrz':150.00,'grz':140.50},{'name':'太湖平均','z':135.50,'wrz':150.00,'grz':140.50}];
    return{
      'stations':stations
    }
  },
  methods:{

  }
}

</script>

<style>
.contentComponent{
  max-height: 220px;
  overflow: auto;
}
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
  font-size:5px;
  background-color: #e2ecf6;
  text-align: center;
}
.myTable tr:nth-child(odd){
  font-size:5px;
  /*background-color : black;*/
  text-align: center;
}
</style>
