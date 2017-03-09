function getTableJson(name,dataroot,page,size){

	var json ={ 
	    PAGE : page,
	    SIZE: size,
	    COUNT:0,
	    RESULTS:0,
	    ROWS: []
    }
    if(name!=""&&dataroot!=""){
    	$.getJSON(dataroot, function(data){ 
			json.ROWS = data[name];
			json.RESULTS = data.rows.length;
			var num = data.rows.length/size;
			if(data.rows.length%size>0){
				num++;
			}
			json.COUNT = parseInt(num);
		});
    }
    return json;
}

function getjson(name,dataroot){
	var rows;
    if(name!=""&&dataroot!=""){
    	$.getJSON(dataroot, function(data){ 
			rows = data[name];
			return rows;
		});
    }
}