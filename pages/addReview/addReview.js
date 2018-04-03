// pages/addReview/addReview.js
const app = getApp()
var http = require('../../utils/httpUtil.js')

Page({
  data: {
    bookName: "",
    bookAuthor: "",
    bookId:0,
    reviewTitle:"",
    reviewContent:"",  
    reviewId:0
  },


  onLoad: function (options) {
    var that = this
    var api = "/books/" + options.bookId
    var params = {}
    http.GET(api, params, function (res) {
      const data = res.data.data
      that.setData({
        'bookName': data.name,
        'bookAuthor': data.author,
        'bookId':data.id
      })
    })

  },

  submitReview: function(){
    var that = this
    var api = "/users/" + app.globalData.userId + "/reviews"
    var params = {
      bookId: that.data.bookId,
      review:that.data.reviewContent,
      title: that.data.reviewTitle
    }
    http.POST(api, params, function (res) {
      const data = res.data.data
      wx.showToast({
        title: '已提交',
      })

      wx.navigateBack({
        delta: 1
      })
    })

    
  },

  titleInput:function(e){
    this.setData({
      'reviewTitle': e.detail.value
    })
  },
  
  contentInput:function(e){
    this.setData({
      'reviewContent': e.detail.value
    })
  }

})

