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
            "src": "http://www.mohanshen.com/photos/4izt8txqmes-anders-jilden-768x512.jpg",
            "thumb": "http://www.mohanshen.com/photos/4izt8txqmes-anders-jilden-768x512.jpg"
        },
        {
            "alt": "Friends",
            "pid": 2,
            "src": "http://www.mohanshen.com/photos/i-m-priscilla-149914-1062x708.jpg",
            "thumb": "http://www.mohanshen.com/photos/i-m-priscilla-149914-1062x708.jpg"
        },
        {
            "alt": "Father",
            "pid": 3,
            "src": "http://www.mohanshen.com/photos/caleb-jones-131203-473x708.jpg",
            "thumb": "http://www.mohanshen.com/photos/caleb-jones-131203-473x708.jpg"
        },
        {
            "alt": "Camera",
            "pid": 4,
            "src": "http://www.mohanshen.com/6e26rfp0zbu-jacob-sapp-1062x708.jpg",
            "thumb": "http://www.mohanshen.com/6e26rfp0zbu-jacob-sapp-1062x708.jpg"
        }
    ]
};

$("#more").click(function() {
   layer.msg("没有啦，她们还在设计，也可能没设计！");
});

$("#submit").click(function() {
   layer.msg("后台都没有，你提交个蛋啊");
});

$("#imageMenu,#designMenu").click(function () {
    layer.msg("不存在的");
});

$("#aboutMenu").click(function () {
    layer.photos({
        photos: _photoJson
    });
});


