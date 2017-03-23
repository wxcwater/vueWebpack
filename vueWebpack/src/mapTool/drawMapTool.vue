<template>
  <div id = 'drawMapTool' class="drawMapToolPanel">
    <div class="widget-header" style="border-radius: 0 25px 0 0;top:0px;top:0px;">
      <h5 class="widget-title smaller">选测测站</h5>
    </div>
      <div id = 'methodType' style='display:flex; justify-content:flex-start;margin-top:5px;'>
      <div data-toggle="buttons" class="btn-group" style="margin-left:20px;" v-on:click='draw()'>
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
      <div id = 'tableContent' style="height:150px;">
        <table class="table table-striped table-bordered table-hover">
          <thead >
          <tr>
            <th>
            测站名称
            </th>
            <th>
            测站类型
            </th>
            <th>
              <input type="checkbox" name="iCheck"  value='sz' class='iCheckRadio'checked>
            </th>
          </tr>
          </thead>
        <tbody >
              <tr v-for="station in foundStations">
                <td>
                {{station.RVNM}}
              </td>
                <td>
                {{station.HNNM}}
              </td>
                <td>
                  <input type="checkbox" name="iCheck"  value='sz' class='iCheckRadio'checked>
                </td>
              </tr>
        </tbody>
        </table>
      </div>
      <div id = 'methodType' style='display:flex; justify-content:center;margin-top:5px;align-items:center;'>
      <div data-toggle="buttons" class="btn-group" style="margin-left:20px;" v-on:click='compare()'>
					<label class="btn btn-success" id="test">
						<input value="3" type="radio">
						<i class="icon-only ace-icon fa fa-external-link"></i>
						多站对比
					</label>
      </div>
	</div>
  </div>
</template>

<script>
//import searchToolBar from './../searchToolBar.vue'
export default {
  name: 'drawMapTool',
  props: ['foundStations'],
  data:function(){
      return {
        'foundStations':[{RVNM:'测试站1',HNNM:'水质水量'},{RVNM:'测试站2',HNNM:'水质水量'}]
      }
  },

  methods:{
      draw:function(){
       this.$emit('drawMapStart');
      },
      compare:function(){
        this.$emit('compareState');
      }
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
