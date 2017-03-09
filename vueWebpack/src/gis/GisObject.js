newGisObject = {
  GisModelCode : "",
  dangerArr : [],//统一名字危险区列表
  dangerObj : {},//查询危险区返回的features
  timeSlider:{},//时间轴全局变量
  GisLayerStatus:{
      addedPolygonLayerIndex : 0,
      addedLineLayerIndex    : 0,
      addedPointLayerIndex   : 0,
      addaLayer:function(type){
          switch(type){
            case 'Polygon' :
              newGisObject.GisLayerStatus.addedPolygonLayerIndex++;
            case 'Line'    :
              newGisObject.GisLayerStatus.addedLineLayerIndex++;
            case 'Point'   :
              newGisObject.GisLayerStatus.addedPointLayerIndex++;
              break;
            default :
              break;
          }
      },
      removeaLayer:function(type){
          switch(type){
            case 'Polygon' :
              newGisObject.GisLayerStatus.addedPolygonLayerIndex--;
            case 'Line'    :
              newGisObject.GisLayerStatus.addedLineLayerIndex--;
            case 'Point'   :
              newGisObject.GisLayerStatus.addedPointLayerIndex--;
              break;
            default :
              break;
          }
      }
  },
  GisModelConfig :  {
    baseInfoLayers:[
    {
       name   : '行政区',
       id : 'baseInfo_xzq',
  	   url : "http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineCommunity/MapServer",
       layerType:'',
       visible:true,
       contentType:'Polygon'
    }
    //自动监测站
  ],
    // xzqUrl : "http://10.1.102.129:6080/arcgis/rest/services/jiangxi_province/MapServer",
  	layersInfo : [
  				{index : 1, minScale : 2311166.84},
  				{index : 2, minScale : 1155583.42},
  				{index : 3, minScale : 577791.71},
  				{index : 4, minScale : 288895.85},
  				{index : 5, minScale : 144447.93}],
    centerPt:[120,31.25],
    centerPoint:''
  },
  mapObject : {},
  
  
  init:function(divId){
    this.initMapDiv(divId);
    // this.initMeas();
    // this.initEvent();
    // this.initFunctionalModule();

  },
  initBasicLayer:function(){
    require([
        "esri/layers/ArcGISTiledMapServiceLayer",
        "esri/layers/FeatureLayer",
        "dojo/promise/all",
        "dojo/domReady!"
      ], function(ArcGISTiledMapServiceLayer,FeatureLayer,all) {
        var layerData = {};
        layerData.data = [];
        // layerData.data[0] = {
        //   name :'图层',
        //   type:'folder',
        //   additionalParameters:{
        //     id:'36',
        //     children:[]
        //   }
        // };
        for(var i = 0;i<newGisObject.GisModelConfig.baseInfoLayers.length;i++){
              var baseInfoLayer=new ArcGISTiledMapServiceLayer(newGisObject.GisModelConfig.baseInfoLayers[i].url);
              baseInfoLayer.id = newGisObject.GisModelConfig.baseInfoLayers[i].id;
              baseInfoLayer.visible = newGisObject.GisModelConfig.baseInfoLayers[i].visible;
              layerData.data.push({name:newGisObject.GisModelConfig.baseInfoLayers[i].name,type:'item',itemSelected:newGisObject.GisModelConfig.baseInfoLayers[i].visible,additionalParameters:{id:newGisObject.GisModelConfig.baseInfoLayers[i].id,itemSelected:newGisObject.GisModelConfig.baseInfoLayers[i].visible}});
              // layerData[newGisObject.GisModelConfig.baseInfoLayers[i].name] = {text:newGisObject.GisModelConfig.baseInfoLayers[i].name,type:'item'};
              // layerData.push({state:baseInfoLayer.visible,layerName:newGisObject.GisModelConfig.baseInfoLayers[i].name,layerId:newGisObject.GisModelConfig.baseInfoLayers[i].id});
              switch(newGisObject.GisModelConfig.baseInfoLayers[i].contentType){
                  case 'Polygon':
                        newGisObject.mapObject.addLayer(baseInfoLayer, newGisObject.GisLayerStatus.addedPolygonLayerIndex);
                        newGisObject.GisLayerStatus.addaLayer('Polygon');
                        break;
                  case 'Line':
                        newGisObject.mapObject.addLayer(baseInfoLayer, newGisObject.GisLayerStatus.addedLineLayerIndex);
                        newGisObject.GisLayerStatus.addaLayer('Line');
                        break;
                  case 'Point':
                        newGisObject.mapObject.addLayer(baseInfoLayer, newGisObject.GisLayerStatus.addedPointLayerIndex);
                        newGisObject.GisLayerStatus.addaLayer('Point');
                        break;
              }
        }
          // treeDataSource = new DataSourceTree(layerData);
          // $('#tree1').ace_tree(
          //     {
          //       dataSource : treeDataSource,
          //       multiSelect : true,

          //       loadingHTML : '<div class="tree-loading"><i class="icon-refresh icon-spin blue"></i></div>',
          //       'open-icon' : 'icon-minus',
          //       'close-icon' : 'icon-plus',
          //       'selectable' : true,
          //       'selected-icon' : 'icon-ok',
          //       'unselected-icon' : 'icon-remove',

          //     }).on('selected.fu.tree', function(e, data) {
          //         var tempMap = {};
          //         for(var i = 0;i<data.info.length;i++){
          //           tempMap[data.info[i].additionalParameters.id] = data.info[i].additionalParameters.itemSelected;
          //         }
          //         for(var i = 0;i<newGisObject.GisModelConfig.baseInfoLayers.length;i++){
          //           if(tempMap.hasOwnProperty(newGisObject.GisModelConfig.baseInfoLayers[i].id)&&newGisObject.GisModelConfig.baseInfoLayers[i].visible==false){
          //               newGisObject.GisModelConfig.baseInfoLayers[i].visible=true;
          //               newGisObject.mapObject.getLayer(newGisObject.GisModelConfig.baseInfoLayers[i].id).show();
          //           }
          //           if(!tempMap.hasOwnProperty(newGisObject.GisModelConfig.baseInfoLayers[i].id)&&newGisObject.GisModelConfig.baseInfoLayers[i].visible==true){
          //               newGisObject.GisModelConfig.baseInfoLayers[i].visible=false;
          //               newGisObject.mapObject.getLayer(newGisObject.GisModelConfig.baseInfoLayers[i].id).hide();
          //           }
          //         }
          //     });



//          newGisObject.initImageServer();
              //  $('#tree1').tree('populate',$('.tree-folder-header')[0]);
              //  $('#layerListPanel').css('display','none');
      });
  },
  // addMapEventListener:function(event,handlerFunction){
  //     this.mapObject.on(event,handlerFunction);
  // },
  
  initMapDiv:function(DivId,readyFunction){
    require([
      "dojo/dom",
     
      "esri/basemaps",
      "esri/map",
     
      "esri/layers/ArcGISTiledMapServiceLayer",
      "esri/geometry/Extent","esri/toolbars/navigation",
      "esri/geometry/Point", "esri/SpatialReference",
      "esri/arcgis/utils","esri/dijit/LayerList",
      "dojo/domReady!"
    ], function(dom,esriBasemaps,map,ArcGISTiledMapServiceLayer,Extent,Navigation,Point,SpatialReference,
          arcgisUtils,LayerList,all) {
            newGisObject.mapObject = new map(DivId, {
            zoom: 1,
            slider: true,
            sliderStyle : "large",
            logo: false//,

            });
            newGisObject.initBasicLayer();

            newGisObject.mapObject.on('load',function(e){
              if(test){
                test();
              }
  					});
            //  m = newGisObject.lonLat2Mercator(newGisObject.GisModelConfig.centerPt);
            // var pt=new Point(newGisObject.GisModelConfig.centerPt[0],newGisObject.GisModelConfig.centerPt[1],new SpatialReference({ wkid: 3857   }));
            // newGisObject.GisModelConfig.centerPoint = pt;
            newGisObject.mapObject.centerAt(newGisObject.GisModelConfig.centerPt);
            newGisObject.mapObject.setLevel(8);
            // newGisObject.timeSlider = new TimeSlider({excludeDataAtLeadingThumb:false,excludeDataAtTrailingThumb:false},dom.byId("timeSliderDiv"));
            navToolbar = new Navigation(newGisObject.mapObject);
            newGisObject.initMeas();
            
    });
  },
  //初始化测量工具
	
  addNewLayer:function(contentType,layer){//升级后可用代理操作


              switch(contentType){
                case 'Polygon':
                  newGisObject.mapObject.addLayer(layer,newGisObject.GisLayerStatus.addedPolygonLayerIndex);
                  newGisObject.GisLayerStatus.addaLayer(contentType);
                  break;
                case 'Line':
                  newGisObject.mapObject.addLayer(layer,newGisObject.GisLayerStatus.addedLineLayerIndex);
                  newGisObject.GisLayerStatus.addaLayer(contentType);
                  break;
                case 'Point':
                  newGisObject.mapObject.addLayer(layer,newGisObject.GisLayerStatus.addedPointLayerIndex);
                  newGisObject.GisLayerStatus.addaLayer(contentType);
              }



  },
  lonLat2Mercator:function(lonLat){
      var mercator = [];
      var x = lonLat[0] * 20037508.34 / 180;
      var y = Math.log(Math.tan((90+lonLat[1])*Math.PI/360))/(Math.PI/180);
     
      y = y * 20037508.34 / 180;
      // mercator.X = x;
      mercator.push(y);
      mercator.push(x);
      return mercator;
  },
  initMeas : function() {
    require([
        "dojo/dom","esri/Color","dojo/keys","dojo/parser","esri/units",
        "esri/config","esri/sniff","esri/SnappingManager","esri/dijit/Measurement","esri/layers/FeatureLayer",
            "esri/renderers/SimpleRenderer","esri/tasks/GeometryService","esri/symbols/SimpleLineSymbol","esri/symbols/SimpleFillSymbol",
            "dijit/layout/BorderContainer","dijit/layout/ContentPane","dijit/TitlePane","dijit/form/CheckBox",
            "dojo/domReady!"
      ], function(dom, Color, keys, parser,Units,
          esriConfig, has, SnappingManager, Measurement, FeatureLayer, SimpleRenderer, GeometryService, SimpleLineSymbol,
          SimpleFillSymbol) {
          parser.parse();
          esriConfig.defaults.io.proxyUrl = "/proxy/";
          esriConfig.defaults.io.alwaysUseProxy = false;
          //esriConfig.defaults.geometryService = new GeometryService("http:10.1.102.203:6080/ArcGIS/rest/services/Geometry/GeometryServer");
          esriConfig.defaults.geometryService = new GeometryService("https://utility.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer");
          
          
          measurement = new Measurement({
          map: newGisObject.mapObject,
          defaultAreaUnit: Units.SQUARE_KILOMETERS,
          defaultLengthUnit: Units.KILOMETERS
         }, dom.byId("measurementDiv"));
          measurement.startup();
      });
  },
};
