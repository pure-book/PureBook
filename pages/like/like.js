const app = getApp()
var http = require('../../utils/httpUtil.js')

Page({
  data: {
    userInfo: {},
    likeBookArray:[{
      bookName:"default",
      bookAuthor:"default",
      bookId:0
    }]
  },

  jumpBook: function (e) {
    var index = e.currentTarget.dataset.index
    wx.navigateTo({
      url: '../book/book?id='+this.data.likeBookArray[index].bookId,
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
      for(let i =0;i<res.data.data.length;i++){
        var param1 = "likeBookArray[" + i + "].bookName"
        var param2 = "likeBookArray[" + i + "].bookAuthor"
        var param3 = "likeBookArray[" + i + "].bookId"
        that.setData({
          [param1]:res.data.data[i].name,
          [param2]:res.data.data[i].author,
          [param3]:res.data.data[i].id
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
    var api = "/users/" + app.globalData.userId + "/collection"
    var params = {}
    http.GET(api, params, function (res) {
      for (let i = 0; i < res.data.data.length; i++) {
        var param1 = "likeBookArray[" + i + "].bookName"
        var param2 = "likeBookArray[" + i + "].bookAuthor"
        var param3 = "likeBookArray[" + i + "].bookId"
        that.setData({
          [param1]: res.data.data[i].name,
          [param2]: res.data.data[i].author,
          [param3]: res.data.data[i].id
        })
      }
    })
  }
})