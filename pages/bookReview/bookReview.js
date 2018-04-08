// pages/bookReview/bookReview.js
const app = getApp()
var template = require('../../components/tabbar/tabbar.js')
var http = require('../../utils/httpUtil.js')

Page({

  data: {
    bookId:0,
    bookInfo:{
      bookTitle:"",
      bookAuthor:""
    },
    bookReviewArray:[{
      bookReviewTitle:"",
      bookReviewUserAvatar:"",
      bookReviewUserName:"",
      bookReviewContent:"",
      bookReviewId:0
    }]
  
  },

  onShow: function () {
    var that = this
    var bookId = app.globalData.currentBookId
    that.setData({ 'bookId': bookId })
    var api1 = "/books/" + bookId + "/reviews"
    var params1 = {}
    http.GET(api1, params1, function (res) {
      const data = res.data.data
      console.log(data)
      for (var i = 0; i < data.length; i++) {
        const param1 = "bookReviewArray[" + i + "].bookReviewTitle"
        const param2 = "bookReviewArray[" + i + "].bookReviewUserAvatar"
        const param3 = "bookReviewArray[" + i + "].bookReviewUserName"
        const param4 = "bookReviewArray[" + i + "].bookReviewContent"
        const param5 = "bookReviewArray[" + i + "].bookReviewId"
        that.setData({
          [param1]: data[i].title,
          [param2]: data[i].userAvatar,
          [param3]: data[i].userName,
          [param4]: data[i].review.slice(0,120)+"...",
          [param5]: data[i].id
        })
      }
    })

    var api2 = "/books/" + bookId
    var params2 = {}
    http.GET(api2, params2, function (res) {
      const data = res.data.data
      that.setData({
        'bookInfo.bookTitle': data.name,
        'bookInfo.bookAuthor': data.author

      })
    })
  },


  onLoad: function (options) {
    template.tabbar("tabbar", 2, this)
    var that = this
    var bookId = app.globalData.currentBookId
    that.setData({ 'bookId': bookId})
    var api1 = "/books/" + bookId+"/reviews"
    var params1 = {}
    http.GET(api1, params1, function (res) {
      const data = res.data.data
      console.log(data)
      for (var i = 0; i < data.length; i++) {
        const param1 = "bookReviewArray[" + i + "].bookReviewTitle"
        const param2 = "bookReviewArray[" + i + "].bookReviewUserAvatar"
        const param3 = "bookReviewArray[" + i + "].bookReviewUserName"
        const param4 = "bookReviewArray[" + i + "].bookReviewContent"
        const param5 = "bookReviewArray[" + i + "].bookReviewId"
        that.setData({
          [param1]: data[i].title,
          [param2]: data[i].userAvatar,
          [param3]: data[i].userName,
          [param4]: data[i].review.slice(0, 120) + "...",
          [param5]:data[i].id
        })
      }
    })

    var api2 = "/books/" + bookId
    var params2 = {}
    http.GET(api2, params2, function (res) {
      const data = res.data.data
      that.setData({
        'bookInfo.bookTitle': data.name,
        'bookInfo.bookAuthor': data.author

      })
    })
  
  },


  addReview:function(){
    wx.navigateTo({
      url: '../addReview/addReview?bookId='+this.data.bookId,
    })
  },

  jumpReview:function(e){
    var index = e.target.dataset.index
    wx.navigateTo({
      url: '../reviewDetail/reviewDetail?id=' + this.data.bookReviewArray[index].bookReviewId+'&bookName='+this.data.bookInfo.bookTitle+'&bookAuthor='+this.data.bookInfo.bookAuthor
    })
  }
})