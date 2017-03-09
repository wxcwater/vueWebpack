functionalModule = {
	
	bz : function(test_slsz) {
		require(["esri/symbols/SimpleMarkerSymbol", "esri/geometry/Point", "esri/graphic","esri/SpatialReference",
						 "esri/symbols/Font","esri/Color","esri/symbols/TextSymbol","esri/symbols/PictureMarkerSymbol",
						 "esri/layers/GraphicsLayer","esri/layers/FeatureLayer","esri/config"], function(
						SimpleMarkerSymbol, Point, Graphic,SpatialReference,Font,Color,
						TextSymbol, PictureMarkerSymbol,GraphicsLayer,FeatureLayer, esriConfig) {
						graphicsLayer_szsl = new GraphicsLayer();
							graphicsLayer_szsl.id = 'graphicsLayer_szsl';
							newGisObject.addNewLayer('Point',graphicsLayer_szsl);

							var stationSymbol = new PictureMarkerSymbol('/images/yl.gif',8,8);

							for(var i = 0;i<test_slsz.length;i++){
								var targetData = test_slsz[i];
								var p = new Point(targetData.x,targetData.y);
								var gra = new Graphic(p,stationSymbol,targetData);

								graphicsLayer_szsl.add(gra);
							}
	
	
	});
}
}
if(newGisObject){
	newGisObject.functionalModule = functionalModule;
}
