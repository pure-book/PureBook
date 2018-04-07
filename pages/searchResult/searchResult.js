// pages/search/search.js
const app = getApp()
var http = require('../../utils/httpUtil.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    BookArray: [{
      bookId: 0,
      BookTitle: "",
      AuthorName: "",
      BookCover: "",
      bookTagArray: [{
        bookTag: ""
      }]      
    }]
  },
  
  onLoad: function (options) {
    var that = this
    var api="/books/bookname"
    var params={
      nameLike:options.content
    }

    http.GET(api,params,function(res){
      const data = res.data.data
      console.log(res.data.data)
      for (let i = 0; i < res.data.data.length; i++) {
        const param1 = "BookArray[" + i + "].BookTitle"
        const param2 = "BookArray[" + i + "].AuthorName"
        const param3 = "BookArray[" + i + "].BookCover"
        const param4 = "BookArray[" + i + "].bookId"
       
        that.setData({
          [param1]: res.data.data[i].name,
          [param2]: res.data.data[i].author,
          [param3]: res.data.data[i].cover,
          [param4]: res.data.data[i].id
        })

        var api2 = "/books" + res.data.data[i].id + "/tags"
        console.log(i)
        var params2 = {}
        http.GET(api2, params2, function (res) {
          const data = res.data.data
          console.log(data)
          for (let j = 0; j < 3; j++) {
            const param = "BookArray[" + i + "].bookTagArray[" + j + "].bookTag"
            console.log(i)
            that.setData({
              [param]: data[j].field,
            })
          }
        })
      }
    })

    var api3 = "/books/booktag"
    var params3 = {
      tag: options.content
    }

    http.GET(api3, params3, function (res) {
      const data = res.data.data
      console.log(res.data.data)
      for (let i = 0; i < res.data.data.length; i++) {
        const param1 = "BookArray[" + i + "].BookTitle"
        const param2 = "BookArray[" + i + "].AuthorName"
        const param3 = "BookArray[" + i + "].BookCover"
        const param4 = "BookArray[" + i + "].bookId"

        that.setData({
          [param1]: res.data.data[i].name,
          [param2]: res.data.data[i].author,
          [param3]: res.data.data[i].cover,
          [param4]: res.data.data[i].id
        })

        var api2 = "/books/" + res.data.data[i].id + "/tags"
        console.log(i)
        var params2 = {}
        http.GET(api2, params2, function (res) {
          const data = res.data.data
          console.log(data)
          for (let j = 0; j < 3; j++) {
            const param = "BookArray[" + i + "].bookTagArray[" + j + "].bookTag"
            console.log(i)
            that.setData({
              [param]: data[j].field,
            })
          }
        })
      }
    })
  },

  
  onShow: function () {

  },


  Search: function (e) {
    wx.redirectTo({
      url: '../searchResult/searchResult?content=' + e.detail.value
    })
    
  },

  jumpBook: function (e) {
    var that = this
    var index = e.target.dataset.index
    console.log(that.data.BookArray[index].bookId)
    wx.navigateTo({
      url: '../book/book?id=' + that.data.BookArray[index].bookId,
    })
  },
})