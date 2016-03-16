/**
 * Created by Administrator on 2016/1/15 0015.
 */
$(function(){
    /*index*/
    /* 初始化 */
    $(".banner_wrap li").eq(0).addClass("animate-in").removeClass("animate-out").css("z-index","2").siblings().addClass("animate-out").removeClass("animate-in").css("z-index","1");
    var liN = 0;

    var liNum = $(".banner_wrap li").size();
    var bg=['#EFEDE7','#EFEDE7','#EFEDE7','#EFEDE7','#EFEDE7','#EFEDE7']
    function Slide(){
        $(".banner_tip li").eq(liN).addClass("banner_tip_on").siblings().removeClass("banner_tip_on");
        $(".banner_wrap li").eq(liN).addClass("animate-in").removeClass("animate-out").css({"z-index":"2"}).siblings().addClass("animate-out").removeClass("animate-in").css("z-index","1");
        $(".time_item a").removeClass("active");
        $(".time_item strong").css("color","#666");
        $(".time_item").eq(liN).children("a").addClass("active").siblings("strong").css("color",bg[liN]);
        $(".banner").css({"background":bg[liN]});
    }
    function LiN(){
        liN ++;
        if(liN>liNum-1){liN=0}
    }
    function LiP(){
        liN --;
        if(liN<0){liN=liNum-1};
    }
    /* 下一页*/
        $(".next").on("click",function(){
            LiN();
            Slide();
        });
    /* 上一页 */
        $(".prev").on("click",function(){
            LiP();
            Slide();
        });
    /* 圆点切换 */
    $(".banner_tip li").on('click', function() {
        liN = $(this).index();
        Slide();
    });
    /* 自动切换 */
    function page(){
        if(liN >= 1 ){
            LiN();
            Slide();
        }}
    /*add*/
    var banTimeSilde;
    function moreAutoClick(){
        $('.banner .next,.banner .prev,.banner_tip li').click(function(){
            $(".banner,.time_item a").hover(function(){
                    clearInterval(banTimeSilde);
                },
                function(){
                    clearInterval(banTimeSilde);
                    banTimeSilde = setInterval(function(){page()},5000);
                }
            );
        });
    }
    moreAutoClick();
    /* 时间轴切换 */
    $(".time_item a").on("click",function(){
        liN = $(this).parent().index();
        Slide();
    });

    /* 标签切换 */
    $(".tab_hd a").on("click",function(){
        var i = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".tab_bd li").addClass("scall nodelay");
        switch(i){
            case 0:
                $(".tab_bd li").removeClass("scall")
                break;
            case 1:
                $(".tab1").removeClass("scall")
                break;
            case 2:
                $(".tab2").removeClass("scall")
                break;
            case 3:
                $(".tab3").removeClass("scall")
                break;
        }
    });
    /**/
    var deg=0;
    $('.link_list li a').hover(
        function(){
            $(this).mousemove(function(event){
                var pos = event.pageX-$(this).offset().left;
                deg=pos*0.4-20;
                $('.link_wrap').css('transform','rotateY('+deg+'deg)')
            })
        },function(){
            $('.link_wrap').css('transform','rotateY(0deg)')
        });

    /*main*/
    /* 初始化高度 */
    $(".study .content_in").each(function()
    {
        $(this).height($(this).children().eq(0).height())
    });
    /* 高度自适应 */
    $(".study .content_hd").children("span").on("click", function()
    {
        var bd = $(this).parents(".content").find(".content_in");
        bd.animate({
            height : bd.children().eq($(this).index() - 1).height()
        }, 200)
    });
    $(".input i").click(function()
    {
        $(this).hide()
        $(this).siblings("input").focus()
        $(this).siblings(".input_text").focus()
    });
    $(".input .input_text").focus(function()
    {
        $(this).siblings("i").hide()
        $(this).parent().css("border-color", "#f8991d")
    });
    $(".input .input_text").blur(function()
    {
        $(this).parent().css("border-color", "#dfdfdf")
        if ($(this).val() == "")
        {
            $(this).siblings("i").show()
        }
    });
    /*勾选（同意，匿名，记住密码）*/
    $(".checked").toggle(function()
    {
        $(this).addClass("check")
        $(".res_btn a").addClass("agray")
    }, function()
    {
        $(this).removeClass("check")
        $(".res_btn a").removeClass("agray")
    });
    /* 展开隐藏,多选按钮*/
    function acheck(a)
    {
        $(a).click(function()
        {
            if ($(this).hasClass("achecked"))
            {
                $(this).removeClass("achecked")
            } else
            {
                $(this).addClass("achecked")
            }
        })
    }
    acheck(".share_select .acheck");
    acheck(".video_elist .acheck");
    acheck(".data_select .acheck");
    acheck(".col_item .acheck");
    acheck(".zone_ms .acheck");
    acheck(".exam_check .acheck");
    acheck(".cxfa_text .acheck");
    /* 单选按钮 */
    function Radio(a, b)
    {
        $(a).click(function()
        {
            $(a).removeClass(b)
            $(this).addClass(b)
        })
    }
    Radio(".radio", "radio_select");//举报原因选择
    Radio(".aradio", "aradio_select");
    /* 标签搜索 */
    function TagsSearch(a, b, c)
    {
        $(a).click(function(event)
        {
            event.stopPropagation();
            $(this).siblings(b).slideDown(100)
        })
        $(c).click(function()
        {
            $(this).siblings(b).slideDown(100)
        })
    }
    TagsSearch(".tags_search .input_text", ".tags_list", ".tags_search i");
    TagsSearch(".invite_search .input_text", ".invite_sbox", ".invite_search i");
    TagsSearch(".BBAQ_id", ".BBAQ_idset", "");
    TagsSearch(".search input", ".search_box", "");
    //收回
    function SpaceClick(a)
    {

        $(document).click(function()
        {
            $(a).hide();
        })
        $(a).click(function(event)
        {
            event.stopPropagation();
        })
    }
    SpaceClick(".search_box")
    SpaceClick(".tags_list")
    SpaceClick(".setting_box")
    SpaceClick(".invite_sbox")
    SpaceClick(".BBAQ_idset")
    SpaceClick(".ques_search")
    /*提问*/
    function QuesSearch(a, b, c, d)
    {
        $(a).click(function(event)
        {
            event.stopPropagation();
            $(this).parents(c).siblings(b).slideDown(100)
        })
        $(d).click(function()
        {
            $(this).parents(c).siblings(b).slideDown(100)
        })
    }
    QuesSearch(".ques_box .input_text", ".ques_search", ".input", ".ques_box i");
    QuesSearch(".search .input_text", ".search_box", ".input", ".search i");
    /*添加一个新问题*/
    $(".ques_new a").click(function()
    {
        $(this).parents(".pop_part").hide().siblings(".pop_part2").fadeIn(200)
    });
    /*头部用户信息*/
    $(".user_head").hover(function()
    {
        $(".sub_menu").fadeIn();
    }, function()
    {
        $(".sub_menu").fadeOut();
    });

    /* 上传文件 */
    function upload(a, b)
    {
        $(a).change(function()
        {
            var url = $(this).val();
            $(b).html(url)
        })
    }
    upload(".upload_file input", ".post_file span")
    upload(".video_upload input", ".file_name")
    /*举报原因选择*/
    $(".sub_set li a").click(
        function()
        {
            $(this).addClass("radio_select").parent().siblings("li")
                .children("a").removeClass("radio_select")
        })
    /*新建收藏夹*/
    $(".col_new").click(function()
    {
        $(this).parent().hide().next().show()
    });
    $(".col_clear").click(function()
    {
        $(".col_snew .input_text").val("")
        $(this).parent().hide().prev().show()
    });
    /*新建收藏夹判断*/
    $('.col_com').click(function(){
            if($(this).parent('.col_snew').find('.input_text').val() == ''){
                $('.alertbox').show();
            }
        }
    );
    /* 关闭弹窗 */
    function PopClose(a)
    {
        $(a).click(function()
        {
            $(this).parents(".pop_box").fadeOut(200)
            $(".share_bg").css("display", "none")
        })
    }
    PopClose(".pop_hd a");
    PopClose(".pop_bd .pop_clear");
    PopClose(".pop_true");
    /*立即关闭弹框*/
    $('.close_btn').click(function(){
        $('.pop_box').hide();
        $('.share_bg').hide();
    });
    /*反馈内容为空*/
    /*function FeedBackNull(){
        $('.pop_com').click(
            function(event){
                //event.stopPropagation();
                if($('.fd_textarea').val() == ''){
                    $('.pop_sent span').html('请输入反馈内容!').show();
                    $(this).off('click',PopCom);
                }
                else if($('.fb_mail').val()== ''){
                    $('.pop_sent span').html('请输入正确的邮箱地址!').show();
                    $(this).off('click',PopCom);
               }
                else{
                    PopCom();
                }}
        )}
    FeedBackNull();
     /*3s关闭弹窗*/
    var reporttimer = null;
    var reportendtime = null;
    $(".pop_com").click(
        function(){
            var that = this;
            $(this).parents('.pop_part').hide();
            $(this).parents('.pop_bd').children('.success_tips').show();
            reportendtime = 2;
            $(".turn_time").html(reportendtime);
            reporttimer = setInterval(function() {
                if (reportendtime <= 1) {
                    clearInterval(reporttimer);
                    $('.share_box').hide();
                    $('.col_box').hide();
                    $('.report_box').hide();
                    $('.feed_back_box').hide();
                    $('.study_invite').hide();
                    $('.share_bg').hide();
                    $(that).parents('.pop_part').show();
                    $(that).parents('.pop_bd').children('.success_tips').hide();
                }
                reportendtime--;
                $(".turn_time").html(reportendtime);
            }, 1000);
        }
    );

    /*登陆注册*/
    $(".log_tab").click(function()
    {
        var i = $(this).index();
        $(".log_part").eq(i).show().siblings(".log_part").hide();
        $(".log_tab").removeClass("log_current")
        $(this).addClass("log_current")
        if (i)
        {
            $(this).siblings(".log_close").addClass("log_close_on")
        } else
        {
            $(this).siblings(".log_close").removeClass("log_close_on")
        }
    })

    $(".log_close").click(function()
    {
        $(this).parents(".log_box").fadeOut(200)
        $(".share_bg").css("display", "none")
    });
    /* 打开弹出框 */
    function Popbox(a, b) {
        $(a).live("click", function() {
            $(b).fadeIn(200);
            $(".pop_bd").css("height", "auto");
            $(".share_bg").css("display", "block")
        })
    }
    Popbox(".share",".share_box");
    Popbox(".log_res a", ".log_box");
    Popbox(".post_btn",".post_box");
    Popbox(".class_info_box .invite", ".study_invite");
    Popbox(".video_ft .invite", ".study_invite");
    Popbox(".feed_back", ".feed_back_box");
    // Popbox(".video_question",".video_error");
    Popbox(".delete", ".QA_delete");
    Popbox(".report",".report_box");
    Popbox(".col",".col_box");
    Popbox(".news_col",".col_box");
    Popbox(".class_col", ".col_box");
    Popbox(".col_question", ".col_box");
    Popbox(".more_dialog", ".dialog_box");
    Popbox(".zone_qxszt a", ".zone_person_box");
    //Popbox(".queation a",".ques_box");
    Popbox(".del_on", ".QA_delete");
    Popbox(".re_exam_btn", ".re_exam");
    Popbox(".txt_login", ".log_box");
    Popbox(".blind_mail", ".mail_blind");
    Popbox(".blind_phone", ".phone_blind");
    Popbox(".modify_mail", ".mail_modify");
    Popbox(".modify_phone", ".phone_modify");
    Popbox(".delete_mail", ".mail_delete");
    Popbox(".delete_phone", ".phone_delete");
    Popbox(".col_del",".col_delete");
    Popbox(".shop_del",".shop_delete");
    //Popbox(".shop_top_delete",".shop_delete");
    /*action*/
    $(".plus").toggle(function(){
            $(this).css("background-position","0 1000px").css("padding-left","0").html('取消关注');
        },
        function(){
            $(this).css("background-position","0 -154px").css("padding-left","20px").html("关注问题")
        });

    /*赞*/
    function Acheck(o,a,b){ $(o).toggle(
        function(){
            var i=parseInt($(this).find(".num").html());
            $(this).children(".text").html(a);
            $(this).find(".num").html(i+1)
        },
        function(){ var i=parseInt($(this).find(".num").html());
            $(this).children(".text").html(b);
            $(this).find(".num").html(i-1);
        }
    )}
    Acheck(".assist","已赞","赞");
    Acheck(".news_assist","已赞","赞");
    Acheck(".others_zan","已赞","赞");
    /* 客服*/
    $(document).ready(function()
    {
        $(".float_side ul li").hover(function()
        {
            $(this).find(".sidebox").stop().animate({
                "width" : "120px"
            }, 200).css({
                "opacity" : "1",
                "filter" : "Alpha(opacity=100)",
                "background" : "#f8991d"
            })
        }, function()
        {
            $(this).find(".sidebox").stop().animate({
                "width" : "44px"
            }, 200).css({
                "opacity" : "0.3",
                "filter" : "Alpha(opacity=30)",
                "background" : "#000"
            })
        });
    });

    /*课程评论*/
    $(".reply").toggle(
        function()
        {
            $(this).parent().parent(".info_comment_each").children(".reply_block")
                .slideDown(200);
        },
        function()
        {
            $(this).parent().parent(".info_comment_each").children(".reply_block")
                .slideUp(200);

        });
    /*返回顶部*/
    $(".sidetop").click(function()
    {
        $('html,body').animate({
            'scrollTop' : 0
        }, 600);
    });
    /*用户表*/
    var userTimer = null;
    var ObjTop = 0;
    var ObjLeft = 0;
    function InfoShow()
    {
        clearInterval(userTimer);
        $(".info_comment_user_cardbox").fadeIn(300).css({
            "left" : ObjLeft,
            "top" : ObjTop - 180
        })
    }
    function InfoHide()
    {
        userTimer = setTimeout(function()
        {
            $(".info_comment_user_cardbox").hide()
        }, 200);
    }
    function InfObj(a, x, y)
    {
        $(a).mouseover(function()
        {
            ObjTop = $(this).offset().top + y;
            ObjLeft = $(this).offset().left - x;
            InfoShow();
        })
        $(a).mouseout(InfoHide)
    }
    $(".info_comment_user_cardbox").mouseover(function()
    {
        InfoShow();
    });
    $(".info_comment_user_cardbox").mouseout(InfoHide);
    InfObj(".info_comment_userpic", 0, 0);
    InfObj(".info_comment_username", 20, 0);
    InfObj(".inv_userlist_username", 20, 0);
    InfObj(".reply_userpic", 15, 0);
    InfObj(".usercard_name", 30, 10);
    InfObj(".plus_list li a", 20, 20);
    InfObj(".person_action a", 20, 20);

    $('.info_comment_user_card_content .info_btn').toggle(
        function(){
            $(this).css('background','#686d77').html('取消关注');
        },
        function(){
            $(this).css('background','#f8891d').html('关注');
        }
    );
    /* 分享信息超出字符限制 */
    $(".share_text textarea").keyup(
        function() {
            var num = $(this).val().length;
            $(this).parent().next(".pop_sent").find(".share_count").html(140 - num).css("color", "#999");
            $(this).parent().next(".pop_sent").find(".pop_com").css("background-color", "#f8991d");
            if (num >= 130 && num <= 140) {
                $(this).parent().next(".pop_sent").find(".share_count").css("color", "red")
            }
            else if (num > 140) {
                $(this).val($(this).val().substring(0, 140))
                $(this).parent().next(".pop_sent").find(".share_count")
                    .html("超出限制!").css("color", "red")
                $(this).parent().next(".pop_sent").find(".pop_com").css(
                    "background-color", "#ccc")
            }
        });

    /*评论内容为0弹框*/
    $('.publish_btn').click(
        function(){
            if ($(this).parent().parent('.reply_block').children('.reply_block input').val() != ""){
            }
            else{
                $('.share_bg').show();
                $('.alertbox').show();
            }
        }
    );
    $(".reply_block input").click(
        function(event) {
            event.stopPropagation();
            //$(".comment_input span").remove();
            $(this).parent(".reply_block").children('.info_comment_publish_btn').children('.publish_btn').css("background-color", "#139b68");
            var that = this;
            var PubBtn = $(this).parent(".reply_block").children('.info_comment_publish_btn').children('.publish_btn');
            $(PubBtn).on("click", function(event)
            {
                $(that).focus();
                event.stopPropagation();
            });
            $(document).click(
                function() {
                    $(that).parent(".inputbox").css(
                        "border-color", "#dfdfdf")
                        .next("a").css(
                        "background-color",
                        "#71c3a4");
                    if ($(that).val() != "")
                    {
                        $(".alertbox").remove();
                        alertFn("您当前正处于编辑状态，是否放弃？", 1)
                        $(
                            ".alertbox .pop_hd a,.alertbox .pop_clear")
                            .click(function() {
                                $(that)
                                    .focus();
                                $(that)
                                    .parent(".inputbox").css("border-color", "#f8991d").next("a").css("background-color", "#139b68")
                            });
                        $(".alertbox .pop_com").click(function() {
                            $(that).val("")
                        })
                    } else
                    {
                        $(".reply_block span")
                            .remove();
                        $(that)
                            .parents(".reply_block ").append('<span>您未输入内容，随便写点什么吧！</span>')
                    }
                })
        });
    /*'我的'切换*/
    $('.person_page_list a').click(function(){
        $(this).parent().parent('.person_page_list ul').children().children('.person_page_list a').removeClass('on');
        $(this).addClass('on');
    });
    /*反馈*/
    /*$(".feed_back_box .pop_hd a").live("click", function()
    {
        $(this).parents(".feed_back_box").fadeOut(200)
        $(".success_tips").hide().siblings(".pop_part").show()
        $(".share_bg").css("display", "none")
        $(".share_box .pop_bd").css("height", "auto")
    });
    /*投稿弹窗*/
    $(".post_close,.cancel_btn").click(function()
    {
        $(".post_box").fadeOut(200)
        $(".post_success").hide().siblings("div").fadeIn(300)
        $(".share_bg").css("display", "none")
    });
    $('.post_send').click(function(){
        $('.post_box').hide();
        $('.share_bg').hide();
    });
    /*2.15提问（添加）*/
    $('.tags_search .tags_items').click(function(){
        $('.BBAQ_detail_tags').append('<a class="tags_item tags_change" href="javascript:;"><strong>'+$(this).children('.tags').html()+'</strong><span class="invite_clear" href="javascript:;"></span></a>');
        clearTags()
    });
    function clearTags(){
        $('.invite_clear').click(function(){
            $(this).parent('.tags_item').remove()
        });
    }
    clearTags();
    /*拖拽*/
    function drag(obox, n, doc)
    {
        $(obox).find(".pop_hd").mousedown(function(ev)
        {   var ev = ev || event;
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var disX = ev.clientX - $(obox).offset().left;
            var disY = ev.clientY + n * scrollTop - $(obox).offset().top;
            var SelfL = -parseInt($(obox).css("margin-left"));
            var SelfT = -parseInt($(obox).css("margin-top"));
            var maxY = $(window).height() - $(obox).height()/2;
            $(document).mousemove(function(ev)
            {
                var ev = ev || event;
                var L = ev.clientX - disX + SelfL;
                var T = ev.clientY - disY + SelfT;
                if (L < SelfL)
                {
                    L = SelfL;
                }
                else if (L > $(window).width() - $(obox).width() + SelfL)
                {
                    L = $(window).width() - $(obox
                        ).width() + SelfL;
                }
                if (T < SelfT)
                {
                    T = SelfT;
                }
                else if (T > $(doc).height() - $(obox).height() + SelfT)
                {
                    T = $(doc).height() - $(obox
                        ).height() + SelfT;
                }
                T = T > maxY ? maxY : T;
                $(obox).css(
                    {
                        "left"	: L,
                        "top"	: T
                    })
            });
            $(document).mouseup(function()
            {
                $(this).unbind("mousemove");
            });
            return false;
        })
    }
    drag(".share_box", 1, window);
    drag(".study_invite", 1, window);
    drag(".video_error", 1, window);
    drag(".report_box", 1, window);
    drag(".col_box", 1, window);
    drag(".zone_person_box", 1, window);
    drag(".QA_delete", 1, window);
    drag(".feed_back_box", 1, window);
    drag(".ques_box", 1, window);
    drag(".alertbox", 1, document);
    /*app下载*/
    $('.app_down').hover(function(){
        $(this).children('.app_code').stop().fadeIn(400);
            },function(){
        $(this).children('.app_code').stop().fadeOut(400);
    });
    /*悬浮层app微信*/
    $('.float_side .pr').hover(function(){
        $(this).children('.side_add').show();
    },function(){
        $(this).children('.side_add').hide();
    });

});
function alertFn(text, sent, title)
{
    var title = '提示信息';
    $(".share_bg").css("display", "block")
    $("<div class='pop_box alertbox'></div>")
        .html('<div class="invite_shadow"><div class="pop_hd"><h3>' + title + '</h3><a href="javascript:;"></a></div><div class="pop_bd"><div class="pop_part"><h3 class="pop_caution">' + text + '</h3><div class="pop_sent"><a class="pop_clear" href="javascript:;">取消</a><a class="pop_com" href="javascript:;">确定</a></div></div></div></div>')
        .appendTo($("body"));
    if (!sent)
    {
        $(".alertbox .pop_sent").remove();
        $(".pop_caution").css("margin-bottom", "20px")
    }
    $(".alertbox .pop_hd a,.alertbox .pop_sent a").click(
        function(event)
        {
            event.stopPropagation();
            $(this).parents(".alertbox").remove(), $(".share_bg").css(
                "display", "none")
        })
}