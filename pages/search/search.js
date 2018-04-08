// pages/search/search.js
const app = getApp()
var http = require('../../utils/httpUtil.js')

Page({
  data: {
    BookArray: [{
      BookTitle: "",
      BookCover: "",
      BookId:0
    }
    ],
    AuthorArray: [{
      AuthorName:"木心",
      AuthorImage:"../../images/author-1.jpg"
    }, {
      AuthorName: "木心",
      AuthorImage: "../../images/author-1.jpg"
    },{
      AuthorName:"木心",
      AuthorImage:"../../images/author-1.jpg"
    }
    ]
  },

  onShow:function(){
    var that = this
    var api = "/books/hot"
    var params = {}
    http.GET(api, params, function (res) {
      const data = res.data.data
      for (var i = 0; i < data.length; i++) {
        var param1 = "BookArray[" + i + "].BookTitle"
        var param2 = "BookArray[" + i + "].BookCover"
        var param3 = "BookArray[" + i + "].BookId"

        that.setData({
          [param1]: data[i].name,
          [param2]: data[i].cover,
          [param3]: data[i].id
        })
      }
    })
  },

  onLoad: function () {
    var that = this
    var api = "/books/hot"
    var params = {}
    http.GET(api, params, function (res) {
      const data = res.data.data
      for (var i = 0; i < data.length; i++) {
        var param1 = "BookArray[" + i + "].BookTitle"
        var param2 = "BookArray[" + i + "].BookCover"
        var param3 = "BookArray[" + i + "].BookId"

        that.setData({
          [param1]: data[i].name,
          [param2]: data[i].cover,
          [param3]: data[i].id
        })
      } 
    })

  },

  Search: function(e){
    wx.navigateTo({
      url: '../searchResult/searchResult?content='+e.detail.value
    })
  },

  jumpBook:function(e){
    const index = e.target.dataset.index
    console.log(index)
    wx.navigateTo({
      url: '../book/book?id=' + this.data.BookArray[index].BookId
    })
  }





})