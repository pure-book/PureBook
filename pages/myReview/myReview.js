const app = getApp()
var http = require('../../utils/httpUtil.js')

Page({
  data: {
    userInfo: {},
    reviewArray:[{
      reviewTitle:"",
      reviewBook:"",
      bookAuthor:"",
      reviewId:0,
      reviewMonth:0,
      reviewDay:0,
      reviewYear:0
    }]
  },

  onLoad: function () {
    var that = this
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      })
    })
    
    const api = "/users/" + app.globalData.userId + "/reviews"
    let params = {}
    http.GET(api, params, function (res) {
      const data = res.data.data;
      for (let i = 0; i < data.length; i++) {
        const param1 = "reviewArray[" + i + "].reviewTitle"
        const param2 = "reviewArray[" + i + "].reviewBook"
        const param3 = "reviewArray[" + i + "].reviewId"
        const param4 = "reviewArray[" + i + "].reviewYear"
        const param5 = "reviewArray[" + i + "].reviewMonth"
        const param6 = "reviewArray[" + i + "].reviewDay"
        const param7 = "reviewArray[" + i + "].bookAuthor"
    
        http.GET("/books/"+data[i].bookId,{},function(r){
          that.setData({
            [param1]: data[i].title,
            [param2]: r.data.data.name,
            [param3]: data[i].id,
            [param4]: new Date(data[i].time).getFullYear(),
            [param5]: new Date(data[i].time).getMonth(),
            [param6]: new Date(data[i].time).getDate(),
            [param7]: r.data.data.author
          })
        })
      }
    })
  },
  
  gotoreview: function (e){
    var index = e.currentTarget.dataset.index
    wx.navigateTo({
      url: '../reviewDetail/reviewDetail?id=' + this.data.reviewArray[index].reviewId+'&bookName='+this.data.reviewArray[index].reviewBook+'&bookAuthor='+this.data.reviewArray[index].bookAuthor,
    })
  }

})