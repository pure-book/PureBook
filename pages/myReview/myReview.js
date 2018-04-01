const app = getApp()
var http = require('../../utils/httpUtil.js')

Page({
  data: {
    userInfo: {},
    reviewArray:[{
      reviewTitle:"顾影的木心",
      reviewBook:"哥伦比亚的倒影",
      reviewDate:{
        year:2018,
        month:2,
        day:27
      }
    },{
      reviewTitle: "顾影的木心",
      reviewBook: "哥伦比亚的倒影",
      reviewDate: {
        year: 2018,
        month: 2,
        day: 27
      }
    },{
      reviewTitle: "顾影的木心",
      reviewBook: "哥伦比亚的倒影",
      reviewDate: {
        year: 2018,
        month: 2,
        day: 27
      }
    }]
  },

  onLoad: function () {
    var that = this
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      })
    })
    
    var api = "users/" + app.globalData.userId + "/collection"
    var params = {}
    http.GET(api, params, function (res) {
      console.log(res.data)
    })
  },
  
  gotoreview: function(){
    wx.navigateTo({
      url: '../bookReview/bookReview',
    })
  }

})