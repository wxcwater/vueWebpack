<template>
  <div class="nav-search" id="nav-search" style="margin-top:-5px;position:relative;">
      <form class="form-search">
        <span class="input-icon" style="top:5px;height:33px;">
          <input type="text" placeholder="Search ..." class="nav-search-input" autoComplete="off" style="height:33px;" id="nav-search-input" v-model="searchText"   v-on:keyup="searchtext()">
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

</template>

<script>
export default {
  name: 'searchToolBar',
  props: ['data'],
  data:function(){
      let checkedLayers = new Array();
      checkedLayers = checkedLayers.concat(this.data);
    return {
      'searchText':'',
      'allitems':[{'key':'太浦自动闸',type:'测站定位'},{'key':'环太湖河流',type:'关注图层'},{'key':'水位等值线',type:'业务图层'},{'key':'水量水质站',type:'图层'}],
      'getItems':[]
    }
  },
  created:function(){

  },
  methods:{
      searchtext:function(){
        //alert(this.searchText);
        this.getItems = [];
        if(this.searchText==''){
          return;
        }

        console.log();
        var searchExp=new RegExp(this.searchText);
        for(var i = 0;i<this.allitems.length;i++){
            console.log(this.allitems[i].key);
          if(searchExp.test(this.allitems[i].key)){

            this.getItems.push(this.allitems[i]);
          }
        }
        console.log(this.getItems);
      }
    }

}

</script>

<style>

</style>
