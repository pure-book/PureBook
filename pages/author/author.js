const app = getApp()
var http = require('../../utils/httpUtil.js')
var api = ""
var params = {

}

Page({
  data:{
    authorInfo:{
      authorName:"木心（1927-2011)",
      authorDescription:"木心，中国当代文学大师、画家，在台湾和纽约华人圈被视为深解中国传统文化的精英和传奇人物。出版多部著作。1927年生于浙江桐乡乌镇东栅。本名孙璞，字仰中，号牧心，笔名木心。毕业于上海美术专科学校。1982年定居纽约。2011年12月21日3时逝世于故乡乌镇，享年84岁。"
    },
    authorWorkArray:[{
      authorWorkTitle:"哥伦比亚的倒影"
    },{
      authorWorkTitle: "哥伦比亚的倒影"
    },{
      authorWorkTitle: "哥伦比亚的倒影"
    }
    ]

  },

  onLoad:function(){
    var api = ""
    var params = {

    }
    http.GET(api, params, function (res) {

    })

  },

  jumpBook:function(){
    wx.navigateTo({
      url: '../book/book',
    })
  }
  
})