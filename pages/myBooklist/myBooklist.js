const app = getApp()
var http = require('../../utils/httpUtil.js')

Page({
  data: {
    userInfo: {},
    booklistArray:[{
      booklistName:"",
      bookCount:0,
      starCount:0,
      booklistId:0,
      authorId:""
    }]
  },

  onLoad: function () {
    var that = this
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      })
    })

    var api = "/users/" + app.globalData.userId + "/booklist"
    var params = {}
    http.GET(api, params, function (res) {
      console.log(res.data.data)
      for (var i = 0; i < res.data.data.length; i++) {
        var param1 = "booklistArray[" + i + "].booklistName"
        var param2 = "booklistArray[" + i + "].bookCount"
        var param3 = "booklistArray[" + i + "].starCount"
        var param4 = "booklistArray[" + i + "].authorId"
        that.setData({
          [param1]: res.data.data[i].name,
          [param4]:res.data.data[i].userId
        })
      }
    })




  },

  jumpBooklist:function(e){
    var index = e.target.dataset.index
    wx.navigateTo({
      url: '../booklist/booklist?id='+this.data.booklistArray[index].booklistId,
    })
  }

})