const app = getApp()
var http = require('../../utils/httpUtil.js')

Page({
  data: {
    userInfo: {},
    likeBookArray:[{
      bookName:"111",
      bookAuthor:"111"
    }]
  },

  jumpBook: function () {
    wx.navigateTo({
      url: '../book/book',
    })
  },

  onLoad: function () {
    var that = this
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      })
    })

    var api = "/users/"+app.globalData.userId + "/collection"
    var params={}
    http.GET(api,params,function(res){
      console.log(res.data.data)
      
      
      for(var i =0;i<res.data.data.length;i++){
        var param1 = "likeBookArray[" + i + "].bookName"
        var param2 = "likeBookArray[" + i + "].bookAuthor"
        that.setData({
          [param1]:res.data.data[i].name,
          [param2]:res.data.data[i].author
        })
      }

    })

  },
  
})