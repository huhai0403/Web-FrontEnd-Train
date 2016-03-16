$(function(){
    jQuery(".slideBox").slide({mainCell:".bd ul",autoPlay:true});
    function Hover(a)
    {
        $(".info_list li").hover(function()
            {
                $(this).children(".fri_action").find(a).show()
            },
            function(){
                $(this).children(".fri_action").find(a).hide()
            })
    }
    Hover(".share");Hover(".col");
});







