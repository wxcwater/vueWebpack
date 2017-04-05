<template>
  <div  style="height:100%;">
    <div id="fat-menu" class="layerTreeDropDown">
      <a id="drop3" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" style="line-height:30px;font-size:10px;color:#669FC7;">
        关注图层:无

        <span class="caret"></span>
      </a>
      <ul class="dropdown-menu" aria-labelledby="drop3" style="margin-left:32%;min-width:100px;max-height:300px;overflow:auto;">


        <li v-for='layer in allitems' style="margin-left:15px">
        <a href="#" style="display:inline"><span class='fa fa fa-map-o' style='margin-left:-7px;margin-right:5px;'></span>{{layer.key}}</a>
        </li>

        <!-- <li role="separator" class="divider"></li>-->
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: 'focusObject',
  props: ['data'],
  data:function(){
      // let checkedLayers = new Array();
      // checkedLayers = checkedLayers.concat(this.data);
    return {
      'searchText':'',
      'allitems':[{'key':'太浦自动闸',type:'测站定位'},{'key':'环太湖河流',type:'关注图层'},{'key':'水位等值线',type:'业务图层'},{'key':'水量水质站',type:'图层'}],
      'getItems':[]
    }
  },
  created:function(){

  },
  methods:{

    }

}

</script>

<style>
  .searchToolBarContainer{
    height:70%;
    width: 30%;
    padding: 5px;
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
