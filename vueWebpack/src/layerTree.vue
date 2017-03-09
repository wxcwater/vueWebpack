<template>
  <ul class="nav navbar-nav" style="height:28px;">
    <li id="fat-menu" class="dropdown">
      <a id="drop3" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" style=" height: 35px; color:#EEE;background-color: #31708f;padding-top:9px;">
      图层控制<span class="badge badge-grey" style="padding-left:3px;padding-right:3px;left:5px;">{{checkedLayers.length}}/{{allLayers.length}}</span>
      <span class="caret"></span>
      </a>
      <ul class="dropdown-menu" aria-labelledby="drop3" style="min-width:180px;max-height:300px;overflow:auto;">

        <li style="margin-left:5px;font-size:15px;color:#95999d">基础图层</li>
        <li v-for='layer in basicLayers' style="margin-left:15px">
          <input type="checkBox" :value="layer.name"  style="display:inline" v-if="layer.visible" checked v-on:click='onChange(layer.id)' >
          <input type="checkBox" :value="layer.name"  style="display:inline" v-else  v-on:click='onChange(layer.id)'>
          <a href="#" style="display:inline"><span class='fa fa fa-map-o' style='margin-left:-7px;margin-right:5px;'></span>{{layer.name}}</a>
        </li>
        <li role="separator" class="divider"></li>
        <li style="margin-left:5px;font-size:15px;color:#95999d">水利工程</li>
        <li v-for='layer in projectLayers' style="margin-left:15px">
          <input type="checkBox" :value="layer.name"  style="display:inline" v-if="layer.visible" checked v-on:click='onChange(layer.id)' >
          <input type="checkBox" :value="layer.name"  style="display:inline" v-else  v-on:click='onChange(layer.id)'>
          <a href="#" style="display:inline"><span class='fa fa fa-map-o' style='margin-left:-7px;margin-right:5px;'></span>{{layer.name}}</a>
        </li>
        <li role="separator" class="divider"></li>
        <li style="margin-left:5px;font-size:15px;color:#95999d">业务图层</li>
        <li v-for='layer in businessLayers' style="margin-left:15px">
          <input type="checkBox" :value="layer.name"  style="display:inline" v-if="layer.visible" checked v-on:click='onChange(layer.id)' >
          <input type="checkBox" :value="layer.name"  style="display:inline" v-else  v-on:click='onChange(layer.id)'>
          <a href="#" style="display:inline"><span class='fa fa fa-map-o' style='margin-left:-7px;margin-right:5px;'></span>{{layer.name}}</a>
        </li>
        <!-- <li role="separator" class="divider"></li> -->
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'layertree',
  props: ['layers','mapObject'],
  data:function(){
    let allLayers = [
      {name:'矢量底图',id:'baseInfo_xzq',layerUseType:'basic',visible:true},
      {name:'主要河流',id:'baseInfo_xzq3',layerUseType:'basic',visible:true},
      {name:'水源地',id:'baseInfo_xzq',layerUseType:'basic',visible:true},
      {name:'水功能区(一级)',id:'baseInfo_xzq4',layerUseType:'basic',visible:false},
      {name:'水功能区(二级)',id:'baseInfo_xzq',layerUseType:'basic',visible:true},
      {name:'灌渠',id:'baseInfo_xzq',layerUseType:'basic',visible:true},
      {name:'太湖分区',id:'baseInfo_xzq1',layerUseType:'basic',visible:false},
      {name:'行政分区',id:'baseInfo_xzq7',layerUseType:'basic',visible:true},
      {name:'水利分区',id:'baseInfo_xzq5',layerUseType:'basic',visible:false},
      {name:'引江济太',id:'baseInfo_xzq',layerUseType:'project',visible:true},
      {name:'水质评价',id:'baseInfo_xzq',layerUseType:'business',visible:true},
      {name:'水源地',id:'baseInfo_xzq',layerUseType:'business',visible:true},
      {name:'排污口',id:'baseInfo_xzq',layerUseType:'business',visible:true},
      {name:'取水用户',id:'baseInfo_xzq',layerUseType:'business',visible:true},
      {name:'水功能区达标',id:'baseInfo_xzq',layerUseType:'business',visible:true},
      {name:'排污总量',id:'baseInfo_xzq',layerUseType:'business',visible:true},
      {name:'污染物通量',id:'baseInfo_xzq',layerUseType:'business',visible:true},
      {name:'蓝藻遥感',id:'baseInfo_xzq',layerUseType:'business',visible:true},
  ];
    let checkedLayers = [];
    let basicLayers = [];
    let projectLayers = [];
    let businessLayers = [];
    for(let i = 0;i<allLayers.length;i++){
      if(allLayers[i].visible){
        checkedLayers.push(allLayers[i].name);
      }
      if(allLayers[i].layerUseType=='basic'){
        basicLayers.push(allLayers[i]);
      }else if(allLayers[i].layerUseType=='project'){
        projectLayers.push(allLayers[i]);
      }else{
        businessLayers.push(allLayers[i]);
      }
    }
    // alert(checkedLayers);
    return {
      'checkedLayers':checkedLayers,
      'allLayers' : allLayers,
      'basicLayers':basicLayers,
      'projectLayers':projectLayers,
      'businessLayers':businessLayers
    }
  },
  created:function(){
    //alert('1');
  },
  beforeDestory:function(){
    // alert('d')
  },
  methods:{
    test:function(){
      // alert(1);
    },
    onChange:function(name){
        this.$emit('increment',name);
        // if(window.mapObject.mapObject.getLayer(name).visible){
        //   window.mapObject.mapObject.getLayer(name).hide();
        // }else{
        //   window.mapObject.mapObject.getLayer(name).show();
        // }
        for(let i = 0;i<this.allLayers.length;i++){
          if(this.allLayers[i].id==name){
            // alert(this.layers[i].id);
            this.allLayers[i].visible = !this.allLayers[i].visible;
          }
        }
         this.checkedLayers = [];
        for(let i = 0;i<this.allLayers.length;i++){
          if(this.allLayers[i].visible){
            this.checkedLayers.push(this.allLayers[i].name);
          }
        }

    }
  }
}

</script>

<style>

</style>
