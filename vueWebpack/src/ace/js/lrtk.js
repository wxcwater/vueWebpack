/* =================================================
//
// jQuery Fixed Plugins 1.3.1
// author : 
// Url: 
// Data : 2012-03-30
//
// 锟斤拷锟斤拷 : float --> 锟斤拷锟斤拷[left or right]
//		  minStatue --> 锟斤拷小状态锟斤拷只锟斤拷show_btn
//		  skin      --> 皮锟斤拷锟斤拷锟斤拷
//		  durationTime --> 锟斤拷锟绞憋拷锟�
//
// =================================================*/
var rightw = 230;
jQuery(function($) {
	if($("#widget-box")){
		rightw=$("#widget-box").width();
	}
});
(function($){
	
    $.fn.fix = function(options){
        var defaults = {
            float : 'right',
			minStatue : false,
			skin : 'blue',
			durationTime : 1000	,
			stylewidth: rightw,
			stylewidth1:215,
			spacingw:0,
			spacingh:0,
			close_btn:'.close_btn',
			show_btn:'.show_btn',
			side_list:'.side_list',
			close_btn_width:25,
			side_title:'.side_title',
			set_scrollsidebar:'.page_right_style',
			table_menu:'.table_menu_list',
			widgetbox:'.widget-box'
        }
        var options = $.extend(defaults, options);		

        this.each(function(){			
            //锟斤拷取锟斤拷锟斤拷
			var thisBox = $(this),
				closeBtn = thisBox.find(options.close_btn ),
				showbtn = thisBox.find(options.show_btn ),
				sideContent = thisBox.find('.side_content'),
				sideList = thisBox.find(options.side_list),
				sidetitle = thisBox.find(options.side_title),
				scrollsidebar=thisBox.find(options.set_scrollsidebar),
				stylespacing=thisBox.find(options.table_menu);
				widget_box=thisBox.find(options.widgetbox);
			var defaultTop = thisBox.offset().top;	//锟斤拷锟斤拷锟侥�拷锟絫op	
			
			thisBox.css(options.float, 0);	
			//thisBox.css('height',(thisBox.height()));	
			if(options.minStatue){
				$(options.show_btn ).css("float", options.float);
				sideContent.css('width', 0);
				showbtn.css('width', (options.close_btn_width));
				thisBox.css('height',(thisBox.height()))-($(options.sideList).height());
				sideList.css('height',($(options.side_list).height()));		
			}
			//皮锟斤拷锟斤拷锟斤拷
			if(options.skin) thisBox.addClass('side_'+options.skin);
				
						
			//锟斤拷锟斤拷scroll锟铰硷拷			
			//$(window).bind("scroll",function(){
//				var offsetTop = defaultTop + $(window).clientHeight()+ "px";
//	            showbtn.animate({
//	                top: offsetTop
//	            },
//	            {
//	                duration: options.durationTime,	
//	                queue: false    //锟剿讹拷锟斤拷锟斤拷锟斤拷锟斤拷锟诫动锟斤拷锟斤拷锟斤拷
//	            });
//			});	
			//close锟铰硷拷
			closeBtn.bind("click",function(){
				sideContent.animate({width: '0px'},"fast").addClass('active');
            	showbtn.stop(true, true).delay(300).animate({ width:+(options.close_btn_width)+'px'},"fast");
				sideList.css("display","none");
				sidetitle.css("display","none");
				showbtn.css("display","block")
				scrollsidebar.addClass("Widescreen")
				scrollsidebar.width($(".clearfix").width()-(options.spacingw));
				stylespacing.width($(".clearfix").width()-(options.spacingw)).addClass("Widescreen");
				if(jQuery("#grid-table").jqGrid!=null){
				var aut = jQuery("#grid-table").jqGrid('getGridParam','autowidth');
				jQuery("#grid-table").jqGrid('setGridWidth',($(".h_products_list").width()-(options.spacingw)),aut); 
				}
				//setGridWidth();
				//gbox_grid-table
				sideList.css('height',-($(options.side_list).height()));				
			    //widget_box.css('height',height($(window).height())-($(options.side_list).height()));	
		      
			});
			//show锟铰硷拷
			 showbtn.click(function() {
	            $(this).animate({width: '0px',border:'1px solid #ddd'},"fast").css('display','none');
	            sideContent.stop(true, true).delay(0).animate({ width:+(options.stylewidth)+'px'},"fast");
				sideList.css("display","block")
				sidetitle.css("display","block");
				scrollsidebar.removeClass("Widescreen")
				scrollsidebar.width($(".clearfix").width()-(options.stylewidth1));
				stylespacing.width($(".clearfix").width()-(options.spacingh)).removeClass("Widescreen");
				if(jQuery("#grid-table").jqGrid!=null){
				var aut = jQuery("#grid-table").jqGrid('getGridParam','autowidth');
				jQuery("#grid-table").jqGrid('setGridWidth',($(".h_products_list").width()-rightw),aut);
				}
				sideList.css('height',145+($(options.side_list).height()));	
	        });
				
        });	//end this.each

    };
})(jQuery);