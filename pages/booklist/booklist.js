const app = getApp()
var http = require('../../utils/httpUtil.js')

Page({
  data: {
    userInfo: {},
    booklistName:"",
    booklistId:0,
    likeBookArray: [{
      bookName: "",
      bookAuthor: "",
      bookId:0
    }]
  },

  jumpBook: function (e) {
    var index = e.target.dataset.index
    wx.navigateTo({
      url: '../book/book?id=' + this.data.likeBookArray[index].bookId,
    })
  },

  onLoad: function (options) {
    var that = this
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      })
    })

    var api = "/users/" + app.globalData.userId + "/booklist/book"
    var params={
      'booklistId':options.id
    }
    http.GET(api, params, function (res) {
      const data = res.data.data
      for (var i = 0; i < data.length; i++) {
        const param1 = "likeBookArray[" + i + "].bookName"
        const param2 = "likeBookArray[" + i + "].bookAuthor"
        const param3 = "likeBookArray[" + i + "].bookId"


        that.setData({
          [param1]: data[i].name,
          [param2]:data[i].author,
          [param3]: data[i].id
        })
      }
      that.setData({
        'booklistName': options.name,
        'booklistId':options.id
      })
    })

  }

})