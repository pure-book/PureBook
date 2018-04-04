// pages/search/search.js
const app = getApp()
var http = require('../../utils/httpUtil.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    BookArray: [{
      BookTitle: "",
      BookCover: ""
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var api = "/books/hot"
    var params = {

    }
    http.GET(api, params, function (res) {
      const data = res.data.data
      for (var i = 0; i < res.data.data.length; i++) {
        var param1 = "BookArray[" + i + "].BookTitle"
        var param2 = "BookArray[" + i + "].BookCover"

        that.setData({
          [param1]: res.data.data[i].name,
          [param2]: res.data.data[i].cover
        })
      } 
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  Search: function(e){
    wx.navigateTo({
      url: '../searchResult/searchResult?content='+e.detail.value
    })
  }





})