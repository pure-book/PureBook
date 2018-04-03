// pages/bookExcerpt/bookExcerpt.js
const app = getApp()
var template = require('../../components/tabbar/tabbar.js');
var http = require('../../utils/httpUtil.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookInfo:{
      bookName:"",
      bookAuthor:"",
      bookId:0
    },
    bookExcerptArray:[{
      excerptContent: ""
    }]
  
  },

  onShow:function(){
    var that = this
    var api = "/books/" + app.globalData.currentBookId + "/excerpt"
    var params = {}
    http.GET(api, params, function (res) {
      const data = res.data.data
      console.log(data)
      for (var i = 0; i < data.length; i++) {
        const param1 = "bookExcerptArray[" + i + "].excerptContent"
        that.setData({
          [param1]: data[i].content
        })
      }
    })
  },

  onLoad: function (options) {
    template.tabbar("tabbar", 1, this)
    var that = this
    var api1 = "/books/"+app.globalData.currentBookId+"/excerpt"
    var params1 = {}
    http.GET(api1, params1, function (res) {
      const data = res.data.data
      console.log(data)
      for(var i =0;i<data.length;i++){
        const param1 = "bookExcerptArray[" + i + "].excerptContent"
        that.setData({
          [param1]:data[i].content
        })
      }
      
    })
    var api2 = "/books/" + app.globalData.currentBookId
    var params2 = {}
    http.GET(api2, params2, function (res) {
      const data = res.data.data
      that.setData({
        'bookInfo.bookName': data.name,
        'bookInfo.bookAuthor': data.author,
        'bookInfo.bookId':app.globalData.currentBookId

      })
    })
  },


  addExcerpt:function(){
    wx.navigateTo({
      url: '../addExcerpt/addExcerpt?bookId='+this.data.bookInfo.bookId,
    })
  }
})