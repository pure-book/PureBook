const app = getApp()
var http = require('../../utils/httpUtil.js')

Page({
  data: {
    userInfo: {},
    booklistArray:[{
      booklistName:"",
      bookCount:0,
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
      for (let i = 0; i < res.data.data.length; i++) {
        var param1 = "booklistArray[" + i + "].booklistName"
        var param2 = "booklistArray[" + i + "].bookCount"
        var param3 = "booklistArray[" + i + "].starCount"
        var param4 = "booklistArray[" + i + "].authorId"
        var param5 = "booklistArray[" + i + "].booklistId"
        that.setData({
          [param1]:res.data.data[i].name,
          [param2]:res.data.data.length,
          [param4]:res.data.data[i].userId,
          [param5]:res.data.data[i].id
        })
      }
    })
  },
  onShow: function () {
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
      for (let i = 0; i < res.data.data.length; i++) {
        var param1 = "booklistArray[" + i + "].booklistName"
        var param2 = "booklistArray[" + i + "].bookCount"
        var param3 = "booklistArray[" + i + "].starCount"
        var param4 = "booklistArray[" + i + "].authorId"
        var param5 = "booklistArray[" + i + "].booklistId"
        that.setData({
          [param1]: res.data.data[i].name,
          [param2]: res.data.data.length,
          [param4]: res.data.data[i].userId,
          [param5]: res.data.data[i].id
        })
      }
    })
  },

  jumpBooklist:function(e){
    var index = e.currentTarget.dataset.index
    wx.navigateTo({
      url: '../booklist/booklist?id='+this.data.booklistArray[index].booklistId
      +'&name='+this.data.booklistArray[index].booklistName
    })
  }

  

})