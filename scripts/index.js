/**
 * Created by Peng on 2017/2/23.
*/
var _photoJson =
{
    "title": "aboutPhoto",
    "id": 123,
    "start": 0,
    "data": [
        {
            "alt": "Moon",
            "pid": 1,
            "src": "http://www.mohansheng.com/photos/4izt8txqmes-anders-jilden-768x512.jpg",
            "thumb": "http://www.mohansheng.com/photos/4izt8txqmes-anders-jilden-768x512.jpg"
        },
        {
            "alt": "Friends",
            "pid": 2,
            "src": "http://www.mohansheng.com/photos/i-m-priscilla-149914-1062x708.jpg",
            "thumb": "http://www.mohansheng.com/photos/i-m-priscilla-149914-1062x708.jpg"
        },
        {
            "alt": "Father",
            "pid": 3,
            "src": "http://www.mohansheng.com/photos/caleb-jones-131203-473x708.jpg",
            "thumb": "http://www.mohansheng.com/photos/caleb-jones-131203-473x708.jpg"
        },
        {
            "alt": "Camera",
            "pid": 4,
            "src": "http://www.mohansheng.com/photos/6e26rfp0zbu-jacob-sapp-1062x708.jpg",
            "thumb": "http://www.mohansheng.com/photos/6e26rfp0zbu-jacob-sapp-1062x708.jpg"
        }
    ]
};

//数组存各区域到顶部的距离
var _top = new Array;

$("#more").click(function() {
   layer.msg("没有啦，她们还在设计，也可能没设计！");
});

$("#submit").click(function() {
   layer.msg("后台都没有，你提交个蛋啊");
});
$("#indexMenu").click(function () {
    $("body").scrollTop(0);
})
$("#imageMenu").click(function () {
    $("body").scrollTop(_top[0]);
});

$("#designMenu").click(function () {
    $("body").scrollTop(_top[1]);
});
$("#messageMenu").click(function () {
    $("body").scrollTop(_top[2]);
})

$("#aboutMenu").click(function () {
    layer.photos({
        photos: _photoJson
    });
})

$("#more").click(function () {

});


$(document).ready(function(){

    _top[0] = $(".imageDiv").position().top-75;
    _top[1] = $(".designDiv").position().top-75;
    _top[2] = $(".messageDiv").position().top-75;

    $(window).scroll(function () {
        var winTop = $(window).scrollTop();
        if(winTop<_top[0]) {
            $("#indexMenu").addClass("underline");
            $("#imageMenu,#designMenu,#messageMenu").removeClass("underline");
        }
        if(winTop >= _top[0] && winTop <_top[1]-1) {
            $("#imageMenu").addClass("underline");
            $("#indexMenu,#designMenu,#messageMenu").removeClass("underline");
        } else if(winTop >= (_top[1]-1) && winTop <_top[2]-1) {
            $("#designMenu").addClass("underline");
            $("#indexMenu,#imageMenu,#messageMenu").removeClass("underline");
        } else if(winTop >= _top[2]-1) {
            $("#messageMenu").addClass("underline");
            $("#indexMenu,#designMenu,#imageMenu").removeClass("underline");
        }
    });
    　
});


