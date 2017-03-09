var layerTree = Vue.extend({
  template: '<ul class="nav navbar-nav navbar-right" style="height:28px;">'
              +'<li id="fat-menu" class="dropdown">'
                +'<a id="drop3" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" style=" height: 35px; background-color: #31708f;padding-top:9px;">'
                  +'图层控制<span class="badge badge-grey" style="padding-left:3px;padding-right:3px;left:5px;">8/20</span>'
                  +'<span class="caret"></span>'
                +'</a>'
                +'<ul class="dropdown-menu" aria-labelledby="drop3">'
                  +'<li><a href="#">业务图层</a></li>'
                  +'<li><a href="#">基础图层</a></li>'
                  +'<li><a href="#">Something else here</a></li>'
                  +'<li role="separator" class="divider"></li>'
                  +'<li><a href="#">Separated link</a></li>'
                +'</ul>'
              +'</li>'
            +'</ul>',
  ready: function () {
    alert('ready');
    $('.dropdown-toggle').dropdown()
  },
  data:function(){
    return {
      counter: 0
    }
  },
  methods: {
   test: function () {
     alert(1);
   },
   test2:function(){
     alert(2);
   }
 },
});

Vue.component('gis-layertree', layerTree);
