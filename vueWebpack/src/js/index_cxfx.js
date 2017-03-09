(function ($) {
    $.learuntab = {
        requestFullScreen: function () {
            var de = document.documentElement;
            if (de.requestFullscreen) {
                de.requestFullscreen();
            } else if (de.mozRequestFullScreen) {
                de.mozRequestFullScreen();
            } else if (de.webkitRequestFullScreen) {
                de.webkitRequestFullScreen();
            }
        },
        exitFullscreen: function () {
            var de = document;
            if (de.exitFullscreen) {
                de.exitFullscreen();
            } else if (de.mozCancelFullScreen) {
                de.mozCancelFullScreen();
            } else if (de.webkitCancelFullScreen) {
                de.webkitCancelFullScreen();
            }
        },
        refreshTab: function () {
            var currentId = $('.page-tabs-content').find('.active').attr('data-id');
            var target = $('.LRADMS_iframe[data-id="' + currentId + '"]');
            var url = target.attr('src');
            //$.loading(true);
            target.attr('src', url).load(function () {
                //$.loading(false);
            });
        },
        activeTab: function () {
            var currentId = $(this).data('id');
            if (!$(this).hasClass('active')) {
                $('.mainContent .LRADMS_iframe').each(function () {
                    if ($(this).data('id') == currentId) {
                        $(this).show().siblings('.LRADMS_iframe').hide();
                        return false;
                    }
                });
                $(this).addClass('active').siblings('.menuTab').removeClass('active');
                $.learuntab.scrollToTab(this);
            }
        },
        closeOtherTabs: function () {
            $('.page-tabs-content').children("[data-id]").find('.fa-remove').parents('a').not(".active").each(function () {
                $('.LRADMS_iframe[data-id="' + $(this).data('id') + '"]').remove();
                $(this).remove();
            });
            $('.page-tabs-content').css("margin-left", "0");
        },
        closeTab: function () {
            var closeTabId = $(this).parents('.menuTab').data('id');
            var currentWidth = $(this).parents('.menuTab').width();
            if ($(this).parents('.menuTab').hasClass('active')) {
                if ($(this).parents('.menuTab').next('.menuTab').size()) {
                    var activeId = $(this).parents('.menuTab').next('.menuTab:eq(0)').data('id');
                    $(this).parents('.menuTab').next('.menuTab:eq(0)').addClass('active');

                    $('.mainContent .LRADMS_iframe').each(function () {
                        if ($(this).data('id') == activeId) {
                            $(this).show().siblings('.LRADMS_iframe').hide();
                            return false;
                        }
                    });
                    var marginLeftVal = parseInt($('.page-tabs-content').css('margin-left'));
                    if (marginLeftVal < 0) {
                        $('.page-tabs-content').animate({
                            marginLeft: (marginLeftVal + currentWidth) + 'px'
                        }, "fast");
                    }
                    $(this).parents('.menuTab').remove();
                    $('.mainContent .LRADMS_iframe').each(function () {
                        if ($(this).data('id') == closeTabId) {
                            $(this).remove();
                            return false;
                        }
                    });
                }
                if ($(this).parents('.menuTab').prev('.menuTab').size()) {
                    var activeId = $(this).parents('.menuTab').prev('.menuTab:last').data('id');
                    $(this).parents('.menuTab').prev('.menuTab:last').addClass('active');
                    $('.mainContent .LRADMS_iframe').each(function () {
                        if ($(this).data('id') == activeId) {
                            $(this).show().siblings('.LRADMS_iframe').hide();
                            return false;
                        }
                    });
                    $(this).parents('.menuTab').remove();
                    $('.mainContent .LRADMS_iframe').each(function () {
                        if ($(this).data('id') == closeTabId) {
                            $(this).remove();
                            return false;
                        }
                    });
                }
            }
            else {
                $(this).parents('.menuTab').remove();
                $('.mainContent .LRADMS_iframe').each(function () {
                    if ($(this).data('id') == closeTabId) {
                        $(this).remove();
                        return false;
                    }
                });
                $.learuntab.scrollToTab($('.menuTab.active'));
            }
            return false;
        },
        addTab: function () {
            $(".navbar-custom-menu>ul>li.open").removeClass("open");
            var dataId = $(this).attr('data-id');
            if (dataId != "") {
                //top.$.cookie('nfine_currentmoduleid', dataId, { path: "/" });
            }
            var dataUrl = $(this).attr('href');
            var menuName = $.trim($(this).text());
            var flag = true;
            if (dataUrl == undefined || $.trim(dataUrl).length == 0) {
                return false;
            }
            $('.menuTab').each(function () {
                if ($(this).data('id') == dataUrl) {
                    if (!$(this).hasClass('active')) {
                        $(this).addClass('active').siblings('.menuTab').removeClass('active');
                        $.learuntab.scrollToTab(this);
                        $('.mainContent .LRADMS_iframe').each(function () {
                            if ($(this).data('id') == dataUrl) {
                                $(this).show().siblings('.LRADMS_iframe').hide();
                                return false;
                            }
                        });
                    }
                    flag = false;
                    return false;
                }
            });
            if (flag) {
                var str = '<a href="javascript:;" class="active menuTab" data-id="' + dataUrl + '">' + menuName + ' <i class="fa fa-remove"></i></a>';
                $('.menuTab').removeClass('active');
                var str1 = '<iframe class="LRADMS_iframe" id="iframe' + dataId + '" name="iframe' + dataId + '"  width="100%" height="100%" src="' + dataUrl + '" frameborder="0" data-id="' + dataUrl + '" seamless></iframe>';
                $('.mainContent').find('iframe.LRADMS_iframe').hide();
                $('.mainContent').append(str1);
                //$.loading(true);
                $('.mainContent iframe:visible').load(function () {
                    //$.loading(false);
                });
                $('.menuTabs .page-tabs-content').append(str);
                $.learuntab.scrollToTab($('.menuTab.active'));
            }
            return false;
        },
        scrollTabRight: function () {
            var marginLeftVal = Math.abs(parseInt($('.page-tabs-content').css('margin-left')));
            var tabOuterWidth = $.learuntab.calSumWidth($(".content-tabs").children().not(".menuTabs"));
            var visibleWidth = $(".content-tabs").outerWidth(true) - tabOuterWidth;
            var scrollVal = 0;
            if ($(".page-tabs-content").width() < visibleWidth) {
                return false;
            } else {
                var tabElement = $(".menuTab:first");
                var offsetVal = 0;
                while ((offsetVal + $(tabElement).outerWidth(true)) <= marginLeftVal) {
                    offsetVal += $(tabElement).outerWidth(true);
                    tabElement = $(tabElement).next();
                }
                offsetVal = 0;
                while ((offsetVal + $(tabElement).outerWidth(true)) < (visibleWidth) && tabElement.length > 0) {
                    offsetVal += $(tabElement).outerWidth(true);
                    tabElement = $(tabElement).next();
                }
                scrollVal = $.learuntab.calSumWidth($(tabElement).prevAll());
                if (scrollVal > 0) {
                    $('.page-tabs-content').animate({
                        marginLeft: 0 - scrollVal + 'px'
                    }, "fast");
                }
            }
        },
        scrollTabLeft: function () {
            var marginLeftVal = Math.abs(parseInt($('.page-tabs-content').css('margin-left')));
            var tabOuterWidth = $.learuntab.calSumWidth($(".content-tabs").children().not(".menuTabs"));
            var visibleWidth = $(".content-tabs").outerWidth(true) - tabOuterWidth;
            var scrollVal = 0;
            if ($(".page-tabs-content").width() < visibleWidth) {
                return false;
            } else {
                var tabElement = $(".menuTab:first");
                var offsetVal = 0;
                while ((offsetVal + $(tabElement).outerWidth(true)) <= marginLeftVal) {
                    offsetVal += $(tabElement).outerWidth(true);
                    tabElement = $(tabElement).next();
                }
                offsetVal = 0;
                if ($.learuntab.calSumWidth($(tabElement).prevAll()) > visibleWidth) {
                    while ((offsetVal + $(tabElement).outerWidth(true)) < (visibleWidth) && tabElement.length > 0) {
                        offsetVal += $(tabElement).outerWidth(true);
                        tabElement = $(tabElement).prev();
                    }
                    scrollVal = $.learuntab.calSumWidth($(tabElement).prevAll());
                }
            }
            $('.page-tabs-content').animate({
                marginLeft: 0 - scrollVal + 'px'
            }, "fast");
        },
        scrollToTab: function (element) {
            var marginLeftVal = $.learuntab.calSumWidth($(element).prevAll()), marginRightVal = $.learuntab.calSumWidth($(element).nextAll());
            var tabOuterWidth = $.learuntab.calSumWidth($(".content-tabs").children().not(".menuTabs"));
            var visibleWidth = $(".content-tabs").outerWidth(true) - tabOuterWidth;
            var scrollVal = 0;
            if ($(".page-tabs-content").outerWidth() < visibleWidth) {
                scrollVal = 0;
            } else if (marginRightVal <= (visibleWidth - $(element).outerWidth(true) - $(element).next().outerWidth(true))) {
                if ((visibleWidth - $(element).next().outerWidth(true)) > marginRightVal) {
                    scrollVal = marginLeftVal;
                    var tabElement = element;
                    while ((scrollVal - $(tabElement).outerWidth()) > ($(".page-tabs-content").outerWidth() - visibleWidth)) {
                        scrollVal -= $(tabElement).prev().outerWidth();
                        tabElement = $(tabElement).prev();
                    }
                }
            } else if (marginLeftVal > (visibleWidth - $(element).outerWidth(true) - $(element).prev().outerWidth(true))) {
                scrollVal = marginLeftVal - $(element).prev().outerWidth(true);
            }
            $('.page-tabs-content').animate({
                marginLeft: 0 - scrollVal + 'px'
            }, "fast");
        },
        calSumWidth: function (element) {
            var width = 0;
            $(element).each(function () {
                width += $(this).outerWidth(true);
            });
            return width;
        },
        init: function () {
            $('.menuItem').on('click', $.learuntab.addTab);
            $('.menuTabs').on('click', '.menuTab i', $.learuntab.closeTab);
            $('.menuTabs').on('click', '.menuTab', $.learuntab.activeTab);
            $('.tabLeft').on('click', $.learuntab.scrollTabLeft);
            $('.tabRight').on('click', $.learuntab.scrollTabRight);
            $('.tabReload').on('click', $.learuntab.refreshTab);
            $('.tabCloseCurrent').on('click', function () {
                $('.page-tabs-content').find('.active i').trigger("click");
            });
            $('.tabCloseAll').on('click', function () {
                $('.page-tabs-content').children("[data-id]").find('.fa-remove').each(function () {
                    $('.LRADMS_iframe[data-id="' + $(this).data('id') + '"]').remove();
                    $(this).parents('a').remove();
                });
                $('.page-tabs-content').children("[data-id]:first").each(function () {
                    $('.LRADMS_iframe[data-id="' + $(this).data('id') + '"]').show();
                    $(this).addClass("active");
                });
                $('.page-tabs-content').css("margin-left", "0");
            });
            $('.tabCloseOther').on('click', $.learuntab.closeOtherTabs);
            $('.fullscreen').on('click', function () {
                if (!$(this).attr('fullscreen')) {
                    $(this).attr('fullscreen', 'true');
                    $.learuntab.requestFullScreen();
                } else {
                    $(this).removeAttr('fullscreen')
                    $.learuntab.exitFullscreen();
                }
            });
        }
    };
    $.learunindex = {
        load: function () {
            $("body").removeClass("hold-transition")
            $("#content-wrapper").find('.mainContent').height($(window).height() - 100);
            $(window).resize(function (e) {
                $("#content-wrapper").find('.mainContent').height($(window).height() - 100);
            });
            $(".sidebar-toggle").click(function () {
                if (!$("body").hasClass("sidebar-collapse")) {
                    $("body").addClass("sidebar-collapse");
                } else {
                    $("body").removeClass("sidebar-collapse");
                }
            })
            $(window).load(function () {
                window.setTimeout(function () {
                    $('#ajax-loader').fadeOut();
                }, 300);
            });
        },
        jsonWhere: function (data, action) {
            if (action == null) return;
            var reval = new Array();
            $(data).each(function (i, v) {
                if (action(v)) {
                    reval.push(v);
                }
            })
            return reval;
        },
        loadMenu: function () {
            var data = [
  {
    "F_ModuleId": "1",
    "F_ParentId": "0",
    "F_EnCode": "SysManage",
    "F_FullName": "水质查询与分析",
    "F_Icon": "fa fa-desktop",
    "F_UrlAddress": null,
    "F_Target": "expand",
    "F_IsMenu": 0,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 1,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": null,
    "F_CreateDate": null,
    "F_CreateUserId": null,
    "F_CreateUserName": null,
    "F_ModifyDate": "2015-11-17 11:22:46",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "1_1",
    "F_ParentId": "1",
    "F_EnCode": "SysManage",
    "F_FullName": "水质信息查询",
    "F_Icon": "fa fa-desktop",
    "F_UrlAddress": null,
    "F_Target": "expand",
    "F_IsMenu": 0,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 1,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": null,
    "F_CreateDate": null,
    "F_CreateUserId": null,
    "F_CreateUserName": null,
    "F_ModifyDate": "2015-11-17 11:22:46",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "1_1_2",
    "F_ParentId": "1_1",
    "F_EnCode": "AreaManage",
    "F_FullName": "水质监测数据查询",
    "F_Icon": "fa fa-leaf",
    "F_UrlAddress": "zhyw/query/szcx_jcsj.html",
    "F_Target": "iframe",
    "F_IsMenu": 1,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 1,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": "监测数据查询",
    "F_CreateDate": "2015-11-12 14:38:20",
    "F_CreateUserId": "System",
    "F_CreateUserName": "超级管理员",
    "F_ModifyDate": "2016-04-29 14:05:33",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "1_1_3",
    "F_ParentId": "1_1",
    "F_EnCode": "AreaManage",
    "F_FullName": "水质评价结果查询",
    "F_Icon": "fa fa-leaf",
    "F_UrlAddress": "zhyw/query/szcx_pjjg.html",
    "F_Target": "iframe",
    "F_IsMenu": 1,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 2,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": "评价结果查询",
    "F_CreateDate": "2015-11-12 14:38:20",
    "F_CreateUserId": "System",
    "F_CreateUserName": "超级管理员",
    "F_ModifyDate": "2016-04-29 14:05:33",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "1_1_1",
    "F_ParentId": "1_1",
    "F_EnCode": "AreaManage",
    "F_FullName": "基本信息查询",
    "F_Icon": "fa fa-leaf",
    "F_UrlAddress": "cxfx/szcx_jbxx.html",
    "F_Target": "iframe",
    "F_IsMenu": 1,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 3,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": "基本信息查询",
    "F_CreateDate": "2015-11-12 14:38:20",
    "F_CreateUserId": "System",
    "F_CreateUserName": "超级管理员",
    "F_ModifyDate": "2016-04-29 14:05:33",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "1_2",
    "F_ParentId": "1",
    "F_EnCode": "SysManage",
    "F_FullName": "水质统计分析",
    "F_Icon": "fa fa-desktop",
    "F_UrlAddress": null,
    "F_Target": "expand",
    "F_IsMenu": 0,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 2,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": null,
    "F_CreateDate": null,
    "F_CreateUserId": null,
    "F_CreateUserName": null,
    "F_ModifyDate": "2015-11-17 11:22:46",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "1_2_1",
    "F_ParentId": "1_2",
    "F_EnCode": "SysManage",
    "F_FullName": "水质统计分析",
    "F_Icon": "fa fa-desktop",
    "F_UrlAddress": null,
    "F_Target": "expand",
    "F_IsMenu": 0,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 2,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": null,
    "F_CreateDate": null,
    "F_CreateUserId": null,
    "F_CreateUserName": null,
    "F_ModifyDate": "2015-11-17 11:22:46",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "2",
    "F_ParentId": "0",
    "F_EnCode": "SysManage",
    "F_FullName": "突发水事件信息",
    "F_Icon": "fa fa-desktop",
    "F_UrlAddress": null,
    "F_Target": "expand",
    "F_IsMenu": 0,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 2,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": null,
    "F_CreateDate": null,
    "F_CreateUserId": null,
    "F_CreateUserName": null,
    "F_ModifyDate": "2015-11-17 11:22:46",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "2_1",
    "F_ParentId": "2",
    "F_EnCode": "AreaManage",
    "F_FullName": "突发水事件实时信息",
    "F_Icon": "fa fa-leaf",
    "F_UrlAddress": "/cxfx/",
    "F_Target": "iframe",
    "F_IsMenu": 1,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 1,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": "突发水事件实时信息",
    "F_CreateDate": "2015-11-12 14:38:20",
    "F_CreateUserId": "System",
    "F_CreateUserName": "超级管理员",
    "F_ModifyDate": "2016-04-29 14:05:33",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "2_2",
    "F_ParentId": "2",
    "F_EnCode": "AreaManage",
    "F_FullName": "基础信息查询",
    "F_Icon": "fa fa-leaf",
    "F_UrlAddress": "/cxfx/",
    "F_Target": "iframe",
    "F_IsMenu": 1,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 2,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": "基础信息查询",
    "F_CreateDate": "2015-11-12 14:38:20",
    "F_CreateUserId": "System",
    "F_CreateUserName": "超级管理员",
    "F_ModifyDate": "2016-04-29 14:05:33",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "2_3",
    "F_ParentId": "2",
    "F_EnCode": "AreaManage",
    "F_FullName": "水环境应急监测信息查询",
    "F_Icon": "fa fa-leaf",
    "F_UrlAddress": "/cxfx/",
    "F_Target": "iframe",
    "F_IsMenu": 1,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 3,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": "水环境应急监测信息查询",
    "F_CreateDate": "2015-11-12 14:38:20",
    "F_CreateUserId": "System",
    "F_CreateUserName": "超级管理员",
    "F_ModifyDate": "2016-04-29 14:05:33",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "2_4",
    "F_ParentId": "2",
    "F_EnCode": "AreaManage",
    "F_FullName": "突发污染事故报告",
    "F_Icon": "fa fa-leaf",
    "F_UrlAddress": "/cxfx/",
    "F_Target": "iframe",
    "F_IsMenu": 1,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 4,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": "突发污染事故报告",
    "F_CreateDate": "2015-11-12 14:38:20",
    "F_CreateUserId": "System",
    "F_CreateUserName": "超级管理员",
    "F_ModifyDate": "2016-04-29 14:05:33",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "3",
    "F_ParentId": "0",
    "F_EnCode": "SysManage",
    "F_FullName": "测站工况信息",
    "F_Icon": "fa fa-desktop",
    "F_UrlAddress": "zhyw/query/czgkxx.html",
    "F_Target": "iframe",
    "F_IsMenu": 1,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 3,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": "测站工况信息",
    "F_CreateDate": "2015-11-12 14:38:20",
    "F_CreateUserId": "System",
    "F_CreateUserName": "超级管理员",
    "F_ModifyDate": "2015-11-17 11:22:46",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "4",
    "F_ParentId": "0",
    "F_EnCode": "SysManage",
    "F_FullName": "环保信息",
    "F_Icon": "fa fa-desktop",
    "F_UrlAddress": null,
    "F_Target": "expand",
    "F_IsMenu": 0,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 4,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": null,
    "F_CreateDate": null,
    "F_CreateUserId": null,
    "F_CreateUserName": null,
    "F_ModifyDate": "2015-11-17 11:22:46",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "4_1",
    "F_ParentId": "4",
    "F_EnCode": "AreaManage",
    "F_FullName": "重点污染源企业",
    "F_Icon": "fa fa-leaf",
    "F_UrlAddress": "zhyw/query/zdwry.html",
    "F_Target": "iframe",
    "F_IsMenu": 1,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 1,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": "重点污染源企业",
    "F_CreateDate": "2015-11-12 14:38:20",
    "F_CreateUserId": "System",
    "F_CreateUserName": "超级管理员",
    "F_ModifyDate": "2016-04-29 14:05:33",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "4_2",
    "F_ParentId": "4",
    "F_EnCode": "AreaManage",
    "F_FullName": "排污口",
    "F_Icon": "fa fa-leaf",
    "F_UrlAddress": "/cxfx/",
    "F_Target": "iframe",
    "F_IsMenu": 1,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 2,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": "排污口信息",
    "F_CreateDate": "2015-11-12 14:38:20",
    "F_CreateUserId": "System",
    "F_CreateUserName": "超级管理员",
    "F_ModifyDate": "2016-04-29 14:05:33",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "4_3",
    "F_ParentId": "4",
    "F_EnCode": "AreaManage",
    "F_FullName": "排污口污染物",
    "F_Icon": "fa fa-leaf",
    "F_UrlAddress": "/cxfx/",
    "F_Target": "iframe",
    "F_IsMenu": 1,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 3,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": "排污口污染物",
    "F_CreateDate": "2015-11-12 14:38:20",
    "F_CreateUserId": "System",
    "F_CreateUserName": "超级管理员",
    "F_ModifyDate": "2016-04-29 14:05:33",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "4_4",
    "F_ParentId": "4",
    "F_EnCode": "AreaManage",
    "F_FullName": "监测设备",
    "F_Icon": "fa fa-leaf",
    "F_UrlAddress": "/cxfx/",
    "F_Target": "iframe",
    "F_IsMenu": 1,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 4,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": "监测设备",
    "F_CreateDate": "2015-11-12 14:38:20",
    "F_CreateUserId": "System",
    "F_CreateUserName": "超级管理员",
    "F_ModifyDate": "2016-04-29 14:05:33",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "4_6",
    "F_ParentId": "4",
    "F_EnCode": "AreaManage",
    "F_FullName": "重点污染源",
    "F_Icon": "fa fa-leaf",
    "F_UrlAddress": "zhyw/query/zdwry.html",
    "F_Target": "iframe",
    "F_IsMenu": 1,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 5,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": "重点污染源",
    "F_CreateDate": "2015-11-12 14:38:20",
    "F_CreateUserId": "System",
    "F_CreateUserName": "超级管理员",
    "F_ModifyDate": "2016-04-29 14:05:33",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "4_5",
    "F_ParentId": "4",
    "F_EnCode": "AreaManage",
    "F_FullName": "环评信息",
    "F_Icon": "fa fa-leaf",
    "F_UrlAddress": "/cxfx/",
    "F_Target": "iframe",
    "F_IsMenu": 1,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 6,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": "环评信息",
    "F_CreateDate": "2015-11-12 14:38:20",
    "F_CreateUserId": "System",
    "F_CreateUserName": "超级管理员",
    "F_ModifyDate": "2016-04-29 14:05:33",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "4_5_1",
    "F_ParentId": "4_5",
    "F_EnCode": "AreaManage",
    "F_FullName": "项目基本情况",
    "F_Icon": "fa fa-leaf",
    "F_UrlAddress": "/cxfx/",
    "F_Target": "iframe",
    "F_IsMenu": 1,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 1,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": "项目基本情况",
    "F_CreateDate": "2015-11-12 14:38:20",
    "F_CreateUserId": "System",
    "F_CreateUserName": "超级管理员",
    "F_ModifyDate": "2016-04-29 14:05:33",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "4_5_2",
    "F_ParentId": "4_5",
    "F_EnCode": "AreaManage",
    "F_FullName": "环评成果与结论",
    "F_Icon": "fa fa-leaf",
    "F_UrlAddress": "/cxfx/",
    "F_Target": "iframe",
    "F_IsMenu": 1,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 2,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": "环评成果与结论",
    "F_CreateDate": "2015-11-12 14:38:20",
    "F_CreateUserId": "System",
    "F_CreateUserName": "超级管理员",
    "F_ModifyDate": "2016-04-29 14:05:33",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "4_5_3",
    "F_ParentId": "4_5",
    "F_EnCode": "AreaManage",
    "F_FullName": "环境影响补偿措施",
    "F_Icon": "fa fa-leaf",
    "F_UrlAddress": "/cxfx/",
    "F_Target": "iframe",
    "F_IsMenu": 1,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 3,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": "环境影响补偿措施",
    "F_CreateDate": "2015-11-12 14:38:20",
    "F_CreateUserId": "System",
    "F_CreateUserName": "超级管理员",
    "F_ModifyDate": "2016-04-29 14:05:33",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "5",
    "F_ParentId": "0",
    "F_EnCode": "SysManage",
    "F_FullName": "渔业信息",
    "F_Icon": "fa fa-desktop",
    "F_UrlAddress": null,
    "F_Target": "expand",
    "F_IsMenu": 0,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 5,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": null,
    "F_CreateDate": null,
    "F_CreateUserId": null,
    "F_CreateUserName": null,
    "F_ModifyDate": "2015-11-17 11:22:46",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "5_1",
    "F_ParentId": "5",
    "F_EnCode": "AreaManage",
    "F_FullName": "湖泊规划",
    "F_Icon": "fa fa-leaf",
    "F_UrlAddress": "/cxfx/",
    "F_Target": "iframe",
    "F_IsMenu": 1,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 1,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": "湖泊规划",
    "F_CreateDate": "2015-11-12 14:38:20",
    "F_CreateUserId": "System",
    "F_CreateUserName": "超级管理员",
    "F_ModifyDate": "2016-04-29 14:05:33",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "5_2",
    "F_ParentId": "5",
    "F_EnCode": "AreaManage",
    "F_FullName": "渔业水域生态状况",
    "F_Icon": "fa fa-leaf",
    "F_UrlAddress": "/cxfx/",
    "F_Target": "iframe",
    "F_IsMenu": 1,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 2,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": "渔业水域生态状况",
    "F_CreateDate": "2015-11-12 14:38:20",
    "F_CreateUserId": "System",
    "F_CreateUserName": "超级管理员",
    "F_ModifyDate": "2016-04-29 14:05:33",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "5_3",
    "F_ParentId": "5",
    "F_EnCode": "AreaManage",
    "F_FullName": "渔业养殖分布",
    "F_Icon": "fa fa-leaf",
    "F_UrlAddress": "/cxfx/",
    "F_Target": "iframe",
    "F_IsMenu": 1,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 3,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": "渔业养殖分布",
    "F_CreateDate": "2015-11-12 14:38:20",
    "F_CreateUserId": "System",
    "F_CreateUserName": "超级管理员",
    "F_ModifyDate": "2016-04-29 14:05:33",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "5_4",
    "F_ParentId": "5",
    "F_EnCode": "AreaManage",
    "F_FullName": "渔民档案",
    "F_Icon": "fa fa-leaf",
    "F_UrlAddress": "/cxfx/",
    "F_Target": "iframe",
    "F_IsMenu": 1,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 4,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": "渔民档案",
    "F_CreateDate": "2015-11-12 14:38:20",
    "F_CreateUserId": "System",
    "F_CreateUserName": "超级管理员",
    "F_ModifyDate": "2016-04-29 14:05:33",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "5_5",
    "F_ParentId": "5",
    "F_EnCode": "AreaManage",
    "F_FullName": "水产养殖场",
    "F_Icon": "fa fa-leaf",
    "F_UrlAddress": "zhyw/query/scyzc.html",
    "F_Target": "iframe",
    "F_IsMenu": 1,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 5,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": "水产养殖场",
    "F_CreateDate": "2015-11-12 14:38:20",
    "F_CreateUserId": "System",
    "F_CreateUserName": "超级管理员",
    "F_ModifyDate": "2016-04-29 14:05:33",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "6",
    "F_ParentId": "0",
    "F_EnCode": "SysManage",
    "F_FullName": "社会经济信息",
    "F_Icon": "fa fa-desktop",
    "F_UrlAddress": "zhyw/query/shjjxx.html",
    "F_Target": "iframe",
    "F_IsMenu": 1,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 6,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": null,
    "F_CreateDate": null,
    "F_CreateUserId": null,
    "F_CreateUserName": null,
    "F_ModifyDate": "2015-11-17 11:22:46",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "7",
    "F_ParentId": "0",
    "F_EnCode": "SysManage",
    "F_FullName": "通报公报",
    "F_Icon": "fa fa-desktop",
    "F_UrlAddress": "zhyw/query/tbgbcx.html",
    "F_Target": "iframe",
    "F_IsMenu": 0,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 7,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": null,
    "F_CreateDate": null,
    "F_CreateUserId": null,
    "F_CreateUserName": null,
    "F_ModifyDate": "2015-11-17 11:22:46",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "8",
    "F_ParentId": "0",
    "F_EnCode": "SysManage",
    "F_FullName": "水资源信息",
    "F_Icon": "fa fa-desktop",
    "F_UrlAddress": "zhyw/query/szyxicx.html",
    "F_Target": "iframe",
    "F_IsMenu": 0,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 8,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": null,
    "F_CreateDate": null,
    "F_CreateUserId": null,
    "F_CreateUserName": null,
    "F_ModifyDate": "2015-11-17 11:22:46",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "9",
    "F_ParentId": "0",
    "F_EnCode": "SysManage",
    "F_FullName": "水文信息",
    "F_Icon": "fa fa-desktop",
    "F_UrlAddress": null,
    "F_Target": "expand",
    "F_IsMenu": 0,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 9,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": null,
    "F_CreateDate": null,
    "F_CreateUserId": null,
    "F_CreateUserName": null,
    "F_ModifyDate": "2015-11-17 11:22:46",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "9_1",
    "F_ParentId": "9",
    "F_EnCode": "AreaManage",
    "F_FullName": "太湖水位分析",
    "F_Icon": "fa fa-leaf",
    "F_UrlAddress": "zhyw/query/swxx_thsw.html",
    "F_Target": "iframe",
    "F_IsMenu": 1,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 1,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": "太湖水位分析",
    "F_CreateDate": "2015-11-12 14:38:20",
    "F_CreateUserId": "System",
    "F_CreateUserName": "超级管理员",
    "F_ModifyDate": "2016-04-29 14:05:33",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "9_2",
    "F_ParentId": "9",
    "F_EnCode": "AreaManage",
    "F_FullName": "单站水情多年对比",
    "F_Icon": "fa fa-leaf",
    "F_UrlAddress": "zhyw/query/swxx_dzsq.html",
    "F_Target": "iframe",
    "F_IsMenu": 1,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 2,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": "单站水情多年对比",
    "F_CreateDate": "2015-11-12 14:38:20",
    "F_CreateUserId": "System",
    "F_CreateUserName": "超级管理员",
    "F_ModifyDate": "2016-04-29 14:05:33",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "9_3",
    "F_ParentId": "9",
    "F_EnCode": "AreaManage",
    "F_FullName": "多站水情对比分析",
    "F_Icon": "fa fa-leaf",
    "F_UrlAddress": "zhyw/query/swxx_dzsqdb.html",
    "F_Target": "iframe",
    "F_IsMenu": 1,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 3,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": "多站水情对比分析",
    "F_CreateDate": "2015-11-12 14:38:20",
    "F_CreateUserId": "System",
    "F_CreateUserName": "超级管理员",
    "F_ModifyDate": "2016-04-29 14:05:33",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "10",
    "F_ParentId": "0",
    "F_EnCode": "SysManage",
    "F_FullName": "工情信息",
    "F_Icon": "fa fa-desktop",
    "F_UrlAddress": null,
    "F_Target": "expand",
    "F_IsMenu": 0,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 10,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": null,
    "F_CreateDate": null,
    "F_CreateUserId": null,
    "F_CreateUserName": null,
    "F_ModifyDate": "2015-11-17 11:22:46",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "10_1",
    "F_ParentId": "10",
    "F_EnCode": "AreaManage",
    "F_FullName": "流量分析",
    "F_Icon": "fa fa-leaf",
    "F_UrlAddress": "zhyw/query/gqxx_llfx.html",
    "F_Target": "iframe",
    "F_IsMenu": 1,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 1,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": "流量分析",
    "F_CreateDate": "2015-11-12 14:38:20",
    "F_CreateUserId": "System",
    "F_CreateUserName": "超级管理员",
    "F_ModifyDate": "2016-04-29 14:05:33",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "10_1",
    "F_ParentId": "10",
    "F_EnCode": "AreaManage",
    "F_FullName": "水位分析",
    "F_Icon": "fa fa-leaf",
    "F_UrlAddress": "zhyw/query/gqxx_swfx.html",
    "F_Target": "iframe",
    "F_IsMenu": 1,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 2,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": "水位分析",
    "F_CreateDate": "2015-11-12 14:38:20",
    "F_CreateUserId": "System",
    "F_CreateUserName": "超级管理员",
    "F_ModifyDate": "2016-04-29 14:05:33",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "10_1",
    "F_ParentId": "10",
    "F_EnCode": "AreaManage",
    "F_FullName": "运行分析",
    "F_Icon": "fa fa-leaf",
    "F_UrlAddress": "zhyw/query/gqxx_yxfx.html",
    "F_Target": "iframe",
    "F_IsMenu": 1,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 3,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": "运行分析",
    "F_CreateDate": "2015-11-12 14:38:20",
    "F_CreateUserId": "System",
    "F_CreateUserName": "超级管理员",
    "F_ModifyDate": "2016-04-29 14:05:33",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "10_1",
    "F_ParentId": "10",
    "F_EnCode": "AreaManage",
    "F_FullName": "闸门运行情况统计分析",
    "F_Icon": "fa fa-leaf",
    "F_UrlAddress": "zhyw/query/gqxx_tmyxqktjfx.html",
    "F_Target": "iframe",
    "F_IsMenu": 1,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 4,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": "闸门运行情况统计分析",
    "F_CreateDate": "2015-11-12 14:38:20",
    "F_CreateUserId": "System",
    "F_CreateUserName": "超级管理员",
    "F_ModifyDate": "2016-04-29 14:05:33",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "11",
    "F_ParentId": "0",
    "F_EnCode": "SysManage",
    "F_FullName": "工程资料",
    "F_Icon": "fa fa-desktop",
    "F_UrlAddress": null,
    "F_Target": "expand",
    "F_IsMenu": 0,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 11,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": null,
    "F_CreateDate": null,
    "F_CreateUserId": null,
    "F_CreateUserName": null,
    "F_ModifyDate": "2015-11-17 11:22:46",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "12",
    "F_ParentId": "0",
    "F_EnCode": "SysManage",
    "F_FullName": "气象信息",
    "F_Icon": "fa fa-desktop",
    "F_UrlAddress": "zhyw/query/qxxx.html",
    "F_Target": "iframe",
    "F_IsMenu": 1,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 12,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": "气象信息",
    "F_CreateDate": "2015-11-12 14:38:20",
    "F_CreateUserId": "System",
    "F_CreateUserName": "System",
    "F_ModifyDate": "2015-11-17 11:22:46",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  },
  {
    "F_ModuleId": "12",
    "F_ParentId": "0",
    "F_EnCode": "SysManage",
    "F_FullName": "多维统计",
    "F_Icon": "fa fa-desktop",
    "F_UrlAddress": "zhyw/query/dwtj.html",
    "F_Target": "iframe",
    "F_IsMenu": 1,
    "F_AllowExpand": 1,
    "F_IsPublic": 0,
    "F_AllowEdit": null,
    "F_AllowDelete": null,
    "F_SortCode": 12,
    "F_DeleteMark": 0,
    "F_EnabledMark": 1,
    "F_Description": "多维查询",
    "F_CreateDate": "2015-11-12 14:38:20",
    "F_CreateUserId": "System",
    "F_CreateUserName": "System",
    "F_ModifyDate": "2015-11-17 11:22:46",
    "F_ModifyUserId": "System",
    "F_ModifyUserName": "超级管理员"
  }
];
            var _html = "";
            $.each(data, function (i) {
                var row = data[i];
                if (row.F_ParentId == "0") {
                    if (i == 0) {
                        _html += '<li class="treeview active">';
                    } else {
                        _html += '<li class="treeview">';
                    }
                    if(row.F_Target=="iframe"){
                         _html += '<a class="menuItem" data-id="' + row.F_ModuleId + '" href="'+row.F_UrlAddress+'">'
                    }else{
                         _html += '<a href="#">'
                    }
                   
                    _html += '<i class="' + row.F_Icon + '"></i><span>' + row.F_FullName + '</span>'
                    
                    var childNodes = $.learunindex.jsonWhere(data, function (v) { return v.F_ParentId == row.F_ModuleId });
                    if (childNodes.length > 0) {
                        _html += '<i class="fa fa-angle-left pull-right"></i>';
                        _html += '</a>';
                        _html += '<ul class="treeview-menu">';
                        $.each(childNodes, function (i) {
                            var subrow = childNodes[i];
                            var subchildNodes = $.learunindex.jsonWhere(data, function (v) { return v.F_ParentId == subrow.F_ModuleId });
                            _html += '<li>';
                            if (subchildNodes.length > 0) {
                                _html += '<a href="#"><i class="' + subrow.F_Icon + '"></i>' + subrow.F_FullName + '';
                                _html += '<i class="fa fa-angle-left pull-right"></i></a>';
                                _html += '<ul class="treeview-menu">';
                                $.each(subchildNodes, function (i) {
                                    var subchildNodesrow = subchildNodes[i];
                                    _html += '<li><a class="menuItem" data-id="' + subchildNodesrow.F_ModuleId + '" href="' + subchildNodesrow.F_UrlAddress + '"><i class="' + subchildNodesrow.F_Icon + '"></i>' + subchildNodesrow.F_FullName + '</a></li>';
                                });
                                _html += '</ul>';

                            } else {
                                _html += '<a class="menuItem" data-id="' + subrow.F_ModuleId + '" href="' + subrow.F_UrlAddress + '"><i class="' + subrow.F_Icon + '"></i>' + subrow.F_FullName + '</a>';
                            }
                            _html += '</li>';
                        });
                        _html += '</ul>';
                    }else{
                        _html += '</a>';
                    }
                    _html += '</li>'
                }
            });
            $("#sidebar-menu").append(_html);
            $("#sidebar-menu li a").click(function () {
                var d = $(this), e = d.next();
                if (e.is(".treeview-menu") && e.is(":visible")) {
                    e.slideUp(500, function () {
                        e.removeClass("menu-open")
                    }),
                    e.parent("li").removeClass("active")
                } else if (e.is(".treeview-menu") && !e.is(":visible")) {
                    var f = d.parents("ul").first(),
                    g = f.find("ul:visible").slideUp(500);
                    g.removeClass("menu-open");
                    var h = d.parent("li");
                    e.slideDown(500, function () {
                        e.addClass("menu-open"),
                        f.find("li.active").removeClass("active"),
                        h.addClass("active");

                        var _height1 = $(window).height() - $("#sidebar-menu >li.active").position().top - 41;
                        var _height2 = $("#sidebar-menu li > ul.menu-open").height() + 10
                        if (_height2 > _height1) {
                            $("#sidebar-menu >li > ul.menu-open").css({
                                overflow: "auto",
                                height: _height1
                            })
                        }
                    })
                }
                e.is(".treeview-menu");
            });
        }
    };
    $(function () {
        $.learunindex.load();
        $.learunindex.loadMenu();
        $.learuntab.init();
    });
})(jQuery);