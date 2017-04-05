<template>
  <div class='searchToolBarContainer'>
      <form style="height:100%;padding:0px;" >
        <div class='searchToolBarContent'>
          <input  class='searchToolBarInput' placeholder="查询 ..."  autoComplete="off"  v-model="searchText"   v-on:keyup="searchtext()">
          <i class="ace-icon fa fa-search nav-search-icon searchToolBarIcon"></i>
        </div>
      </form>
      <div  style="position:absolute;background:#ffffff;border-radius:0px 0px 5px 5px;width:105px;z-index:1060;margin-left:-5px;margin-top:5px;">
        <div v-for='item in getItems' style='cursor:pointer;padding:8px;clear:both;'>
          <a style="font-size:10px">
            {{item.key}}
          </a>
          <font style="font-size:8px;color:#999999">
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
  .searchToolBarContainer{
    height:70%;
    width:30%;
    padding:5px;
    /*border-color: blue;*/
    /*background-image: linear-gradient(to bottom right,#FFFFFF,rgb(188, 207, 226));*/
    background-color:white;
    border-radius: 5px;
  }
  .searchToolBarContent{
      height:100%;display:flex;flex-wrap: nowrap;align-items: center;padding:0px;
  }
  .searchToolBarInput{
    height:20px;
    display: inline;
    width: 100%;
    font-size: 10px;
    /*margin-left:10px;*/
    /*background-color: white;*/
    border-style: hidden;
    border: 0px;
  }
  .searchToolBarIcon{
    display: inline;
    margin-left: -20px;
    color: #669FC7;
  }
</style>
