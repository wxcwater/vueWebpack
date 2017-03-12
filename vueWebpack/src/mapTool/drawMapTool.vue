<template>
  <div id = 'drawMapTool' class="drawMapToolPanel">
    <div class="widget-header" style="border-radius: 0 25px 0 0;top:0px;top:0px;">
      <h5 class="widget-title smaller">选测测站</h5>
    </div>
      <div id = 'methodType' style='display:flex; justify-content:flex-start;margin-top:5px;'>
      <div data-toggle="buttons" class="btn-group" style="margin-left:20px;">
					<label class="btn btn-primary" id="test">
						<input value="3" type="radio">
						<i class="icon-only ace-icon fa fa-external-link"></i>
						圈划
					</label>
      </div>
      <div class="nav-search" id="nav-search" style="">
          <form class="form-search">
            <span class="input-icon" style="top:5px;height:33px;">
              <input type="text" placeholder="查询测站" class="nav-search-input" autoComplete="off" style="height:33px;" id="nav-search-input" v-model="searchText"   v-on:keyup="searchtext()">
              <i class="ace-icon fa fa-search nav-search-icon"></i>

            </span>
          </form>
          <div  style="position:absolute;background:#ffffff;border-radius:5px;;width:150px;z-index:1060;">
            <div v-for='item in getItems' style='cursor:pointer;padding:8px;clear:both;'>
              <a >
                {{item.key}}
              </a>
              <font style="font-size:11px;color:#999999">
                {{item.type}}
              </font>
            </div>
            <!-- <li v-for='item in getItems'>
                <a href="#" style="display:inline">{{item.key}}</a>
            </li> -->

          </div>
        </div>
      </div>
      <div id = 'drawType' style="margin-top:5px;"></div>
      <div id = 'tableContent' >
        <table class='table'>
          <tr>
            <th>测站名称</th>
            <th>测站类型</th>
            <th><input type="checkbox" name="iCheck"  value='sz' class='iCheckRadio'checked></th>
          </tr>
          <tr v-for ='station in selectedStations' >
            <td>{{station.name}}</td>
            <td>{{station.type}}</td>
            <td><input type="checkbox" name="iCheck"  value='sz' class='iCheckRadio'checked></td>
          </tr>
        </table>
      </div>
  </div>
</template>

<script>
//import searchToolBar from './../searchToolBar.vue'
export default {
  name: 'drawMapTool',
  props: [],
  data:function(){
      return {
        'selectedStations':[{name:'测试站1',type:'水质水量'},{name:'测试站2',type:'水质水量'}]
      }
  },

  methods:{

  }
}
</script>

<style>
  .drawMapToolPanel{
    display: flex;
    flex-direction:column;;
    justify-content:flex-start;
    align-items:stretch;
    height: 100%;
    width:100%;
    /*background-color: rgb(167, 167, 165);*/
  }
  .table{
    vertical-align: middle;

  }
  .table th{
    vertical-align: middle;

  }
  .table td{
    vertical-align: middle;

  }
</style>
