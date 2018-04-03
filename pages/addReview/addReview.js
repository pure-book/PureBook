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
    var api1 = ""
    var params1 = {}
    http.POST(api1,params1,function(res){
      const data = res.data.data
      that.setData({

      })
    })

    var api2 = "/books/" + bookId
    var params2 = {}
    http.GET(api2, params2, function (res) {
      const data = res.data.data
      that.setData({
        'bookTitle': data.name,
        'bookAuthor': data.author,
        'bookId':data.id
      })
    })

  },

  submitReview: function(){
    wx.showToast({
      title: '已提交'
    })
    wx.navigateBack({
      delta:1
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

