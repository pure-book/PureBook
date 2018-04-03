// pages/addExcerpt/addExcerpt.js
const app = getApp()
var http = require('../../utils/httpUtil.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    bookInfo: {
      bookName: "",
      bookAuthor: "",
      bookId:0
    },
    excerptInfo:{
      content:"",
      excerptAuthorId:""
    }
  
  },

  onLoad: function (options) {
    var that = this
    var api1 = "/books/" + options.bookId
    var params1 = {}
    http.GET(api1, params1, function (res) {
      const data = res.data.data
      that.setData({
        'bookInfo.bookName': data.name,
        'bookInfo.bookAuthor': data.author,
        'bookInfo.bookId': options.bookId
      })
    })

    var api2 = "/users/"+app.globalData.userId+"/excerpt"
    var params2={
      bookId:options.bookId,
      content:that.data.excerptInfo.content
    }
    http.POST(api2, params2, function (res) {
      const data = res.data.data
      console.log(data)
    })


    
  },

  submitExcerpt: function(){
    wx.showToast({
      title: '已提交',
    })
    wx.navigateBack({
      delta: 1
    })
  },

  bindExcerptInput:function(e){
    this.setData({
      'excerptInfo.content': e.detail.value
    })
  }
})