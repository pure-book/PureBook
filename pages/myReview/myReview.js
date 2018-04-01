const app = getApp()

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
  },
  
  gotoreview: function(){
    wx.navigateTo({
      url: '../bookReview/bookReview',
    })
  }

})